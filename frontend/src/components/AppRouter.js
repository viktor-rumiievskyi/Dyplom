import React, {useContext} from 'react';
import {Await, Routes, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";


const AppRouter = (() => {
    const isAuth = false

    return (
        <Await>
            {isAuth  &&   authRoutes.map(({path, Component}) =>
                <Routes key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Routes key={path} path={path} component={Component} exact/>
            )}
        </Await>
    );
});


export default AppRouter;
