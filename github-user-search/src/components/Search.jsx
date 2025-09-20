import React, { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      let data;

      // If advanced search fields are filled, use advancedUserSearch
      if (location || minRepos) {
        data = await advancedUserSearch(username, location, minRepos);
        if (data.items && data.items.length > 0) {
          setUsers(data.items);
        } else {
          setError("Looks like we cant find the user");
        }
      } else {
        // Basic search using fetchUserData
        data = await fetchUserData(username);
        if (data) {
          setUsers([data]); // wrap in array for uniform rendering
        } else {
          setError("Looks like we cant find the user");
        }
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
            <div>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="font-bold">
                {user.login}
              </a>
              {user.location && <p className="text-sm">{user.location}</p>}
              {user.public_repos !== undefined && (
                <p className="text-sm">Repos: {user.public_repos}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
