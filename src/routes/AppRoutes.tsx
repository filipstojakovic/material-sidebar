import React from 'react';
import {Route, Routes} from "react-router-dom";
import {A} from "../pages/A";
import {B} from "../pages/B";

export function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<A/>}></Route>
            <Route path={"/a"} element={<A/>}></Route>
            <Route path={"/b"} element={<B/>}/>
        </Routes>
    );
}