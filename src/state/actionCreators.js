import * as types from './actionTypes';

export function buyItem(feature) {
    return { type: types.BUY_ITEM, payload: feature };
}

export function removeItem(feature) {
    return { type: types.REMOVE_ITEM, payload: feature };
}