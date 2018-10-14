import { actionTypes } from './store';

export const users = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_USERS_DATA:
            return newAction.newUsers;
            break;
        case actionTypes.ADD_USERS_DATA:
            return [ newAction.newUser, ...oldState ];
            break;
        case actionTypes.EDIT_USERS_DATA:
            const updatedItems = oldState.map(item => {
                if (item.id === newAction.newUser.id) {
                    return { ...item, ...newAction.newUser };
                }
                return item;
            });
            return updatedItems;
            break;
        default:
            return oldState;
            break;
    }
}

export const admin = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_ADMIN_DATA:
            return newAction.admin;
            break;
        case actionTypes.EDIT_ADMIN_DATA:
            return newAction.admin;
            break;
        default:
            return oldState;
            break;
    }
}

export const notes = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_THIS_DAY_NOTE:
            return newAction.newNote;
            break;
        case actionTypes.ADD_THIS_DAY_NOTE:
            return [...oldState, newAction.newNote];
            break;
        case actionTypes.EDIT_THIS_DAY_NOTE:
            const updatedItems = oldState.map(item => {
                if (item.id === newAction.newNote.id) {
                    return { ...item, ...newAction.newNote };
                }
                return item;
            });
            return updatedItems;
            break;
        case actionTypes.DELETE_THIS_DAY_NOTE:
            const noteId = newAction.newNote.id;
            return oldState.filter(note => note.id !== noteId);
            break;
        default:
            return oldState;
            break;
    }
}

export const discounts = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_THIS_BOOKING_DISCOUNT:
            return newAction.newDiscount;
            break;
        case actionTypes.ADD_THIS_BOOKING_DISCOUNT:
            return [...oldState, newAction.newDiscount];
            break;
        case actionTypes.EDIT_THIS_BOOKING_DISCOUNT:
            const updatedItems = oldState.map(item => {
                if (item.id === newAction.newDiscount.id) {
                    return { ...item, ...newAction.newDiscount };
                }
                return item;
            });
            return updatedItems;
            break;
        case actionTypes.DELETE_THIS_BOOKING_DISCOUNT:
            const discountId = newAction.newDiscount.id;
            return oldState.filter(discount => discount.id !== discountId);
            break;
        default:
            return oldState;
            break;
    }
}

export const payments = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_PAYMENT_DATA:
            return newAction.newPayment;
            break;
        case actionTypes.ADD_PAYMENT_DATA:
            return [newAction.newPayment, ...oldState];
            break;
        default:
            return oldState;
            break;
    }
}

export const fields = (oldState = null, newAction) => {
    switch (newAction.type) {
        case actionTypes.SET_FIELD_DATA:
            return newAction.newField;
            break;
        case actionTypes.ADD_FIELD_DATA:
            return [newAction.newField, ...oldState];
            break;
        case actionTypes.EDIT_FIELD_DATA:
            const updatedItems = oldState.map(item => {
                if (item.id === newAction.newField.id) {
                    return { ...item, ...newAction.newField };
                }
                return item;
            });
            return updatedItems;
            break;
        default:
            return oldState;
            break;
    }
}