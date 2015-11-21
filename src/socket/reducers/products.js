import {
    fromJS,
    Map
} from "immutable";

import {
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY
} from "../constants/ActionTypes";

const initialState = new Map();

const allProducts = fromJS({
    rootProductImageFolder : "/bellies/resources/img/categories",
    productsByID : {
        "bclt-001" : {
            categories : ["bclt"],
            name : "Crimson Tide",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "25.99"
        },
        "bclt-002" : {
            categories : ["bclt"],
            name : "Black Mamba",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "28.50"
        },
        "bclt-003" : {
            categories : ["bclt"],
            name : "Littleton Spirit Bracelet",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "19.99"
        },
        "bclt-004" : {
            categories : ["bclt"],
            name : "Aqua Velvet",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "35.50"
        },
        "bclt-005" : {
            categories : ["bclt"],
            name : "Pinky Tuscadero",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "19.99"
        },
        "bclt-006" : {
            categories : ["bclt"],
            name : "Frozen Teardrops",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "24.99"
        },
        "erng-001" : {
            categories : ["erng"],
            name : "Jade Palace",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "18.99"
        },
        "erng-002" : {
            categories : ["erng"],
            name : "Ice Afraidofya",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "17.99"
        },
        "erng-003" : {
            categories : ["erng"],
            name : "Brass Tacks",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "18.99"
        },
        "erng-004" : {
            categories : ["erng"],
            name : "Jade Quinperlamate",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "20.99"
        },
        "erng-005" : {
            categories : ["erng"],
            name : "Gold Vanity",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "21.99"
        },
        "erng-006" : {
            categories : ["erng"],
            name : "A Ruby Ran Through It",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "23.50"
        },
        "erng-007" : {
            categories : ["erng"],
            name : "Turquoise Medallions",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "28.99"
        },
        "erng-008" : {
            categories : ["erng"],
            name : "Pearly Gates",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "22.39"
        },
        "erng-009" : {
            categories : ["erng"],
            name : "Rock Steadies",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "29.99"
        },
        "nkl-001" : {
            categories : ["nkl"],
            name : "Purple People Eaters",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "55.99"
        },
        "nkl-002" : {
            categories : ["nkl"],
            name : "Eye of the Storm",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "32.99"
        },
        "nkl-003" : {
            categories : ["nkl"],
            name : "Tablet of Moses",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "45.99"
        },
        "nkl-004" : {
            categories : ["nkl"],
            name : "Dilithium Crystals",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "36.99"
        },
        "nkl-005" : {
            categories : ["nkl"],
            name : "Snake Eye",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "35.99"
        },
        "tsl-001" : {
            categories : ["tsl"],
            name : "Littleton Spirit Tassel",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "35.99"
        },
        "tsl-002" : {
            categories : ["tsl"],
            name : "Westford Spirit Tassel",
            shortDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.",
            price : "24.99"
        }
    }
});

export default function products(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case GET_PRODUCTS :
            return state.set("list", allProducts.get("productsByID"));

        case GET_PRODUCTS_BY_CATEGORY :
            return state.set("list", allProducts.get("productsByID").filter((product) => {
                return product.get("categories").includes(action.categoryID)
            }));
    }

    return state;
}


