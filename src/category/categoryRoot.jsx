import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Container from "../shared/Container";

const categories = [
  { id: 0, title: "Kingdom: Animal", subcategories: [1, 2, 3, 4] },
  { id: 1, title: "Phylum: Chordata", subcategories: [2] },
  { id: 2, title: "Clade: Synapsida", subcategories: [3] },
  { id: 3, title: "Class: Mammalia", subcategories: [4] },
  { id: 4, title: "Order: Carnivora", subcategories: [5] },
  { id: 5, title: "Subfamily: Felinae", subcategories: [6] },
  { id: 6, title: "Genus: Felis", subcategories: [7] },
  { id: 7, title: "Species: Felis catus", subcategories: [] },
];

const findCategoryById = (id) => categories.find((cat) => cat.id === id);

const Category = ({ match, categoryId }) => {
  const category = findCategoryById(categoryId);
  return (
    <Container>
      <h1>ok</h1>
      {match.isExact && (
        <>
          <h1>{category.title}</h1>
          {category.subcategories.map((subCategoryId) => {
            const subCategory = findCategoryById(subCategoryId);
            return (
              <div key={subCategoryId}>
                <Link to={`/${subCategoryId}`}>{subCategory.title}</Link>
              </div>
            );
          })}
          {categoryId === 7 && (
            <img src="https://cataas.com/cat" alt="cat" height="300" />
          )}
        </>
      )}
    </Container>
  );
};

const RoutingExample = () => {
  const { id } = useParams();

  console.log(id);
  return categories.map((category) => (
    <Routes key={category.id}>
      <Route
        key={category.id}
        path={`/${category.id}`}
        element={(props) => (
          <Category
            categoryId={category.id}
            key={category.id}
            match={props.match}
          />
        )}
      />
    </Routes>
  ));
};

export default RoutingExample;
