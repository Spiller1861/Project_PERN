import React, { useContext, useEffect, useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = ({state}) => {
    
    return (
        <Routes>
            {state && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            <Route path='*' element={<Navigate to ={SHOP_ROUTE}/>}/>
        </Routes>   
    );
};

export default AppRouter;