import React, { useState } from 'react';
import PageHeading from './PageHeading';
import classes from './AddQuestion.module.css'
import axios from 'axios';

type FormData = {
    question: string;
    type: string;
  }

const AddQuestion: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        question: "",
        type: ""
      });

      const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      }
    
      const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("submitted", formData);
        
        axios.post('http://localhost:5000/addquestion', formData)
        .then(response => {
        console.log(response);
        // Add logic to handle the response if needed
        })
        .catch(error => {
        console.error(error);
        // Add logic to handle the error if needed
        });
      }
    
      return (
        <>
          <PageHeading pageTitle="Add a question" />
          <div className={classes.top}>
            <div className={classes.maincontent}>
              <form method="POST" onSubmit={submitHandler}>
                <label>
                  Question:
                  <input type="text" name="question" onChange={onchangeHandler} />
                </label>
                <label>
                  Type:
                  <input type="text" name="type" onChange={onchangeHandler} />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </>
      );
    };    

export default AddQuestion;