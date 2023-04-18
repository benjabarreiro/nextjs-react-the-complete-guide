import React, { useRef } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input onChange={() => null} title="Title" inputRef={titleInputRef} />
        <Input
          onChange={() => null}
          title="Image"
          type="url"
          inputRef={imageInputRef}
        />
        <Input
          onChange={() => null}
          title="Address"
          inputRef={addressInputRef}
        />
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            onChange={() => null}
            rows={5}
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
