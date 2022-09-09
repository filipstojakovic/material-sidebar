import React, {useEffect} from "react";
import {HeaderText} from "../header/HeaderText";
import {updateHeaderText} from "../redux/slices/headerSlice";
import {useAppDispatch} from "../redux/store";

export function B() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateHeaderText({headerText: HeaderText.B_HEADER}));
    })

    return (
        <div>
            BBBBBBBBBBBBBB
        </div>
    );
}
