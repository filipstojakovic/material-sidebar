import React, {useEffect} from "react";
import {HeaderTextEnum} from "../header/HeaderTextEnum";
import {updateHeaderText} from "../redux/slices/headerSlice";
import {useAppDispatch} from "../redux/store";

export function B() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateHeaderText({headerText: HeaderTextEnum.B_HEADER}));
    })

    return (
        <div>
            BBBBBBBBBBBBBB
        </div>
    );
}
