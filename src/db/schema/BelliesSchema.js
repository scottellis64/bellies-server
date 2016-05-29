import cson from "cson";
import mongoose from "mongoose";

export default class BelliesSchema {
    constructor(server, dbname, structure, port = null) {
        this.server = server;
        this.port = port;
        this.structure = structure;
        this.dbname = dbname;
        this.uri = "mongodb://" + server;

        if (port) {
            this.uri += ":" + port;
        }

        this.uri += "/" + dbname;

        this.schema = null;
        this.Model = null;
    }

    setup() {
        const that = this;
        mongoose.connect(this.uri, null, function(err) {
            if (err) {
                throw "ERROR connecting to mongodb at " + that.uri + ".\n" + err;
            } else {
                console.log ("Successfully connected to: remote" + that.uri);
            }
        });

        this.schema = new mongoose.Schema(this.structure);
        this.Model = mongoose.model(this.dbname, this.schema);
    }

    loadTestData() {
        const data = cson.load(`${process.cwd()}/src/db/schema/data/${this.dbname}-data.json`);
        if (data && data[this.dbname]) {
            var that = this;
            data[this.dbname].forEach(function (meta) {
                let modelEntity = new that.Model(meta);
                modelEntity.save(function(err, savedModel) {
                    if (err) {
                        console.error(err);
                    }

                    console.log(`Successfully saved ${JSON.stringify(savedModel)}`);
                });
            });
        }
    }

    save(model) {
        model.save(function(err, savedModel) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully saved ${JSON.stringify(savedModel)}`);
            }
        });
    }

    all(callback) {
        var that = this;
        return this.Model.find({}, function(err, data) {
            if (err) {
                that.onError(err);
            }

            callback(data);
        }).exec();
    }

    remove(data) {
        var that = this;
        this.Model.remove({_id : data._id}, function(err) {
            if (err) {
                that.onError(err);
            }
        }).exec();
    }

    showAll() {
        this.all(function(data) {
            console.log(this.dbname + ".showAll: " + JSON.stringify(data, null, 4));
        });
    }

    removeAll() {
        this.Model.remove({}).exec();
    }

    onError(err) {
        console.log(err);
    }

    getById(id, callback) {
        var that = this;
        return this.Model.findOne({_id : id}, function(err, comment) {
            if (err) {
                that.onError(err);
            } else if (callback) {
                callback(comment);
            }

            return comment;
        }).exec();
    }

    get(opts, callback, errCallback) {
        var that = this;
        return this.Model.findOne(opts, function(err, data) {
            if (err) {
                errCallback(err);
            } else if (callback) {
                callback(data);
            }

            return data;
        }).exec();
    }
}
