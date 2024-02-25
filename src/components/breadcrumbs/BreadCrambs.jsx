import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item separator>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const title = name.replace(/-/g, " ");
            return isLast ? (
              <Breadcrumb.Item key={routeTo}>
                {capatilize(name)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={routeTo}>
                <Link to={`${routeTo}`}>{capatilize(title)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};
