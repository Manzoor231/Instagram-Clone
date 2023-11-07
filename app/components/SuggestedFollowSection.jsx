import SuggestedFollow from "./SuggestedFollow";
import HomeProfile from "./HomeProfile";

const SuggestedFollowSection = () => {
  return (
    <>
      <div className="mx-1 my-14 flex flex-col  px-4 ">
        <div className="flex gap-10">
          <div className="flex gap-2  ">
            <div>
              <HomeProfile />
            </div>
            <div className="flex flex-col ">
              <p className="text-sm font-semibold">manzoorstrange.official</p>
              <p className="text-sm text-gray-500">Manzoor Strange</p>
            </div>
          </div>

          <div className="flex ">
            <button className="text-xs text-blue-500 font-semibold">
              Switch
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-5 items-center">
          <h1 className="text-sm text-gray-500 font-semibold">
            Suggested For You
          </h1>
          <p className="text-xs font-semibold">See All</p>
        </div>
        <SuggestedFollow
          newOld={"New to Instagram"}
          name={"Alicebri123"}
          pic={
            "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <SuggestedFollow
          newOld={"Suggested for you"}
          name={"zucker.official"}
          pic={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <SuggestedFollow
          newOld={"Suggested for you"}
          name={"michealNew__offical"}
          pic={
            "https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <SuggestedFollow
          newOld={"New to Instagram"}
          name={"_micheal123"}
          pic={
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <SuggestedFollow
          newOld={"Suggested for you"}
          name={"_realMicheal"}
          pic={
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </>
  );
};

export default SuggestedFollowSection;
