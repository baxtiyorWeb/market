import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoading = (props) => (
  <ContentLoader
    width={1400}
    viewBox="-40 0 1000 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="46" cy="58" r="38" />
    <rect x="34" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="137" cy="58" r="38" />
    <rect x="124" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="228" cy="58" r="38" />
    <rect x="215" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="320" cy="58" r="38" />
    <rect x="307" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="410" cy="58" r="38" />
    <rect x="398" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="500" cy="58" r="38" />
    <rect x="488" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="590" cy="58" r="38" />
    <rect x="578" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="680" cy="58" r="38" />
    <rect x="668" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="770" cy="58" r="38" />
    <rect x="758" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="860" cy="58" r="38" />
    <rect x="848" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="860" cy="58" r="38" />
    <rect x="848" y="83" rx="5" ry="5" width="25" height="10" />

    <circle cx="860" cy="58" r="38" />
    <rect x="848" y="83" rx="5" ry="5" width="25" height="10" />
  </ContentLoader>
);

CategoryLoading.metadata = {
  name: "Alan Hurtarte", // My name
  github: "kenny08gt", // Github username
  description: "Instagram histories. Picture + username", // Little tagline
  filename: "CategoryLoading", // filename of your loader
};

export default CategoryLoading;
