import { useRef, useState } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedbacks, setFeedbacks] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const body = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then(({ feedback }) => setFeedbacks(feedback));
  };
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input ref={emailRef} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback address</label>
          <textarea ref={feedbackRef} id="feedback" rows="5" />
        </div>
        <button>Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedbacks.map(({ feedback, id, email }) => (
          <li key={id}>
            {feedback} - {email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
