import Link from "next/link";
import React from "react";

const MainPost = ({pic,name,post}) => {
  return (
    <>
      <div className="border-b border-gray-300">
        <div class="max-w-lg mx-auto bg-white rounded-lg p-1 mb-2">
          <div class="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Profile Picture"
                class="w-12 aspect-square object-cover h-12 rounded-full mr-1 border border-gray-200"
              />
              
              <div className="flex items-center gap-1">
                <Link href={"/profile"}><h2 class="text-sm hover:text-gray-500 transition-all cursor-pointer">{name}</h2></Link>
                <div>
              <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
              </div>
                <p class="text-gray-600 text-xs">1d</p>
              </div>
              
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
          <img
            src={pic}
            alt="Post Image"
            className="max-w-full object-contain mb-2 rounded-sm"
          />
          <div className="flex justify-between items-center gap-3">
            <div className="flex  items-center gap-3">
            <button>
              <svg aria-label="Like" className="hover:text-gray-500 transition-all" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
            </button>
            <button >
              <svg aria-label="Comment" className="hover:text-gray-500 transition-all" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
              </button>
            <button >
            <svg aria-label="Share Post" className="hover:text-gray-500 transition-all" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
              </svg>
              </button>
              </div>
              <div>
                <button><svg aria-label="Save" className="hover:text-gray-500 transition-all" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>
              </div>
          </div>
          <div>
            <p className="text-xs font-semibold py-1">580 likes</p>
          </div>
          <div className=" gap-1  flex ">
            <Link href={"/profile"}><p className="font-semibold text-sm hover:text-gray-500  cursor-pointer">{name}</p></Link> <span className="text-sm">{post}<span>...</span></span>
          </div>
          <div>
            <p className="text-gray-500 text-sm py-1">View all 12 comments....</p>
          </div>
          <div>
            <input className=" outline-none text-sm" placeholder="Add Your Comment..."/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPost;
