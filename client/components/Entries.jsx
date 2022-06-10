import React from 'react';
import { Link } from 'react-router-dom';

function Entries(props){
    const name = props.repoNames;
    // const owner = props.user;
    const dateCreated = props.dateCreated;
    const dateSimple = '' + new Date(props.dateCreated.slice(0, -1));
    const dateSimpler = dateSimple.slice(0,13)
    // const favId = props.favId;
    // const getFav = props.getFunc;
    const descrip = props.descrip
    console.log(dateSimple.slice(0,13))
    return(
        <>  
            <li>
                    <div className="direction-r">
                         <div className="flag-wrapper">
                             <span className="flag">{name}</span>
                             <span className="time-wrapper"><span className="time">{dateSimpler}</span></span>
                         </div>
                         <div className="desc">{descrip}</div>
                     </div>
                 </li>
            </>
    )
}

export default Entries;