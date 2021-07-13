const Character = ({ id, name, image }) => {
  return (
    <div
      key={id}
      class="flex flex-col items-center justify-center border-solid bg-gray-600 rounded-lg h-80 shadow-2xl p-2 hover:bg-gray-500"
    >
      <img src={image} alt="zdjecie" class="w-48 h-48"></img>
      <span class="text-2xl">{name}</span>
    </div>
  );
};

export default Character;
