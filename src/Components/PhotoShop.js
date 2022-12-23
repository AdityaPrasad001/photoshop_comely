import React from "react";
import { Photo } from "./Photo";

export const PhotoShop = () => {
  const n = 25; // Or something else
  return (
    <div className="photoshop-container">
      {[...Array(n)].map((i) => (
        <Photo key={i} />
      ))}
    </div>
  );
};
