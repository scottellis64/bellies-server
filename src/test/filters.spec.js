import {
    Map,
    fromJS
} from 'immutable';

import {
    GET_FILTERS,
    GET_FILTER_BY_ID
} from '../socket/constants/ActionTypes';

import createServerStore from "../socket/store/createServerStore";

describe('filters', () => {
    it('can retrieve a filter by ID', () => {
        const store = createServerStore();
        store.dispatch({
            type: GET_FILTER_BY_ID,
            id : "filterMaterialGold"
        });

        const filter = store.getState().filters.get("filter");
        expect(filter.get("label")).toBe("Gold");
    });

    it('can get filters organized by type', () => {
        const store = createServerStore();
        store.dispatch({
            type: GET_FILTERS
        });

        const filters = store.getState().filters;
        const allFilters = filters.get("allFilters");

        const filterIDs = allFilters.map((obj, id) => {
            return id;
        }).toArray();
        expect(filterIDs).toEqual(["filterTypeMaterial", "filterTypePrice", "filterTypeStyle"]);

        const filterNames = allFilters.map((obj) => {
            return obj.name;
        }).toArray();
        expect(filterNames).toEqual(["Material", "Price", "Style"]);
    })
});