import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Entries from './Entries.jsx'
//import parse from 'nodemon/lib/cli/parse';

function Timeline(){

let navigate = useNavigate();

// const [newState, setNewState] = React.useState('')
// const location = useLocation();
// const timelineList = [];
// const [savedState, setSavedState] = React.useState('')
// const parseString = JSON.parse(location.state.try)

    const [info, setInfo] = React.useState('')
    const [user, setUser] = React.useState('')
    const [data, setData] = React.useState('')

//console.log("after parse!",savedState[0])

// for(let i=0; i <=savedState.length; i++){
//         timelineList.push(
//                   <div>{savedState[i].reponame}</div>
//         )
//     }
useEffect(() => {
    //setSavedState(parseString)
    makeEntries()
    
  }, []);
//repo={parseString[i].reponame} date={parseString[i].datecreated} desc={parseString[i].descrip}
  function makeEntries(){
        let allEntries = [];
        console.log('generating timeline')
        try {
            fetch('/favorites/get',{
                method: 'GET'
            })
           .then((response) => response.json())
           .then((data) => {
            //console.log(data[0].owner)
             for(let i =0; i < data.length; i++){
                   allEntries.push(<Entries favId={data[i]._id} user={data[i].owner} repoNames={data[i].reponame} dateCreated={data[i].datecreated} descrip={data[i].descrip}></Entries>)
                 }
             //let totals = <div className="totals" >Total Favorite Repos: {data.length}</div>
             setData(allEntries);

           })
           
         } catch (error) {
           console.log("error in frontend fetch")
         }
     }

    
   

  //console.log("after everything?",savedState[0])

    return(
        <>
        <section class="intro">
            <div class="container">
                <h1>Timeline!</h1>
                <button className="headbuttons" onClick={()=>navigate("/")}>Back</button>
            </div>
            </section>
            <section className="timelinebody">
            <ul className="timeline">
                {data}
            </ul>
            </section>
        </>
    )
}

export default Timeline;