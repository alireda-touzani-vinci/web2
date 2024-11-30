import { useEffect, useState } from "react";
import { Dog } from "../types";

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);


  const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDog({
          message: data.message ?? "No dog found",
          status: data.status ?? "Error",
        });
      });
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={dog.message} alt="Random dog" style={{maxHeight: 300}}/>
    </div>
  );
};

export default RandomDog;
