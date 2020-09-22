import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component{

  toys = () => {
    return this.props.toys.map(toy => <ToyCard deleteHandler={this.props.deleteHandler} appClickHandler={this.props.appClickHandler}toyObj={toy}/>)
  }

  render(){
    console.log(this.props)
    return (
      <div id="toy-collection">
        {this.toys()}
      </div>
    )
  }

}

export default ToyContainer;
