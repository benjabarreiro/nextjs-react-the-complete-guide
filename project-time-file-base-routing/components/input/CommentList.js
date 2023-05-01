import classes from "./CommentList.module.css";

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {items.map(({ _id: id, name, text }) => (
        <li key={id}>
          <p>{text}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
