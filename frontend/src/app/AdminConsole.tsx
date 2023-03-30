import React from 'react';
import classes from './AdminConsole.module.css';
import Main from './Main';
import ProfileMenu from './ProfileMenu';
import Sidemenu from './Sidemenu';


const AdminConsole = () => {   
    return (
        <div className={classes.adminconsole}>                 
        <aside className={classes.sidemenu}>
            <Sidemenu
                name={`Jason Danise`}
                image={"photoFilename"}
            />
        </aside>
        <div className={classes.mainitems}>

            <div className={classes.topmenu}>
                <ProfileMenu
                    userName={`Jason Dansie` }
                    imageUrl={"photoFilename"}
                />
            </div>
            <div className={classes.maincontent}>
                <Main />
            </div>
        </div>
    </div>
    );
}
export default AdminConsole;