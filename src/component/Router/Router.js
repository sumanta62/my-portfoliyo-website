import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Aboute from "../Pages/Aboute/Aboute";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Cuntuct from "../Pages/Cuntuct/Cuntuct";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import MyProject from "../Pages/MyProject/MyProject";
import ProjectDetails from "../Pages/MyProject/ProjectDetails";
import MySkill from "../Pages/MySkill/MySkill";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'/aboute',
                element:<Aboute></Aboute>
            },
            {
                path:'/project',
                element:<MyProject></MyProject>
            },
            {
                path:'/mySkill',
                element:<MySkill></MySkill>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/blog',
                element:<BlogPage></BlogPage>
            },
            {
                path:'/myProjectDetails/:id',
                element:<ProjectDetails ></ProjectDetails>,
                loader:({params})=> fetch(`project.json`)
                .then(res=> res.json())
                .then(data=> {
                    const result= data.find(project=>project.id === params.id);
                    return result;
                })
                
            },
            {
                path:'/contuct',
                element:<Cuntuct></Cuntuct>
            }
        ]
    },
    
])