import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON, DELETE_PERSON, FETCH_PERSONS} from "./typesList"

const stateInit = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false
    }
}

export const reducer = (state = stateInit, action) => {
    switch (action.type) {

        case FETCH_PERSONS:
            // const {list, activePerson} = action.payload; - то же самое что и ...action.payload
            return {...state, persons: {...state.persons, ...action.payload}}

        case ADD_NEW_PERSON:
            return {
                ...state,
                persons: {...state.persons, list: [...state.persons.list, action.payload]}
            }

        case CHANGE_ACTIVE_PERSON:
            return {...state, persons: {...state.persons, activePerson: action.payload}}

        case DELETE_PERSON:
            const idx = state.persons.list.findIndex( p => p.id === action.payload)
            if (idx === -1) return state
            const _arr = [...state.persons.list]
            _arr.splice(idx, 1)
            return {...state, persons: {...state.persons, list: _arr}}

        default:
            return state
    }
}