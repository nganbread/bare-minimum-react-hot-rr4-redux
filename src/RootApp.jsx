import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Page1 from './components/Page1'
import Page2 from './components/Page2'

export default class extends Component {
    render() {
        return <BrowserRouter>
            <div>
                <span>App</span>
                <Link to={'/page1'}>page1</Link>
                <Link to={'/page2'}>page2</Link>
                <Route path="/" exact render={() => <Redirect to='/page1' />} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </div>
        </BrowserRouter>
    }
}