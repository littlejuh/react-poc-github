import React, { Component } from 'react';
import { githubGetUserInfo } from '../api/github';
class ShowInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', location: ''};
      }

    async componentDidMount() {
        let response;
        try {
            const user  = this.props.name;
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
            <h3>{this.state.name}</h3>
            <h3>{this.state.location}</h3>
        </div>
    );
  }
}

export default ShowInfo;

