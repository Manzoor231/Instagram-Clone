const ProfilePic = () => {
  return (
    <>
      <div className="px-20">
        <div className="flex w-40 rounded-full overflow-hidden aspect-square">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile Image"
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePic;
