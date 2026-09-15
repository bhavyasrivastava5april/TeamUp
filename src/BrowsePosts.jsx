import { useState, useEffect } from "react";

function BrowsePosts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedPost = localStorage.getItem("teamupPost");

    if (savedPost) {
      setPosts([JSON.parse(savedPost)]);
    }
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.eventName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-posts">
      <h1>Find Teammates</h1>

      <p>Discover teams looking for members.</p>

      <input
        type="text"
        placeholder="Search hackathons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.map((post) => (
        <div className="post-card" key={post.eventName}>
          <h2>{post.eventName}</h2>

          <p>
            <strong>Members needed:</strong> {post.membersNeeded}
          </p>

          <p>
            <strong>Looking for:</strong> {post.skills}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BrowsePosts;