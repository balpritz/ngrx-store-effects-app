import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { map, switchMap, catchError, switchMapTo } from 'rxjs/operators';

import * as fromServices from '../../services';
import * as pizzaActions from '../actions/pizzas.action';

@Injectable()
export class PizzaEffects {
    // injecting service to get pizza data
    constructor (
        private actions$: Actions,
        private pizzaService: fromServices.PizzasService
    ) { }

    @Effect()
    loadPizza$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)     // listening for action type LOAD_PIZZAS
        .pipe(switchMap(() => {
            // getting the response using service i.e pizza data
            return this.pizzaService.getPizzas().pipe(
                // based on the response, generate another action
                map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                
                // return as an observable using 'of'
                catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
            )
        })
    );
}