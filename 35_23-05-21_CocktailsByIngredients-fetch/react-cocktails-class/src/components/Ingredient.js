import React, {Component} from 'react'
import {ingrContext} from "./App"

//TODO: тоже принимается ingredient тут.  На 18 строчке надо this.props?

export default class Ingredient extends Component {

    render() {
        return (
            <ingrContext.Consumer>
                { cntx => {
                        return (
                            <div className="col-6 col-sm-4 col-md-3">
                                <button
                                    type="button"
                                    onClick={
                                        () => {
                                            cntx.changeIngredient(this.props.ingredient.strIngredient1)
                                        }
                                    }
                                    className="btn btn-light my-1 w-100"
                                >{this.props.ingredient.strIngredient1}</button>
                            </div>
                        )
                    }}
            </ingrContext.Consumer>
        )
    }
}