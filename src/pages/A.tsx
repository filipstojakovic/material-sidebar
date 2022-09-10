import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {updateHeaderText} from "../redux/slices/headerSlice";
import {HeaderTextEnum} from "../header/HeaderTextEnum";


export function A() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateHeaderText({headerText: HeaderTextEnum.A_HEADER}));
    })

    return (
        <div>
            AAAAAAAAAAAAAA
        </div>
    );
}
