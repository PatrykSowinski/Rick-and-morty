import React from "react";

const CharacterDR = ({
  id,
  name,
  image,
  status,
  species,
  location,
  origin,
}) => {
  return (
    <div
      key={id}
      class="grid grid-cols-2 gap-3 transition duration-1000 delay-50 border-solid bg-gray-600 rounded-lg
               shadow-2xl ease-in-out p-4 hover:bg-gray-500 font-bold"
    >
      <img src={image} alt="zdjecie" class="w-96 h-96"></img>
      <div>
        <span class="text-3xl text-center">{name}</span>
        <div class="flex align-center items-center text-xl">
          {status === "Alive" ? (
            <div class="bg-green-500 rounded-full h-3 w-3 flex items-center justify-center mr-2 mt-0.5"></div>
          ) : status === "Dead" ? (
            <div class="bg-red-500 rounded-full h-3 w-3 flex items-center justify-center mr-2 mt-0.5"></div>
          ) : (
            <div class="bg-gray-200 rounded-full h-3 w-3 flex items-center justify-center mr-2 mt-0.5"></div>
          )}
          {status} - {species}
        </div>
        <span class="mt-8 inline-block text-md">Last known location:</span>
        <br />
        <span class="text-lg">{location}</span>
        <br />
        <span class="mt-8 inline-block text-md">Origin:</span>
        <br />
        <span class="text-lg">{origin}</span>
        <br />
      </div>
    </div>
  );
};

export default CharacterDR;
