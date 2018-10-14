import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers';

const exampleInitialState = {
    users: null,
}

// Redux = Action Creators + Reducers (Action type in the middle)

// 1. Action Types
export const actionTypes = {
    SET_USERS_DATA: 'SET_USERS_DATA',
    ADD_USERS_DATA: 'ADD_USERS_DATA',
    EDIT_USERS_DATA: 'EDIT_USERS_DATA',
    
    SET_ADMIN_DATA: 'SET_ADMIN_DATA',
    EDIT_ADMIN_DATA: 'EDIT_ADMIN_DATA',
    
    SET_THIS_DAY_NOTE: 'SET_THIS_DAY_NOTE',
    ADD_THIS_DAY_NOTE: 'ADD_THIS_DAY_NOTE',
    EDIT_THIS_DAY_NOTE: 'EDIT_THIS_DAY_NOTE',
    DELETE_THIS_DAY_NOTE: 'DELETE_THIS_DAY_NOTE',

    SET_THIS_BOOKING_DISCOUNT: 'SET_THIS_BOOKING_DISCOUNT',
    ADD_THIS_BOOKING_DISCOUNT: 'ADD_THIS_BOOKING_DISCOUNT',
    EDIT_THIS_BOOKING_DISCOUNT: 'EDIT_THIS_BOOKING_DISCOUNT',
    DELETE_THIS_BOOKING_DISCOUNT: 'DELETE_THIS_BOOKING_DISCOUNT',

    SET_PAYMENT_DATA: 'SET_PAYMENT_DATA',
    ADD_PAYMENT_DATA: 'ADD_PAYMENT_DATA',

    SET_FIELD_DATA: 'SET_FIELD_DATA',
    ADD_FIELD_DATA: 'ADD_FIELD_DATA',
    EDIT_FIELD_DATA: 'EDIT_FIELD_DATA',
}

// 2. Action Creators
export const setUsersData = (newUsers) => {
    return {
        type: actionTypes.SET_USERS_DATA,
        newUsers,
    }
}
export const addUsersData = (newUser) => {
    return {
        type: actionTypes.ADD_USERS_DATA,
        newUser,
    }
}
export const editUsersData = (newUser) => {
    return {
        type: actionTypes.EDIT_USERS_DATA,
        newUser,
    }
}
export const setAdminData = (admin) => {
    return {
        type: actionTypes.SET_ADMIN_DATA,
        admin,
    }
}
export const editAdminData = (admin) => {
    return {
        type: actionTypes.EDIT_ADMIN_DATA,
        admin,
    }
}
export const setThisDayNote = (newNote) => {
    return {
        type: actionTypes.SET_THIS_DAY_NOTE,
        newNote,
    }
}
export const addThisDayNote = (newNote) => {
    return {
        type: actionTypes.ADD_THIS_DAY_NOTE,
        newNote,
    }
}
export const editThisDayNote = (newNote) => {
    return {
        type: actionTypes.EDIT_THIS_DAY_NOTE,
        newNote,
    }
}
export const deleteThisDayNote = (newNote) => {
    return {
        type: actionTypes.DELETE_THIS_DAY_NOTE,
        newNote,
    }
}
export const setThisBookingDiscount = (newDiscount) => {
    console.log('Set discount data!: ', newDiscount);
    return {
        type: actionTypes.SET_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const addThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.ADD_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const editThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.EDIT_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const deleteThisBookingDiscount = (newDiscount) => {
    return {
        type: actionTypes.DELETE_THIS_BOOKING_DISCOUNT,
        newDiscount,
    }
}
export const setPaymentData = (newPayment) => {
    return {
        type: actionTypes.SET_PAYMENT_DATA,
        newPayment,
    }
}
export const addPaymentData = (newPayment) => {
    return {
        type: actionTypes.ADD_PAYMENT_DATA,
        newPayment,
    }
}
export const setFieldData = (newField) => {
    return {
        type: actionTypes.SET_FIELD_DATA,
        newField,
    }
}
export const addFieldData = (newField) => {
    return {
        type: actionTypes.ADD_FIELD_DATA,
        newField,
    }
}
export const editFieldData = (newField) => {
    return {
        type: actionTypes.EDIT_FIELD_DATA,
        newField,
    }
}



export function initializeStore(initialState = exampleInitialState) {
    return createStore(combineReducers({ ...reducers }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}