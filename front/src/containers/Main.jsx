import React from 'react'
import Login from '../components/Login';
import { Route, Redirect, Switch, Link } from 'react-router-dom'

export default class Main extends React.Component {

    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (<Login />)}/>
                </Switch>
            </div>
        )

}
}
