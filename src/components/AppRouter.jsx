import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch  } from 'react-router-dom'; 
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFound from '../pages/NotFound';




function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <div className="navbar">
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>

                <Switch>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/error">
                        <NotFound />
                    </Route>
                    <Redirect to='/error' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
