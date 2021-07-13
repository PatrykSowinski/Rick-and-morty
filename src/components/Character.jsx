const Character = ({ id, name, image }) => {
  return (
    <div
      key={id}
      class="flex transition duration-1000 delay-50 flex-col items-center align-items-center justify-center border-solid bg-gray-600 rounded-lg h-80 shadow-2xl ease-in-out p-2 hover:bg-gray-500 font-bold"
    >
      <img src={image} alt="zdjecie" class="w-48 h-48"></img>
      <span class="text-2xl text-center">{name}</span>
    </div>
  );
};

export default Character;
