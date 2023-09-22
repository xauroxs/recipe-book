import { Navigate, Route, Routes } from "react-router-dom";

import RecipePage from "../pages/recipe/recipe.page";
import RecipesPage from "../pages/recipes/recipes.page";
import NotFoundPage from "../pages/not-found/not-found.page";

import "./app.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/:id" element={<RecipePage />} />

        <Route path="not-found" element={<NotFoundPage />} />

        <Route path="" element={<Navigate to="/recipes" replace={true} />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
};

export default App;
