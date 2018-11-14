import React, { Component } from 'react';

var availableProjectsCategories = ['IT', 'FINANCE', 'HR', 'MOBILE'];

class AddProject extends Component {

  constructor() {
    super();
    this.state = {
        title: '',
        category: availableProjectsCategories[0]
    };
  }

  handleTitleChanged(e) {
    console.log(e.target.value);
    this.setState({title: e.target.value});
  }

  handleCategoryChanged(e) {
    console.log(e.target.value);
    this.setState({category: e.target.value});
  }

  handleClickAdd(e) {
    /* Note: This is callback to the parent's (App.js) addNewProject method: */
    this.props.addNewProject(this.state);
  }

  render() {
    return (
      <div className='AddProject'>
        <h4>Add Project:</h4>
        <span>Title:</span><input type='text' onChange={e => this.handleTitleChanged(e)}/>
        <span>Category:</span>
          <select onChange={e => this.handleCategoryChanged(e)}>
              { availableProjectsCategories.map(p => <option key={p} value={p}>{p}</option>) }
          </select>
          <button onClick={e => this.handleClickAdd(e)}>Add Project</button>
      </div>
    );
  }
}

export default AddProject;
