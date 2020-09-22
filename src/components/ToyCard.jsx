import React, { Component } from 'react';

class ToyCard extends Component {

  toycardClickHandler =() => {
    this.props.appClickHandler(this.props.toyObj)
  }

  toycardDeleteHandler = () => {
    this.props.deleteHandler(this.props.toyObj)
  }

  render() {
    console.log(this.props)
    // console.log(this.props.toyObj.name)

    return (
      <>
      <div className="card">
        <h2>{this.props.toyObj.name}</h2>
        <img src={this.props.toyObj.image} alt="Toy's Name" className="toy-avatar" />
        <p>{this.props.toyObj.likes} Likes </p>
        <button onClick={this.toycardClickHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={this.toycardDeleteHandler} className="del-btn">Donate to GoodWill</button>
      </div>

      </>
    );
  }

}

export default ToyCard;


