import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {updateHeaderText} from "../redux/slices/headerSlice";
import {HeaderText} from "../header/HeaderText";


export function A() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateHeaderText({headerText: HeaderText.A_HEADER}));
    })

    return (
        <div>
            AAAAAAAAAAAAAA
        </div>
    );
}
