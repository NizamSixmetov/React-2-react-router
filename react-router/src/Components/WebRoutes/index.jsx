import Contact from '../../Pages/Contact';
import Home from '../../Pages/Home/index';
import Services from '../../Pages/Services/index';
import UserDetail from '../../Pages/UserDetail';
import Users from '../../Pages/Users';

export const WebRoutes = [
    { id: 1, path: '/', element: <Home />, title: 'Home' },
    { id: 2, path: '/contact', element: <Contact />, title: 'Contact' },
    { id: 3, path: '/services', element: <Services />, title: 'Services' },
    { id: 4, path: '/users', element: <Users />, title: 'Users' },
    { id: 5, path: '/user/:id', element: <UserDetail />, title: '' }
];