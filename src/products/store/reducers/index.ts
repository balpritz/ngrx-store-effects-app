import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

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

// selectors: pizza state
export const getPizzaState = createSelector (
    getProductsState,                           // traversing the state tree
    (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector (getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector (getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector (getPizzaState, fromPizzas.getPizzasLoading);
