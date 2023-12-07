import Avatar from "./Avatar";
import ButtonCard from "./ButtonCard";
import "./Card.css";

const Card = ({ imgUrl, textAlt, name }) => {
  return (
    <div className="card">
      <Avatar imgUrl={imgUrl} textAlt={textAlt} name={name} />
      <ButtonCard />
    </div>
  );
};

export default Card;
