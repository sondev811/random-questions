import { useState } from "react";
import { questionList } from "../App";

const Random = (props) => {
  const [questions, setQuestions] = useState([...questionList]);
  const [question, setQuestion] = useState("");
  const [openAnswer, setOpenAnswer] = useState(false);
  const getQuestion = () => {
    setOpenAnswer(false);
    const randomNumber = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomNumber]);
    questions.splice(randomNumber, 1);
    // setQuestions(questions);
  };
  const reset = () => {
    setOpenAnswer(false);
    setQuestions([...questionList]);
    setQuestion("");
  };
  return (
    <div className="App">
      <h1>Random question</h1>
      <p>Số câu hỏi còn: {questions.length}</p>
      <p>Câu hỏi: {question.question}</p>
      <div style={{ overflow: "auto", width: "100%" }}>
        <p>Đáp án:</p>
        {openAnswer &&
          question?.answer?.map((ans, index) => {
            return (
                ans.isPre ? <pre style={{ whiteSpace: 'break-spaces', color: "#fff"}} key={index}>{ans.data}</pre> : <p key={index}>{ans.data}</p>
            );
          })}
      </div>
      <button onClick={getQuestion}>Random</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setOpenAnswer(true)}>Answer</button>
    </div>
  );
};

export default Random;
