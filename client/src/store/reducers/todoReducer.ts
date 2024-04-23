import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";
import {strictEqual} from "node:assert";

const initalState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
}
export const todoReducer = (state = initalState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true};
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODOS_PAGES:
            return {...state, page: action.payload}
        default:
            return state;
    }
}
