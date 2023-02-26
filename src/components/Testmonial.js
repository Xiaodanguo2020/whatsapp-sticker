import "./Testmonial.css";
import Rating from "./Rating";
export default function Testmonial({ text, rating, author, avatarURL }) {
  return (
    <div className="testmonial-container">
      <img className="avatar-image" src={avatarURL} alt="user avatar"></img>
      <div>
        <p className="testimonial-text font-md">{text}</p>
        <Rating rating={rating} />
        <p className="author-name">- {author} </p>
      </div>
    </div>
  );
}
