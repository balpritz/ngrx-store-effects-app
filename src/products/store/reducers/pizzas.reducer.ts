import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';
import { ProductsState } from '.';

// for static type checking
export interface PizzaState {
    entities: { [id: number] : Pizza };
    loaded: boolean;
    loading: boolean;
}

// initial state
export const initialState: PizzaState = {
    entities: {},
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
            };
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
            };
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;

            // converting the array of data received into object indexed by ID
            const entities = pizzas.reduce(
                (entities: { [id: number] : Pizza}, pizza: Pizza) => {
                    return {
                        ...entities,
                        [pizza.id]: pizza
                    };
                },
                {
                    ...state.entities,
                }
            );

            return {
                ...state,
                loaded: true,
                loading: false,
                entities,
            }
        };
    }

    return state;
}

// small pieces of information of our state
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;