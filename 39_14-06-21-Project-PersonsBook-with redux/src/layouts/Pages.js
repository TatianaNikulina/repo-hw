import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddNewPerson from "../components/Persons/AddNewPerson";
import Home from "../components/Home/Home";
import Persons from "../components/Persons/Persons";
import PersonProfile from "../components/Persons/PersonProfile";
import Albums from "../components/Albums/Albums";
import Album from "../components/Albums/Album";

const Pages = () => {
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route exact={true} path="/persons">
                <Persons />
            </Route>
            <Route path="/persons/add">
                <AddNewPerson />
            </Route>
            <Route path="/persons/:id">
                <PersonProfile />
            </Route>
            <Route exact path="/albums">
                <Albums />
            </Route>
          <Route path="/albums/:id">   {/*//из-за :id - id забирается в params*/}
                <Album />
            </Route>
            {/*<Route path="/posts">*/}
            {/*    <Posts />*/}
            {/*</Route>*/}
            {/*<Route path="/posts/:id">*/}
            {/*    <Post />*/}
            {/*</Route>*/}
        </Switch>
    )
}

export default Pages