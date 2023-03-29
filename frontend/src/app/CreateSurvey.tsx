import React, { useState, useEffect } from 'react';
import PageHeading from './PageHeading';
import classes from './CreateSurvey.module.css'
import axios from 'axios';

interface Question {
  id: number;
  question: string;
}

const CreateSurvey: React.FC = () => {
  const [questionList, setQuestionList] = useState<Question[]>([]);

  useEffect(() => {
    axios.get<Question[]>("http://localhost:5000/list/questions")
      .then(response => {
        console.log(response);
        setQuestionList(response.data);
      })
      .catch(error => {
        console.error(error);
        // Add logic to handle the error if needed
      });

  }, [setQuestionList])



  return (
    <div>
      <PageHeading
        pageTitle="Create Survey"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
          {questionList.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;