import React from "react"
import PersonCard from "./PersonCard";
import {connect} from 'react-redux'

const Persons = ({persons}) => {

    const renderPersons = () => {
        if ( !persons.length ) {
            return (<div>Ups ...</div>)
        }
        return persons.map(person => (<PersonCard key={person.id} person={person} />))
    }

    return (
        <section className="container">
            <div className="row">
                {renderPersons()}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons.list
    }
}

export default connect(mapStateToProps, null)(Persons)