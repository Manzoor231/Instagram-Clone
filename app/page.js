import HomeProfile from "./components/HomeProfile";
import SuggestedFollow from "./components/SuggestedFollow";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex  justify-between gap-10 w-full">
          <div className=" flex h-full">
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </div>

          <div className="mx-1 my-14 flex flex-col  px-4 ">
            <div className="flex gap-10">
              <div className="flex gap-2  ">
                <div>
                  <HomeProfile />
                </div>
                <div className="flex flex-col ">
                  <p className="text-sm font-semibold">
                    manzoorstrange.official
                  </p>
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
              <h1 className="text-sm text-gray-500 font-semibold">Suggested For You</h1>
              <p className="text-xs font-semibold">See All</p>
            </div>
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
            <SuggestedFollow />
          </div>
        </div>
      </div>
    </>
  );
}
