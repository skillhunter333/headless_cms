import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "91wwywke16bf",
    accessToken: "uLEcVingmJXkzWmvjwumPodU6IOhFRE1kTOFMn8r7aU",
  });

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type:"smoothie",
        
      });

      const sanitazideEntries = entries.items.map((item) => {
        return {
          ...item.fields
        };
      });

      // return entries;
      return sanitazideEntries;
    } catch (error) {
      console.log("There's been an error trying to get the recipes " + error);
    }
  };

  return { getRecipes };
};

export default useContentful;
