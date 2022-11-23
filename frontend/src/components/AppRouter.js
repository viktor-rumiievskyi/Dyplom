import React  from 'react';
import {Routes, Route, AbortedDeferredError} from 'react-router-dom'  
import {authRoutes, publicRoutes} from "../routes"
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
	const isAuth = false
    return (
        <Routes>
					{isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
						<AbortedDeferredError to={SHOP_ROUTE}/>
        </Routes>
    );
};


export default AppRouter;
