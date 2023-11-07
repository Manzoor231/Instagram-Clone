const Stories = () => {
  return (
    <>
      <div className=" px-2 py-11 flex flex-col items-center">
        <div className="block bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full p-[2px]">
        <div className="block bg-white rounded-full p-[2px]">
          <img
            className="w-14 h-14 aspect-square object-cover rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        </div>
        <p className="text-xs">Alice breb</p>
      </div>
    </>
  );
};

export default Stories;
