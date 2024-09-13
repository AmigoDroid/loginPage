import { createBrowserRouter } from "react-router-dom";
import Login from "../app/login";
import App from "../App";
const AppRouter = new createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    },
    {
        path:"/app",
        element: <App/>
    }
]);
export {AppRouter};