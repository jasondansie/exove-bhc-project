import React from 'react';
import MenuItem from './MenuItem';
import classes from './Sidemenu.module.css';

interface Iprops {
    image: string,
    name: string,
}
const Sidemenu = (props: Iprops) => {
    const {name, image} = props;
    let imageUrl = `./images/${image}`
    return (
        <div>
            <div className={classes.user}>
                <img className={classes.roundImage} src={imageUrl} alt={name} />
                <h4>{name}</h4>
            </div>
            <div className={classes.menulist}>
                <ul>
                    <li>
                        <MenuItem
                            name="DashBoard"
                            icon="fa fa-clock-o"
                            link="/home"
                         />
                    </li>
                    <li>
                        <MenuItem
                            name="Add Question"
                            icon="fa fa-clock-o"
                            link="/addquestion"
                         />
                    </li>
                    <li>
                        <MenuItem
                            name="Create Survey"
                            icon="fa fa-clock-o"
                            link="/createsurvey"
                         />
                    </li>
                    
                    
                </ul>

            </div>
        </div>
        
    );
};

export default Sidemenu;