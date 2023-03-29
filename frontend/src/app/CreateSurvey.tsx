import React from 'react';
import PageHeading from './PageHeading';
import classes from './CreateSurvey.module.css'

const CreateSurvey: React.FC = () => {

    
    return (
    <div>
      <PageHeading
        pageTitle="Create Survey"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
            Main content      
        </div>
      </div>
    </div>
    );
};

export default CreateSurvey;