const { useState } = React;

const Point = ({ point, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      style={{
        width: '50px',
        height: '50px',
        margin: '10px',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '50%'
      }}
    >
      {point}
    </div>
  );
};

const App = () => {
  const [points, setPoints] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [allCleared, setAllCleared] = useState(false);

  const handlePointClick = (point) => {
    setPoints(points.filter(p => p !== point));
    setScore(score + 1);

    if (points.length === 1) {
      setAllCleared(true);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>SCORE: {score}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '200px', margin: '0 auto' }}>
        {points.map(point => (
          <Point key={point} point={point} onClick={() => handlePointClick(point)} />
        ))}
      </div>
      {allCleared && <h2>ALL CLEARED</h2>}
    </div>
  );
};

// Render React app to the root element.
ReactDOM.render(<App />, document.getElementById('root'));
