import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MegaSena from "../Pages/1- MegaSena/MegaSena";
import Quina from "../Pages/2- Quina/Quina";
import LotoFacil from "../Pages/3- LotoFacil/LotoFacil";
import TimeMania from "../Pages/5- TimeMania/TimeMania";
import DiaDeSorte from "../Pages/6- DiaDeSorte/DiaDeSorte";
import ErrorPage from "../Pages/7- ErrorPage/ErrorPage";




const Router = () => {

    return(
        <BrowserRouter>
            <Switch>                
                <Route exact path="/">
                    <MegaSena/>
                </Route>
                <Route exact path="/Quina">
                    <Quina/>
                </Route>
                <Route exact path="/LotoMania">
                    <LotoFacil/>
                </Route>
                <Route exact path="/TimeMania">
                    <TimeMania/>
                </Route>
                <Route exact path="/DiaDeSorte">
                    <DiaDeSorte/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>        
        </BrowserRouter>
    )
}

    export default Router