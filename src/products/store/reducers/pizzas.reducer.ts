import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';

// for static type checking
export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

// initial state
export const initialState: PizzaState = {
    data: [],
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