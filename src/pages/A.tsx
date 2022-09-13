import React, {useEffect, useMemo} from 'react';
import {useAppDispatch} from "../redux/store";
import {updateHeaderText} from "../redux/slices/headerSlice";
import {HeaderTextEnum} from "../header/HeaderTextEnum";
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {events} from './events';

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

export function A() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateHeaderText({headerText: HeaderTextEnum.A_HEADER}));
    }, [])


    const {defaultDate, max, min} = useMemo(() => ({
        defaultDate: new Date(2015, 3, 13),
        min: new Date(0, 0, 0, 8, 0, 0), // day view shows time from 8 to 17
        max: new Date(0, 0, 0, 17, 0, 0)
    }), [])


    return (
        <Calendar
            localizer={localizer}
            min={min}
            max={max}
            events={events}
            defaultDate={defaultDate}
            dayLayoutAlgorithm={'no-overlap'}
            style={{height: 700}}
        />
    )
}
