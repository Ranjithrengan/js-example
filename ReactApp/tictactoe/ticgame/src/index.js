import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {useState}   from 'react';
import reportWebVitals from './reportWebVitals';




function Square(props){
    return (
        <button className = "square" onClick = {() => 
          props.onClick()
        }>
            {props.value}
        </button>
    )
}

function Board(props) {

      const renderSquare = function(i) {
        return < Square value={props.squares[i]} 
        onClick = {() => props.onClick(i)}
        />; 
    }

    

    return (
        <div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    );
}

function Game(){
  let [history,setHistory] = useState([{squares : Array(9).fill(null)}]);
  let [xIsNext,setX] = useState(true);
  let [stepNum,setStep] = useState(0);
  
  const handleClick = (i) => {
    
  let histry = history.slice(0,stepNum + 1);
  const current = histry[histry.length - 1];
  const squares = current.squares.slice();
      const square = squares.slice();
      if(calculateWinner(square) || square[i]){
        return;
      }

      squares[i] = xIsNext ? 'X' : 'O';
      setHistory(history = history.concat([{
        squares: squares
      }]));
      setX(xIsNext = !xIsNext);

    }
  
  const jumpTo = (step) => {  
    setStep({   
              stepNumber: step,
              xIsNext: (step % 2) === 0,    }
            );  
      }

  let histry = history;
  const current = histry[stepNum];
  const winner = calculateWinner(current.squares)

  const moves = history.map((step,move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li>
        <button onClick = {() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return(
<div className="game">
        <div className="game-board">
            <Board 
            squares= {current.squares}
            onClick = {(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
}



ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};