import { useState } from "react";

function CreatePost() {
  const [eventName, setEventName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [eventLink, setEventLink] = useState("");
  const [membersNeeded, setMembersNeeded] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [post, setPost] = useState(null);

  return (
    <div className="create-post">
      <h1>Create a TeamUp Post</h1>

      <p>
        Find teammates for your next hackathon or competition.
      </p>

      <input
        type="text"
        placeholder="Event or Hackathon Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <input
        type="url"
        placeholder="Official Event Link"
        value={eventLink}
        onChange={(e) => setEventLink(e.target.value)}
      />

      <input
        type="number"
        placeholder="How many teammates do you need?"
        min="1"
        value={membersNeeded}
        onChange={(e) => setMembersNeeded(e.target.value)}
      />

      <input
        type="text"
        placeholder="What skills or roles are you looking for?"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <textarea
        placeholder="Tell people about your project or team..."
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="How can interested teammates contact you?"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <button
        type="button"
        onClick={() => {
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

          setPost({
            eventName,
            eventLink,
            membersNeeded,
            skills,
            description,
            contact,
          });

          setSubmitted(true);
        }}
      >
        Create Post
      </button>

      {submitted && (
        <p>Post created successfully! 🎉</p>
      )}

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