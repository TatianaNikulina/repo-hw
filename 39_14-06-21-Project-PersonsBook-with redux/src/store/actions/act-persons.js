import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON, DELETE_PERSON, FETCH_PERSONS} from "../typesList";
import personsInitial, {activePersonId, setActivePersonIdToStorage, setPersonsToStorage} from "../../data/persons";

export const changeActivePersonId = personId => {
    return dispatch => {
        try {
            setActivePersonIdToStorage(personId)
            dispatch( setActivePerson(personId) )
        } catch (err) {
            console.log(err.message)
        }
    }
}

const setActivePerson = personId  => {
    return {
        type: CHANGE_ACTIVE_PERSON,
        payload: personId
    }
}
//////////---------------------------------------/////////////

export const getPersons = () => {
    return dispatch => {
        try {
            const obj = getObj()

            // const idx = obj.list.findIndex(p => p.id === ....) - удаляем пользователя с конкретным id
            // obj.list.splice(idx, 1)
            // setPersonsToStorage(obj.list)

            dispatch (fetchPersons(obj))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchPersons = obj => {
    return {
        type: FETCH_PERSONS,
        payload: obj
    }
}

const getObj = () => {
    return  {    // подготавливается объект из localStorage
        list: [...personsInitial],
        activePerson: +activePersonId
    }
}
//////////---------------------------------------/////////////

export const addNewPerson =  data => {
    return async dispatch => {
        try {
            const person = await createPerson(data)
            dispatch(addPerson(person))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const createPerson = data => {   //server Emulation
        const newPerson = {
            ...data, id: Date.now()
        }
        const persons = personsInitial
        persons.push(newPerson)
        setPersonsToStorage(persons)
        return newPerson
    }

const addPerson = person => {
        return {
            type: ADD_NEW_PERSON,
            payload: person
        }
}

//////////---------------------------------------/////////////

export const deletePerson = personId => {
    return async dispatch => {
        try {
            await deleteFromServer(personId)
            await dispatch( deletePersonFromState(personId) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

const deletePersonFromState = personId => {
    return {
        type: DELETE_PERSON,
        payload: personId
    }
}

const deleteFromServer = personId => {
    const idx = personsInitial.findIndex( p => p.id === personId)
    if (idx === -1) return null
    personsInitial.splice(idx, 1)
    setPersonsToStorage(personsInitial)
}