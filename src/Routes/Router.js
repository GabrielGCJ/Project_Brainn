import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"




const Router = () => {

    return(
        <BrowserRouter>
            <Switch>                
                <Route exact path="/">
                    <Cart/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>        
        </BrowserRouter>
    )
}

    export default Router