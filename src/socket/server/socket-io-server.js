import Server from "socket.io";

function getResponse(state) {
    const products = state.products;
    const categories = state.categories;
    const filters = state.filters;

    let response = {};

    if (products) {
        let list = products.get("list");
        if (list) {
            response.products = list.toJS();
        }
    }

    if (categories) {
        const allCategories = categories.get("allCategories");
        if (allCategories) {
            response.categories = allCategories.toJS();
        }

        const category = categories.get("category");
        if (category) {
            response.category = category.toJS();
        }
    }

    if (filters) {
        let filter = filters.get("filter");
        if (filter) {
            response.filter = list.toJS();
        }

        let allFilters = filters.get("allFilters");
        if (allFilters) {
            response.filters = allFilters.toJS();
        }
    }

    return response;
}

export default function startSocketServer(store) {
    const io = new Server().attach(8090);

    console.log("Starting up");

    store.subscribe(
        () => {
            io.emit("state", getResponse(store.getState()));
        }
    );

    io.on('connection', (socket) => {
        const state = store.getState();
        if (state) {
            socket.emit("state", getResponse(store.getState()));
            socket.on("action", store.dispatch.bind(store));
        }
    });

    console.log("Listening");
}