import type { ButtonI } from "../types/type";

interface StatisticsProps {
  options: ButtonI[];
  total: number;
  positivePercentage: string;
}

export const Statistics = ({
  options,
  total,
  positivePercentage,
}: StatisticsProps) => (
  <ul>
    {options.map((option, i) => (
      <li key={i}>
        <p>{`${option.text}: ${option.count}`}</p>
      </li>
    ))}
    <li>
      <p>{`Total: ${total}`}</p>
    </li>
    <li>
      <p>{`Positive Feedback: ${positivePercentage}`}</p>
    </li>
  </ul>
);
