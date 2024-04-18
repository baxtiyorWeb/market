import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";

const CategoriesLayout = () => {
  return (
    <div>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default CategoriesLayout;
