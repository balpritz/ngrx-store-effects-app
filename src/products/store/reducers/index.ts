import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// product state (for static type checking)
export interface ProductsState {
    pizzas: fromPizzas.PizzaState;          // a particular slice of the state
    toppings: fromToppings.ToppingsState;
}

// register reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer,
};

// top-level wrapper
export const getProductsState = createFeatureSelector<ProductsState> ('products');