import React, { Component } from 'react';
import './App.css';
import {getSmurfs, addSmurf} from '../actions/index'
import {connect} from 'react-redux'
import SmurfList from './SmurfList'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  }

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  handleFormChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value})
  }

  handleAdd = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs with Redux</h1>
        <SmurfList smurfs={this.props.smurfs} />
        <form onSubmit={this.props.smurfs}>
          <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleFormChanges}
          />
          <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleFormChanges}
          />
          <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.handleFormChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);
