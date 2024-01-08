import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router/lib';

import {Admin} from './pages/admin/admin';
import {Login} from './pages/login/login';
import {Publish} from './pages/publish/publish';
import {Draft} from './pages/draft/draft';
import {Edit} from './pages/edit/edit';

const routes =
    <Route path={'/'} name={"pc-editor"}>

        <IndexRedirect to="/publish" />

        <Route path={'login'} component={Login} />

        <Route path='/' component={Admin} >
            <Route path={'publish'} component={Publish} />
            <Route path={'draft'} component={Draft} />
            <Route path={'edit'} component={Edit} />
        </Route>

    </Route>;


ReactDOM.render(
    <Provider >
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

