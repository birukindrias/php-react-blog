import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/" element={<Dashboard />} /> */}
      </Routes>
    );
}

export default AppRoutes;
