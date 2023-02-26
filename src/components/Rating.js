import star from "./star.svg";
import "./Rating.css";
export default function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={star} alt="star"></img>);
  }
  return <div className="rating-container">{stars}</div>;
}
