import React, { useState, useEffect } from 'react';
import PageHeading from './PageHeading';
import classes from './CreateSurvey.module.css'
import axios from 'axios';

interface Question {
  _id: string;
  question: string;
}

interface saveQuestions {

}

interface survey {
  name: string;
  description: string;
}

interface FormData {
  surveyName: string;
  description: string;
  questions: string[];
}

const CreateSurvey: React.FC = () => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [savedQuestionList, setSavedQuestionList] = useState<saveQuestions[]>([]);
  const [survey, setSurvey] = useState<survey[]>([]);
  const [surveyName, setSurveyName] = useState<survey[]>([]);
  const [description, setDescription] = useState<survey[]>([]);
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    surveyName: "",
    description: "",
    questions: [],
  });

  useEffect(() => {
    axios.get<Question[]>("http://localhost:5000/list/questions")
      .then(response => {
        setQuestionList(response.data);
      })
      .catch(error => {
        console.error(error);
        // Add logic to handle the error if needed
      });

  }, [setQuestionList])

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //   setSurvey({ ...survey, [e.target.name]: e.target.value })
    if (e.target.name === "surveyName") {
      setSurveyName({ ...surveyName, [e.target.value]: e.target.value })
    } else {
      setDescription({ ...description, [e.target.value]: e.target.value })
    }
  }

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value, id } = event.target;

    if (checked) {
      setCheckedBoxes([...checkedBoxes, value]);
      console.log("question list: ", questionList);
      console.log("value: ", value);
    } else {
      setCheckedBoxes(checkedBoxes.filter((box) => box !== name));
    }
  };


  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("checkedBoxes: ", checkedBoxes);
    const questions = checkedBoxes.map((box) => box);
    console.log("question: ", questions);
    setFormData((prevFormData) => ({ ...prevFormData, questions }));

    // console.log("submitted", formData);
  }



  return (
    <div>
      <PageHeading
        pageTitle="Create Survey"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
          <form action="POST" onSubmit={submitHandler}>
            <label>
              Survey Name:
              <input type="text" name="surveyName" onChange={onchangeHandler} />
            </label>
            <label>
              Description:
              <input type="text" name="description" onChange={onchangeHandler} />
            </label>
            <div>
              {questionList.map((question, i) => (
                <div key={question._id}>
                  <label htmlFor={question._id}>{question.question}</label>
                  <input type="checkbox" name={question._id} value={question._id} onChange={checkboxHandler} />
                </div>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;