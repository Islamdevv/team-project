import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import AdminEdit from "../components/admin/AdminEdit";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/list",
      element: <ProductList />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <AdminEdit />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
