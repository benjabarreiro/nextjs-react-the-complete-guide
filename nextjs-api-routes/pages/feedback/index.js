import React, { useState } from "react";
import { getFileData } from "../api/feedback";

export default function Feedback({ feedbacks }) {
  const [feedback, setFeedback] = useState({});
  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedback(data.feedback));
  };
  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {feedbacks.map(({ feedback, id, email }) => (
          <li key={id}>
            {feedback}
            <button onClick={loadFeedbackHandler.bind(null, id)}>
              Show detail
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const feedbacks = getFileData();
  return {
    props: { feedbacks },
  };
};
