import About from "../pages/About";
import Posts from "../pages/Posts";
import Page404 from "../pages/Page404";
import PostIdPage from "../pages/PostIdPage";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '*', element: <Page404/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/', element: <Home/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '*', element: <Login/>, exact: true},
]