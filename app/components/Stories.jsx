const Stories = ({picutre}) => {
  return (
    <>
      <div className=" px-2 pt-11 flex flex-col items-center">
        <div className="hover:scale-105 transition-all block cursor-pointer bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full p-[2px]">
        <div className="block bg-white rounded-full p-[2px] ">
          <img
            className="w-14 h-14 aspect-square object-cover rounded-full "
            src={picutre}
          />
        </div>
        </div>
        <p className="text-xs">Alice breb</p>
      </div>
    </>
  );
};

export default Stories;
