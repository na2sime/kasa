import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import NotFound from './pages/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/accommodation/:id",
        element: <Accommodation/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/notfound",
        element: <NotFound/>
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
