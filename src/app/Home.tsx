import React from 'react';
import classes from './Home.module.css'
import PageHeading from './PageHeading';

const Home = () => {
    return (
        <div>
      <PageHeading
        pageTitle="DashBoard"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
            Main content
          <div className={classes.chart}>
            Chart area
          </div>
        </div>
      </div>
    </div>
    );
};

export default Home;