import React, {Component} from 'react'
import Loading from "./Loading"
import Error from "./Error"
import Drink from "./Drink"

// TODO: ingredient перетащить для fetch как-то

class Drinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: null,
            isLoading: true,
            error: false
        }
    }

    renderDrinks() {
        if (this.state.isLoading && !this.state.error) {
            return (<Loading/>)
        } else if (this.state.error) {
            return (<Error message={this.state.error}/>)
        } else
            return (this.state.drinks.map((drink) => (<Drink key={drink.strDrink} drink={drink}/>)))
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.ingredient}`)
    //             .then(response => response.json())
    //             .then(data => this.setState({isLoading: false, drinks: data.drinks}))
    //             .catch(error => {
    //                 this.setState({...this.state, error: error.message});
    //             })
    //     }, 2000)
    // }

    fetchingData=() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.ingredient}`)
                    .then(response => response.json())
                    .then(data => this.setState({isLoading: false, drinks: data.drinks}))
                    .catch(error => {
                        this.setState({...this.state, error: error.message});
                    })
    }
    componentDidMount() {
       this.fetchingData(this.props.ingredient)}

    componentWillUpdate(nextProps) {
        this.fetchingData(nextProps.ingredient)}

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDrinks()}
                </div>
            </div>
        )
    }
}

export default Drinks