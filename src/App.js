import { useState, useEffect } from "react";
import useContentful from "./useContentful";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);
  console.log(recipes)
  return (
    <div className="App" >
      <h1>Contentful Example</h1>

      {!recipes
        ? "...loading"
        : recipes.map((item) => {
            return (
              <div>
                <h1>{item.recipeTitle}</h1>
                
                <img src={item.smothieImage.fields.file.url} alt="whatever" className="image"/>
                <p>{item.recipeDiscription}</p>
              </div>
            );
          })}
    </div>
  );
}
