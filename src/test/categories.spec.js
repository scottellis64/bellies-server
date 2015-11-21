import {
    Map,
    fromJS
} from 'immutable';

import {
    GET_CATEGORIES,
    GET_CATEGORY_BY_ID
} from '../socket/constants/ActionTypes';

import createServerStore from "../socket/store/createServerStore";

describe('categories', () => {
    it('can get a list of all categories', () => {
        const store = createServerStore();
        store.dispatch({
            type : GET_CATEGORIES
        });

        const state = store.getState();
        const allCategories = state.categories.get("allCategories");
        expect(allCategories.get("imageFolder")).toBe("/bellies/resources/img/categories");

        const categoryNames = allCategories.get("categories").map((obj) => {
            return obj.name;
        }).toArray();

        expect(categoryNames).toEqual(["Bracelets", "Necklaces", "Earrings", "Tassels"]);

        const categoryIDs = allCategories.get("categories").map((obj) => {
            return obj.id;
        }).toArray();
        expect(categoryIDs).toEqual(["bclt", "nkl", "erng", "tsl"]);
    });

    it('can get a category by id', () => {
        const store = createServerStore();
        store.dispatch({
            type : GET_CATEGORY_BY_ID,
            id : "bclt"
        });

        expect(store.getState().categories.getIn(["category", "name"])).toBe("Bracelets");
    });
});