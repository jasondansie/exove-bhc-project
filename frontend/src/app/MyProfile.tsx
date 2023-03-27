import React from 'react';
import PageHeading from './PageHeading';
import classes from './MyProfile.module.css';

const MyProfile = () => {
    return (
        <div className={classes.MyProfile}>
            <PageHeading
                pageTitle="Profile"
            />
            <div className={classes.userProfile}>
                <div className={classes.userHeading}>
                    <h2>User profile</h2>
                </div>
                <div className={classes.profileContent}>
                    <div className={classes.profileImage}>
                        <img className={classes.roundImage} src={`./images/photoFilename`} alt={`Jason Dansie`} />
                    </div>
                    <div className={classes.profileInfo}>
                        <h3>Jason Dansie</h3>
                        <p> <strong>About:</strong>Owner</p>
                        <ul>
                            <li><i className={classes.emailClassName} ></i> :  jasondansie@gmail.com</li>
                            <li><i className={"fa fa-phone"}></i> :  +358 123 4567</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;