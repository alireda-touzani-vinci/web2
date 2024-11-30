import { useEffect, useState } from "react";
import { Dog } from "../types";

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const dog = await response.json();
      setDog({
        message: dog.message ?? "No dog found",
        status: dog.status ?? "Error",
      });
    } catch (error) {
      console.error(error);
      setDog({ message: "Failed to fetch dog image", status: "Error" });
    }
  };

  useEffect(() => {
    fetchDogImage();
    const interval = setInterval(() => {
      fetchDogImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={dog.message}
        alt="Random dog"
        style={{ maxHeight: 300 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default RandomDog;
