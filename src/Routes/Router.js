import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MegaSena from "../Pages/1- MegaSena/MegaSena";
import Quina from "../Pages/2- Quina/Quina";
import LotoFacil from "../Pages/3- LotoFacil/LotoFacil";
import LotoMania from "../Pages/4- LotoMania/LotoMania";
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
                <Route exact path="/quina">
                    <Quina/>
                </Route>
                <Route exact path="/lotoFacil">
                    <LotoFacil/>
                </Route>
                <Route exact path="/lotoMania">
                    <LotoMania/>
                </Route>
                <Route exact path="/timeMania">
                    <TimeMania/>
                </Route>
                <Route exact path="/diaDeSorte">
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