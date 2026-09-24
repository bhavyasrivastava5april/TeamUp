import { useState, useEffect } from "react";

function CreatePost() {
  const [eventName, setEventName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [eventLink, setEventLink] = useState("");
  const [membersNeeded, setMembersNeeded] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(
      localStorage.getItem("teamupPosts") || "[]"
    );

    if (savedPosts.length > 0) {
      setPost(savedPosts[savedPosts.length - 1]);
    }
  }, []);

  const handleSubmit = () => {
    if (
      !eventName ||
      !eventLink ||
      !membersNeeded ||
      !skills ||
      !description ||
      !contact
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newPost = {
      eventName,
      eventLink,
      membersNeeded,
      skills,
      description,
      contact,
    };

    const existingPosts = JSON.parse(
      localStorage.getItem("teamupPosts") || "[]"
    );

    existingPosts.push(newPost);

    localStorage.setItem(
      "teamupPosts",
      JSON.stringify(existingPosts)
    );

    setPost(newPost);
setSubmitted(true);

setEventName("");
setEventLink("");
setMembersNeeded("");
setSkills("");
setDescription("");
setContact("");
  };

  return (
    <div className="create-post">
      <h1>Create a TeamUp Post</h1>

      <p>Find teammates for your next hackathon or competition.</p>

      <label>Event or Hackathon Name</label>
      <input
        type="text"
        placeholder="Enter event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <label>Official Event Link</label>
      <input
        type="url"
        placeholder="Paste official event link"
        value={eventLink}
        onChange={(e) => setEventLink(e.target.value)}
      />

      <label>Number of Teammates Needed</label>
      <input
        type="number"
        placeholder="Enter number"
        min="1"
        value={membersNeeded}
        onChange={(e) => setMembersNeeded(e.target.value)}
      />

      <label>Skills or Roles Required</label>
      <input
        type="text"
        placeholder="Example: React, Python, UI/UX"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <label>About Your Project or Team</label>
      <textarea
        placeholder="Describe your project or team"
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Contact Information</label>
      <input
        type="text"
        placeholder="Enter email or contact details"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <button type="button" onClick={handleSubmit}>
        Create Post
      </button>
<p className="success-message">Post created successfully! 🎉</p>

      {post && (
        <div className="created-post">
          <h2>{post.eventName}</h2>

          <p>
            <strong>Members needed:</strong> {post.membersNeeded}
          </p>

          <p>
            <strong>Looking for:</strong> {post.skills}
          </p>

          <p>
            <strong>About the team:</strong> {post.description}
          </p>

          <p>
            <strong>Contact:</strong> {post.contact}
          </p>

          <a
            href={post.eventLink}
            target="_blank"
            rel="noreferrer"
          >
            View Official Event
          </a>
        </div>
      )}
    </div>
  );
}

export default CreatePost;