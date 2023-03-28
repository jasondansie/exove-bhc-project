const express = require("express");
const Question = require("./models/Survey");
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const config = require("./config");
const Survey = require("./models/Survey");


const dbUrl = config.dbUrl;

require('dotenv').config();

app.use(cors());


mongoose.connect(dbUrl);

  app.get("/list", async (req, res) => {
    try {
      let survey = await Survey.find();
      res.status(200).json({
        status: 200,
        data: survey,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  });

  app.get("/fillSurvey", async (req, res) => {
    try {
      const survey = new Survey({
        name: 'Example Survey',
        description: 'This is an example survey.',
        questions: [
          {
            question: 'What is your favorite color?',
            type: 'text',
          },
          {
            question: 'What is your favorite animal?',
            type: 'text',
          },
        ],
      });
      
      if (survey.save()) {
        console.log("Saved successfully");
      } else {
        console.log("Data not saved");
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  });

app.listen(5000, () => {
    console.log("server running on port 5000");
})