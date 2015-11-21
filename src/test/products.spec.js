import {
    Map,
    fromJS
} from 'immutable';

import {
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCT_BY_ID
} from '../socket/constants/ActionTypes';

import createServerStore from "../socket/store/createServerStore";

describe('products', () => {
    it('can retrieve the complete set of products', () => {
        const store = createServerStore();
        store.dispatch({
            type: GET_PRODUCTS
        });
        expect(store.getState().products.get("list").size).toBe(22);
    });

    it('can retrieve products by category', () => {
        const store = createServerStore();
        store.dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            categoryID : "bclt"
        });

        expect(store.getState().products.get("list").size).toBe(6);
    });
});