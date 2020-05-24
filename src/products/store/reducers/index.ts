import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// product state (for static type checking)
export interface ProductsState {
    pizzas: fromPizzas.PizzaState;          // a particular slice of the state
}

// register reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
};

// top-level wrapper
export const getProductsState = createFeatureSelector<ProductsState> ('products');