import {fromJS, Map} from "immutable";
import {
    GET_FILTERS,
    GET_FILTER_BY_ID,
    TOGGLE_FILTER
} from "../constants/ActionTypes";

const initialState = new Map();

var var1 = [{
    label: "Material",
    types: [
        "gold", "silver", "glass", "gem stone", "rose gold", "antique gold", "antique silver", "brass", "leather chording"
    ]
},{
    label: "Style",
    types: [
        "Knotted", "vintage", "Macrame"
    ]
},{
    label: "Bracelet Type",
    types: [
        "Wrap"
    ]
},{
    label: "Necklace type",
    types: [
        "choker", "chained", "lariat"
    ]
},{
    label: "earring type",
    types: [
        "hoop", "dangle"
    ]
},{
    label: "",
    types: [
        "", ""
    ]
},{
    label: "",
    types: [
        "", ""
    ]
}];

const allFilters = fromJS({
    filtersByID : {
        filterBrand1 : {
            label: "Calvin Klein",
            numItems : 23,
            checked : false
        },
        filterBrand2 : {
            label: "Gucci",
            numItems : 4,
            checked : false
        },
        filterBrand3 : {
            label : "Adidas",
            numItems : 0,
            checked : false
        },
        filterBrand4 : {
            label : "Puma",
            numItems : 6,
            checked : false
        },
        filterPriceRange1 : {
            label: "$5 to $9.99",
            numItems: 3,
            checked: false
        },
        filterPriceRange2 : {
            label: "$10 to $19.99",
            numItems: 2,
            checked: false
        },
        filterPriceRange3 : {
            label: "$20 to $29.99",
            numItems: 7,
            checked: false
        },
        filterPriceRange4 : {
            label: "$30 >",
            numItems: 7,
            checked: false
        },
        filterSizeSmall : {
            label: "S",
            numItems: 1,
            checked: false
        },
        filterSizeMedium : {
            label: "M",
            numItems: 2,
            checked: false
        },
        filterSizeLarge : {
            label: "L",
            numItems: 3,
            checked: false
        },
        filterSizeExtraLarge : {
            label: "XL",
            numItems: 4,
            checked: false
        }
    },

    filterTypes : {
        filterTypeBrands : {
            label: "Brands",
            items: ["filterBrand1", "filterBrand2", "filterBrand3", "filterBrand4"]
        },
        filterTypePrice : {
            label: "Price",
            items: ["filterPriceRange1", "filterPriceRange2", "filterPriceRange3", "filterPriceRange4"]
        },
        filterTypeSize : {
            label: "Size",
            items: ["filterSizeSmall", "filterSizeMedium", "filterSizeLarge", "filterSizeExtraLarge"]

        }
    }
});

function getFilterByID(id) {
    return allFilters.getIn(["filtersByID", id]);
}

//
// Gets the complete set of filters organized by type
//
function getAllFilters() {
    return allFilters.get("filterTypes").map(brand => {
        let filterGroup = {
            name : brand.get("label"),
            items : {}
        };

        brand.get("items").forEach(filterID => {
            const filter = getFilterByID(filterID);

            filterGroup.items[filterID] = {
                name : filter.get("label"),
                numItems : filter.get("numItems"),
                checked : filter.get("checked")
            }
        });

        return filterGroup;
    });
}

export default function filters(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case GET_FILTERS :
            return state.set("allFilters", getAllFilters());
        case GET_FILTER_BY_ID :
            return state.set("filter", getFilterByID(action.id));

        //case TOGGLE_FILTER :
        //    return state.set("list", allProducts.get("productsByID").filter((product) => {
        //        return product.get("categories").includes(action.categoryID)
        //    }));
    }

    return state;
}
