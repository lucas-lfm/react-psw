import "./ProfilePicture.css";

const ProfilePicture = ({ imgUrl, name, displayName }) => {
  return (
    <>
      <img className="profile-pic" src={imgUrl} alt="Foto de perfil" />
      {displayName && <h2 className="profile-name">{name}</h2>}
    </>
  );
};

export default ProfilePicture;
