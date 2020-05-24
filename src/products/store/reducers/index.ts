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

export const getPizzasEntities = createSelector (
    getPizzaState, 
    fromPizzas.getPizzasEntities
);

// converting the entities into an array for rendering
export const getAllPizzas = createSelector (
    getPizzasEntities,
    (entities) => {
        // object.keys() returns the keys of the object as string
        // which is then used to parse the object one by one
        // and convert it into an array
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
); 

export const getPizzasLoaded = createSelector (
    getPizzaState, 
    fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector (
    getPizzaState, 
    fromPizzas.getPizzasLoading
);
