import React, { Component } from 'react'
import '../App.css';


class Square extends Component{
    constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }

  render(){
    return(
      <>
          <div className="square"
          onClick={this.handleClick}>
            {this.props.value}
          </div>
      </>
    )
  }
}
export default Square
