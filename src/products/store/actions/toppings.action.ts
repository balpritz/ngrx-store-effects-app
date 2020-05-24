import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

// load toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Failed';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Successful';

// possible actions
export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;

    // for sending some error message
    constructor (public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;

    // pizza information
    constructor (public payload: Topping[]) {}
}

// export all action types
export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess;