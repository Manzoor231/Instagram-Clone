import HomeProfile from "./HomeProfile";
import SuggestedProfile from "./SuggestedProfile";
const SuggestedFollow = ({name,pic,newOld}) => {
  return (
    <>
      
      <div className="flex justify-between items-center py-3">
        <div className="flex text-sm items-center gap-3">
          <SuggestedProfile pic={pic}/>
          <div className="flex flex-col">
            <p>{name}</p>
            <p className="text-xs text-gray-500">{newOld}</p>
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
