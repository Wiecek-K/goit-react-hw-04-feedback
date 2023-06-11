import { ButtonI } from "../types/type";
interface FeedbackOptionsProps {
  options: ButtonI[];
  onLeaveFeedback(index: number): void;
}
export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}: FeedbackOptionsProps) => (
  <div>
    {options.map((button, index) => (
      <button key={index} onClick={() => onLeaveFeedback(index)}>
        {button.text}: {button.count}
      </button>
    ))}
  </div>
);
