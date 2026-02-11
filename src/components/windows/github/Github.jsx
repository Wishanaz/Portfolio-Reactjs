import MacWindow from "../MacWindow";
import projects from "../../../assets/github.json";
import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import RepoList from "./RepoList";
import RepoDetail from "./RepoDetail";
import "./github.scss";

const Github = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  function handleRepoClick(repo) {
    setSelectedRepo(repo);
  }

  return (
    <MacWindow>
      <div className="container">
        {selectedRepo ? (
          <RepoDetail
            repo={selectedRepo}
            goBack={() => setSelectedRepo(null)}
          />
        ) : (
          <>
            <ProfileSidebar />
            <RepoList data={projects} onClick={handleRepoClick} />
          </>
        )}
      </div>
    </MacWindow>
  );
};

export default Github;
