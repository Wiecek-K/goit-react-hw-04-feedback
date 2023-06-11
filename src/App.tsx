import { useState } from "react";

import { Section } from "./components/Section";
import { Statistics } from "./components/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions";

function App() {
  const [buttons, setButtons] = useState([
    { text: "Good", count: 0 },
    { text: "Neutral", count: 0 },
    { text: "Bad", count: 0 },
  ]);

  const incrementCounter = (index: number) => {
    setButtons((prevButtons) => {
      const updatedButtons = [...prevButtons];
      updatedButtons[index].count = prevButtons[index].count + 1;
      return updatedButtons;
    });
  };

  const countTotalFeedback = () =>
    buttons.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );

  const countPositiveFeedbackPercentage = () => {
    const goodCount = buttons.find((button) => button.text === "Good")?.count;
    return goodCount !== undefined
      ? `${((goodCount / countTotalFeedback()) * 100).toFixed(2)}%`
      : "no feedback";
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={incrementCounter} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={buttons}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          "No feedback given"
        )}
      </Section>
    </>
  );
}
export default App;
