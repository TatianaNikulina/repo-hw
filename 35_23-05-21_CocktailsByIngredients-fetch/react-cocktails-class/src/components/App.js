import React, {Component} from 'react'
import Ingredients from './Ingredients'
import Drinks from './Drinks'

export const ingrContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: null,
        }
    }

    changeIngredient = (data) => {
        this.setState({...this.state, ingredient: data})
    }

    renderDrinks() {
        if (this.state.ingredient) {
            return (
                <section className="container">
                    <h1>List of cocktails</h1>
                    <Drinks ingredient={this.state.ingredient}/>
                </section>
            )
        }
    }

    render() {
        return (
                <section>
                    <ingrContext.Provider value={{changeIngredient: this.changeIngredient}}>
                        <h1>Сocktail ingredients list</h1>
                        <section className='container my-5'>
                            <Ingredients />
                        </section>
                    </ingrContext.Provider>
                    {this.renderDrinks()}
                </section>
        )
    }
}
export default App
