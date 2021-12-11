import React from "react";
import {Route, Routes} from "react-router-dom";
import App from "./App";
import {Clock} from "./common/components/Clock/Clock";
import {Header} from "./common/components/Header/Header";
import {Select} from "./common/components/Select/Select";
import {DragAndDrop} from "./common/DragAndDrop/DragAndDrop";
import {MentorsStudents} from "./common/DragAndDrop/MentorsStudents";

export const routes = [
    {
        id: 'Home',
        path: '/',
        exact: true,
        element: <App/>
    },
    {
        id: "Clock",
        path: '/Clock',
        exact: true,
        element: <Clock mode={"analog"}/>
    },
    {
        id: "DragAndDrop",
        path: '/DragAndDrop',
        exact: true,
        element: <DragAndDrop />
    },
    {
        id: "MentorsStudents",
        path: '/MentorsStudents',
        exact: true,
        element: <MentorsStudents />
    },
];


export const RoutesComponent = () => {
    return (
        <>
            <Header />
            <Routes>
                {routes.map(route => {
                    const {id, ...props} = route;
                    return (
                        <Route key={id} {...props} />
                    )
                })}
            </Routes>
        </>
    )
}
