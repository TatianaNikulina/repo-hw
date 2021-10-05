import React, {Component} from "react"
import Loading from "./Loading";
import Ingredient from "./Ingredient";

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            error: false,
        }
    }

    renderIngredients() {
        if (!this.state.ingredients) return (<Loading/>);
        return (this.state.ingredients.map(ingredient => (
            <Ingredient key={ingredient.strIngredient1} ingredient={ingredient}/>)))
    }

    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
            .then(response => response.json())
            .then(data => {
                this.setState({...this.state, ingredients: data.drinks})
            })
            .catch(error => {
                this.setState({...this.state, error: error.message})
            })
    }

    render() {
        return (
            <div className="row">
                {this.renderIngredients()}
            </div>
        )
    }
}

export default Ingredients