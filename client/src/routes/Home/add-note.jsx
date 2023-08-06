import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function AddNote() {
  const baseUrl = `https://note-app-mern-api.vercel.app/api/notes`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">
        <ArrowBackIcon />
      </Link>
      <h1>Create Note</h1>

      <p className="text-center">
        {submitted && (
          <Alert className="success-message" severity="success">
            Note has been added!
          </Alert>
        )}
      </p>

      <form onSubmit={addNote}>
        <div className="single-note">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title"
            />
          </div>

          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="4"
              cols="50"
              className="description"
            ></textarea>
          </div>
        </div>
        <Button
          variant="contained"
          size="large"
          type="submit"
          disabled={submitted}
        >
          {submitted ? "Saving note..." : "Save"}
        </Button>
      </form>
    </div>
  );
}

export default AddNote;
