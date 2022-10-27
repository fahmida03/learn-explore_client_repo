import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import LeftSide from "../../Pages/LeftSide/LeftSide";
import Login from "../../Pages/Login/Login";
import PerCourse from "../../Pages/PerCourse/PerCourse"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses',
                        element: <AllCourses></AllCourses>
                    },
                    {
                        path: '/courses/:id',
                        element: <LeftSide></LeftSide>,
                        loader: ({ params }) => fetch(`https://learn-and-explore-server.vercel.app/all-courses/${params.id}`)
                    }
                ]
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://learn-and-explore-server.vercel.app/per-courses/${params.id}`),
                element: <PerCourse></PerCourse>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '*', 
                element: <div>This Route is not found </div>
            }

        ]
    }
])