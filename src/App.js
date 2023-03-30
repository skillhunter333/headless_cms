import "./styles.css";
import { useState, useEffect } from "react";
import useContentful from "./useContentful";

//Test

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);

  return (
    <div className="App">
      <h1>Contentful Example</h1>

      {!recipes
        ? "...loading"
        : recipes.map((item) => {
            return (
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          })}
    </div>
  );
}