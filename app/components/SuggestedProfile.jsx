const SuggestedProfile = ({pic}) => {
  return (
    <div className="flex w-12 rounded-full overflow-hidden aspect-square">
      <img
        className="object-cover h-full w-full"
        src={pic}
        alt="Profile Image"
      />
    </div>
  );
};

export default SuggestedProfile;
