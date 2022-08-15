import React, { Component } from 'react';
import ShowInfo from './ShowInfo';
class SearchInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', showInfo: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleChange(event) {
    this.setState({name: event.target.value});
    this.setState({showInfo: false});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showInfo: true});
  }

  render() {
    return (
        <div className="content">
            
            <form onSubmit={this.handleSubmit}>
            <label>
            Github User:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>

            {this.state.showInfo ? <ShowInfo {...this.state} /> : null}

        </div>
    );
  }
}

export default SearchInfoForm;

