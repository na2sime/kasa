import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import NotFound from './pages/NotFound';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
