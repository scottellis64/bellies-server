import AccountSchema from "./schema/AccountSchema";

export default class BelliesDb {
    constructor(server, port = null) {
        this.accountSchema = new AccountSchema(server, port);
    }

    setup() {
        this.accountSchema.setup();
    }

    resetDatabase() {
        this.accountSchema.removeAll();
        this.accountSchema.loadTestData();
    }

    login(email, password, callback, errorCallback) {
        return this.accountSchema.login(email, password, callback, errorCallback);
    }
}



