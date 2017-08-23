import React, { Component } from 'react';
import axios from 'axios';
import { capitalize } from '../util';

export default class RepoDetail extends Component {
  constructor() {
    super();

    this.state = {
      repos: [],
      error: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { repo } = nextProps.match.params;
    // Reset error messages
    this.setState({ error: null });

    axios
      .get(`https://api.github.com/orgs/${repo}/repos`)
      .then(({ data }) => 
        this.setState({ repos: data }))
      .catch(e => this.setState({ error: e.toString() }));
  }

  componentDidMount() {
    const { repo } = this.props.match.params;
    axios
      .get(`https://api.github.com/orgs/${repo}/repos`)
      .then(({ data }) => this.setState({ repos: data }))
      .catch(e => this.setState({ error: e.toString() }));
  }

  renderRepos() {
    const { repos, error } = this.state;

    if (!repos.length && !error) return <div>Loading...</div>;
    if (error) return <div>{ error }</div>;

    return (
      <div className="row">
          { repos.map(({ name, description }) => {
            return (
              <div className="col s12" key={name}>
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">
                      { name }
                    </span>
                    <p>{ description }</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    );
  }
  
  render() {
    const { repo } = this.props.match.params;

    return (
      <div className="container">
        <div className="section">
          <h5>Repo Details for {capitalize(repo)}</h5>
          <div>
            { this.renderRepos() }
          </div>
        </div>
      </div>
    );
  }
};