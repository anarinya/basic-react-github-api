import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../util';

const REPOS = ['blizzard', 'facebook', 'netflix', 'yahoo', 'emberjs'];

export default (props) => {
  return (
    <div className="container">
      <div className="section">
        <h5>Repo List</h5>
          <div className="row">
            { REPOS.map((repo) => 
              <div className="col m12 l4" key={repo}>
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">
                      <Link to={`/repos/${repo}`}>{capitalize(repo)}</Link>
                    </span>
                    <p>Available repos for {repo}.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};