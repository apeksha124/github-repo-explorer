import { useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("stars");
  const [recentSearches, setRecentSearches] = useState(
  JSON.parse(localStorage.getItem("recentSearches")) || []
);
const [selectedRepo, setSelectedRepo] = useState(null);

  const handleSearch = async () => {
    if (username.trim() === "") {
      alert("Please enter a GitHub username");
      return;
    }

    try {
      setLoading(true);
      console.log(import.meta.env.VITE_API_URL);
    const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/github/${username}`
);

      const data = await response.json();
    if (data.message === "Not Found") {
     console.log("NOT FOUND");
     setUserData(null);
     alert("User not found!");
     setLoading(false);
     return;
    }
      setUserData(data);
      const updatedSearches = [
  username,
  ...recentSearches.filter(
    (item) => item !== username
  ),
].slice(0, 5);

setRecentSearches(updatedSearches);

localStorage.setItem(
  "recentSearches",
  JSON.stringify(updatedSearches)
);
      const repoResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/api/github/${username}/repos`
);
const repoData = await repoResponse.json();

setRepos(repoData);
      setLoading(false);

    } catch (error) {
  console.log(error);
  alert("Network error. Please try again.");
  setLoading(false);
}
  };

  

  return (
    <div className="app">
      <h1> 🚀GitHub Repo Explorer</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <button onClick={handleSearch}>
          
          Search
        </button>
      </div>
      {recentSearches.length > 0 && (
  <div className="recent-searches">
    <h3>Recent Searches</h3>

    {recentSearches.map((item, index) => (
      <button
  key={index}
  onClick={() => {
    setUsername(item);

    setTimeout(() => {
      document.querySelector("button").click();
    }, 100);
  }}
>
  {item}
</button>
    ))}
  </div>
)}
      {loading && (
        <p className="loading">
        🔍 Searching GitHub...
        </p>
      )}

      {userData && (
        <div className="profile-card">
         <h2>{userData.name}</h2>
         <h2>{userData.login}</h2>

         <p>{userData.bio}</p>

          <img
            src={userData.avatar_url}
            alt="avatar"
            width="150"
          />

          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
      <div>
  <label>Sort By: </label>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="stars">Stars</option>
    <option value="name">Name</option>
    <option value="updated">Updated</option>
  </select>
</div>
      {repos.length > 0 && (
  <div className="repo-section">
    <h2>Repositories</h2>

    {[...repos]
  .sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "updated") {
      return (
        new Date(b.updated_at) -
        new Date(a.updated_at)
      );
    }

    return 0;
  })
  .map((repo) => (
     <div
  key={repo.id}
  className="repo-card"
  onClick={() =>
    setSelectedRepo(
      selectedRepo === repo.id
        ? null
        : repo.id
        
    )
  }
>     <a
  href={repo.html_url}
  target="_blank"
  rel="noreferrer"
>
  View Repository
</a>
        <h3>{repo.name}</h3>

        <p>
          {repo.description || "No description"}
        </p>

        <p>
          Language: {repo.language || "Unknown"}
        </p>

        <p>
          ⭐ {repo.stargazers_count}
        </p>

         <p>
        Updated: {new Date(repo.updated_at).toLocaleString()}
       </p>
        {selectedRepo === repo.id && (
  <div>
    <p>Forks: {repo.forks_count}</p>

    <p>
      Open Issues:
      {repo.open_issues_count}
    </p>

    <p>
      Default Branch:
      {repo.default_branch}
    </p>
  </div>
)}
      </div>
    ))}
  </div>
)}
    </div>
  );
}

export default App;