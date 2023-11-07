import HomeProfile from "./HomeProfile";
const SuggestedFollow = () => {
  return (
    <>
      
      <div className="flex justify-between items-center py-3">
        <div className="flex text-sm items-center gap-3">
          <HomeProfile />
          <div className="flex flex-col">
            <p>manzoor.strange</p>
            <p className="text-xs text-gray-500">New to Instagram</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-blue-500 font-semibold">Follow</p>
        </div>
      </div>
    </>
  );
};

export default SuggestedFollow;
