import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("views/pages/Home"));
const NotFound = React.lazy(() => import("views/pages/NotFound"));

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <NotFound />
                </Suspense>
            )
        },
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </Suspense>
            )
        }
    ]);

    return routes;
}

export default CustomRoutes;