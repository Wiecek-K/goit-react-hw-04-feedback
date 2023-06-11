import { useState } from "react";

function App() {
  const [goodCnt, setGoodCnt] = useState(0);
  const [neutralCnt, setNeutralCnt] = useState(0);
  const [badCnt, setBadCnt] = useState(0);

  const increaseGoodCnt = () => {
    setGoodCnt((prevState) => prevState + 1);
  };
  const increaseNeutralCnt = () => {
    setNeutralCnt((prevState) => prevState + 1);
  };
  const increaseBadCnt = () => {
    setBadCnt((prevState) => prevState + 1);
  };
  return (
    <>
      <h2>Please leave feedback</h2>
      <button onClick={increaseGoodCnt}>Good</button>
      <button onClick={increaseNeutralCnt}>Neutral</button>
      <button onClick={increaseBadCnt}>Bad</button>
      <h2>Statistic</h2>
      <p>{`Good: ${goodCnt}`}</p>
      <p>{`Neutral: ${neutralCnt}`}</p>
      <p>{`Bad: ${badCnt}`}</p>
    </>
  );
}
export default App;
