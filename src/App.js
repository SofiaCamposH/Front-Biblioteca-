//import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home'
import Computadoras from './Components/Computadoras';
import Cubiculos from './Components/Cubiculos';
import Libros from './Components/Libros'
import Prestamo from './Components/Prestamo-libros'
import FormularioPrestamo from './Components/libroPrestamo';
import Disponibles from './Components/librosDisponibles';
import Reportes from './Components/reporte-libros';
import FormularioCubiculo from './Components/cubi-prestamo';
import FormularioComputadora from './Components/Compu-prestamo';



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/login", element: <LoginForm /> },
      { path: "/home", element: <Home /> },
      { path: "/Computadoras", element: <Computadoras /> },
      { path: "/Cubiculos", element: <Cubiculos /> },
      { path: "/home", element: <Home /> },
      { path: "/Libros", element: <Libros /> },
      { path: "/Libros/Prestamo", element: <Prestamo /> },
      { path: "/Libros/prestar", element: <FormularioPrestamo /> },
      { path: "/Libros/Disponibles", element: <Disponibles /> },
      { path: "/Libros/Disponibles/prestar", element: <FormularioPrestamo /> },
      { path: "/Libros/Reportes", element: <Reportes /> },
      { path: "/Cubiculos/Prestamo", element: <FormularioCubiculo /> },
      { path: "/Computadoras/Prestamo", element: <FormularioComputadora /> },
      

      
      

      

  ]},

]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
