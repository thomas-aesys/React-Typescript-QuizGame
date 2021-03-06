import React from "react";
//Types
import { AnswerObject } from "../App";
//Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
