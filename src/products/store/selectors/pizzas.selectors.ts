import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

import { Pizza } from '../../models/pizza.model';

export const getPizzaState = createSelector (
    fromFeature.getProductsState,                           // traversing the state tree
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector (
    getPizzaState, 
    fromPizzas.getPizzasEntities
);

// selector: get pizza by ID
export const getSelectedPizza = createSelector (
    getPizzasEntities,          // feature state
    fromRoot.getRouterState,    // router state
    (entities, router): Pizza => {
        return router.state && entities[router.state.params.pizzaId];
    }
)

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
