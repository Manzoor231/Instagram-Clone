import React from "react";

const ProfilePosts = ({pic}) => {
  return (
    <div>
      <div className="aspect-square">
        <img
          className=" rounded-none w-72 h-72 object-cover "
          src={pic}
        />
      </div>
    </div>
  );
};

export default ProfilePosts;
