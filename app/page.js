
import Stories from "./components/Stories";
import MainPost from "./components/MainPost";
import SuggestedFollowSection from "./components/SuggestedFollowSection";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex  justify-between gap-10 w-full">
      <div className="flex flex-col justify-between gap-10 w-full">
        <div className=" flex h-full">
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1699111386434-5573b25c6cb4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1611594547712-9e5d7da58684?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1591973669966-52d2534d9087?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Stories
              picutre={
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          
            <div  className="flex justify-center">
              <div className="flex flex-col gap-4">
                <MainPost pic={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"emilychengmakeup"} post={"Visiing old town"}/>
                <MainPost pic={"https://images.unsplash.com/photo-1699116245651-45d3cd9b7de3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"AliceParker"} post={"Visiing old town"}/>
              </div>
            </div>

            </div>
            <SuggestedFollowSection />
        </div>
      </div>
    </>
  );
}
