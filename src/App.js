import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      tresureLocation: null
    }
  }

  componentDidMount(){
    let tresure = Math.floor(Math.random() * this.state.board.length)
    this.setState({tresureLocation: tresure})
  }

  handleGamePlay = (index) => {
    const { board, tresureLocation } = this.state 
    if(index === tresureLocation){
      board[index] = "💎"
      this.setState({ board: board })
    } else {
      board[index] = "🌴"
    this.setState({ board: board })
    }   
  }

  render(){
    console.log(this.state.tresureLocation);
    return(
      <>
        <h1>Treasure Hunt Game</h1>
          <div className="gameboard">
            {this.state.board.map((value, index) => {
              return (
                <Square 
                  value={value} 
                  key={index}
                  index={index}
                  handleGamePlay={this.handleGamePlay}
                />
              )
            })}  
          </div>
      </>
    )
  }
}
export default App
