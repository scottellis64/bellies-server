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
            id : "filterBrand4"
        });

        const filter = store.getState().filters.get("filter");
        expect(filter.get("label")).toBe("Puma");
    });

    it('can get filters organized by type', () => {
        const store = createServerStore();
        store.dispatch({
            type: GET_FILTERS
        });

        const filters = store.getState().filters;
        const allFilters = filters.get("allFilters");

        const filterIDs = allFilters.map((obj, id) => {
            //obj.items.forEach(item => {
            //    console.log(item);
            //});

            console.log(obj.items);

            return id;
        }).toArray();
        expect(filterIDs).toEqual(["filterTypeBrands", "filterTypePrice", "filterTypeSize"]);

        const filterNames = allFilters.map((obj) => {
            return obj.name;
        }).toArray();
        expect(filterNames).toEqual(["Brands", "Price", "Size"]);

        //allFilters.forEach( (filterObj, filterName) => {
        //    console.log(filterObj);
        //    console.log(filterName);
        //});
    })
});