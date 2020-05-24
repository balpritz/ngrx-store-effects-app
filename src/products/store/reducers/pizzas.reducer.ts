import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';
import { ProductsState } from '.';

// for static type checking
export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

// initial state
export const initialState: PizzaState = {
    data: [
        {
            "name": "Blazin' Inferno",
            "toppings": [
                {
                    "id": 10,
                    "name": "pepperoni"
                },
                {
                    "id": 9,
                    "name": "pepper"
                },
                {
                    "id": 3,
                    "name": "basil"
                },
                {
                    "id": 4,
                    "name": "chili"
                },
                {
                    "id": 7,
                    "name": "olive"
                },
                {
                    "id": 2,
                    "name": "bacon"
                }
            ],
            "id": 1
        }
    ],
    loaded: false,
    loading: false,
};

// reducer
export function reducer (
    state = initialState,
    action: fromPizzas.PizzasAction): PizzaState {          // return type should conform to PizzaState
    
    switch (action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true,
            }
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loaded: true,
                loading: false,
            }
        }
    }

    return state;
}

// small pieces of information of our state
export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;