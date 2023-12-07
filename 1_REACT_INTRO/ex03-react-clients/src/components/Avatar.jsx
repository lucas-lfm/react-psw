import "./Avatar.css";

const Avatar = ({ imgUrl, textAlt, name }) => {
  return (
    <>
      <img className="avatar" src={imgUrl} alt={textAlt} />
      <h2 className="avatar-name">{name}</h2>
    </>
  );
};

export default Avatar;
