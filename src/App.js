import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyData: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  deleteHandler = (obj) => {
    console.log("inside deleteHandler", obj)
    fetch(`http://localhost:3000/toys/${obj.id}`, {
      method: "DELETE"
      })
      .then(resp => resp.url)
      .then(data => {
        let oldArray=[...this.state.toyData]
        let newArray= oldArray.filter(el => el.id !== obj.id )
        this.setState({ toyData: newArray })
        //return all elements from current state.toyData that is !== obj.id
      }
    )
  }

  appClickHandler = (obj) => {
    console.log("inside appClickHandler", obj.id)

    fetch(`http://localhost:3000/toys/${obj.id}`, {
      method: "PATCH",
      headers: {
      "Content-type": "application/json",
      "accept": "application/json"
      },
      body: JSON.stringify({
      likes: parseInt(obj.likes) +1
      })
    })
    .then(res => res.json())
    .then(data => {
      let oldArray=[...this.state.toyData]
      let newArray = oldArray.map(el => (el.id === data.id ? data : el))
      console.log("this is my newArray:", newArray)
      this.setState({ toyData: newArray})
      //if the id of the returned data matches the element in current array, replace with new data, else, keep element)
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys").then(resp => resp.json().then(data => this.setState({ toyData: data })))
  }

  render(){
    console.log(this.state.toyData)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer deleteHandler={this.deleteHandler} appClickHandler={this.appClickHandler} toys={this.state.toyData}/>
      </>
    );
  }

}

export default App;
