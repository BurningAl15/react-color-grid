import './App.css';
import { useState } from 'react';

const createMatrix = (n, m) => {
  const matrix = [];

  const color = "#000000";

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(color);
    }
  }

  return matrix;
}

function App() {
  const [color, setColor] = useState('coral');
  const [matrix, setMatrix] = useState(createMatrix(3, 3));


  const handleClick = (row, column) => {
    let matrixCopy = [...matrix];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === row && column === j) {
          matrixCopy[i][j] = color;
        }
      }
    }
    setMatrix(matrixCopy)
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {
            matrix.map((row, i) => {
              return <tr key={i}>
                {row.map((column, j) => {
                  return <td key={j} style={{ backgroundColor: column }} onClick={() => { handleClick(i, j) }}>
                  </td>
                })}
              </tr>
            })
          }
        </tbody>
      </table>

      <div className="color-selection-container">
        <h4 className="color-selection-title">Select a color and click on any cell of the grid</h4>
        <div className="color-container">
          <button className="btn reset" onClick={() => { setColor('#000000') }}></button>
          <button className="btn button1" onClick={() => { setColor('coral') }}></button>
          <button className="btn button2" onClick={() => { setColor('gray') }}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
