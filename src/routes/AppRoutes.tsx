import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {A} from "../pages/A";
import {B} from "../pages/B";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/a" replace />}/>
            <Route path={"/a"} element={<A/>}/>
            <Route path={"/b"} element={<B/>}/>
        </Routes>
    );
}