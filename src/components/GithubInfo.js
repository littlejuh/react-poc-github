import React, { Component } from 'react';
import { githubGetUserInfo } from '../api/github';
class GithubInfo extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          location: '',
        };
      }

    async componentDidMount() {
        let response;
        try {
            const user  = 'littlejuh';
            response = await githubGetUserInfo({ user });
        } catch ({ error }) {
             console.log('catch')
        }
        finally{
            this.setState({
                name: response.data.name,
                location: response.data.location
            });
        }
  }

  render() {
    return (
        <div className="content">
          <div className="message">
            <p>{this.state.name}</p>
            <p>{this.state.location}</p>
          </div>
        </div>
    );
  }
}

export default GithubInfo;

