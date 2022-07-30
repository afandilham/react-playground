import React, { useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem";
import data from "../../data/index";

const FurnitureLists = () => {
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    setFurnitureData(data);
  }, [furnitureData]);

  const availableFurnitures = furnitureData.map((data) => (
    <FurnitureItem
      key={data.id}
      id={data.id}
      title={data.title}
      price={data.price}
      tags={data.tags}
    />
  ));

  return (
    <ul className="grid grid-cols-1 gap-5">
      {availableFurnitures}
    </ul>
  );
};

export default FurnitureLists;
