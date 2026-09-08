import { useState } from "react";

function CreatePost() {
  const [eventName, setEventName] = useState(""); 
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="create-post">
  <h1>Create a TeamUp Post</h1>
  <p>Find teammates for your next hackathon or competition.</p>

  <input
  type="text"
  placeholder="Event or Hackathon Name"
  value={eventName}
  onChange={(e) => setEventName(e.target.value)}
/>
<input
  type="url"
  placeholder="Official Event Link"
/>
<input
  type="number"
  placeholder="How many teammates do you need?"
  min="1"
/>
<input
  type="text"
  placeholder="What skills or roles are you looking for?"
/>
<textarea
  placeholder="Tell people about your project or team..."
  rows="5"
/>
<input
  type="text"
  placeholder="How can interested teammates contact you?"
/>
<button type="button" onClick={() => setSubmitted(true)}>
  Create Post
</button>

{submitted && <p>Post created successfully! 🎉</p>}
</div>
  );
}

export default CreatePost;