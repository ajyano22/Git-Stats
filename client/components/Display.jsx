import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RepoCard from './Cards.jsx';
import FavCard from './FavCards.jsx';


function Display() {
    let navigate = useNavigate();
    const [info, setInfo] = React.useState('')
    const [user, setUser] = React.useState('')
    const [data, setData] = React.useState('')
    const [passState, setPassState] = React.useState('')
  
    //const url = `https://api.github.com/users/ajyano22/repos`;
  
     function getUser(e){
      let repoNames = [];
      console.log("clicked get")
      try {
         fetch(`/api/${user}`)
        .then((response) => response.json())
        .then((data) => {
          let short = data.data.user;
          
          for(let i =0; i < short.repositories.nodes.length; i++){
                repoNames.push(<RepoCard user={user} repoNames={short.repositories.nodes[i].name} dateCreated={short.repositories.nodes[i].createdAt} descrip={short.repositories.nodes[i].description}></RepoCard>)
            }
          let totals = <div className="totals">Total Repos: {short.repositories.totalCount}</div>
          setPassState(data.data.user)
          setData(repoNames);
          setInfo(totals);
          
        })
        
      } catch (error) {
        console.log("error in frontend fetch")
      }
    } 

    function showFavs(e){
        let repoNames = [];
        console.log('clicked favorites')
        try {
            fetch('/favorites/get',{
                method: 'GET'
            })
           .then((response) => response.json())
           .then((data) => {
            //console.log(data[0].owner)
             for(let i =0; i < data.length; i++){
                   repoNames.push(<FavCard getFunc={showFavs} favId={data[i]._id} user={data[i].owner} repoNames={data[i].reponame} dateCreated={data[i].datecreated} descrip={data[i].descrip}></FavCard>)
                 }
             let totals = <div className="totals" >Total Favorite Repos: {data.length}</div>
             setPassState(data)
             setData(repoNames);
             setInfo(totals);
           })
           
         } catch (error) {
           console.log("error in frontend fetch")
         }
    }

    function generate(){
        console.log("timeline!")
        //console.log(passState)
        const stringState = JSON.stringify(passState)
        navigate("/timeline",{state:{try:stringState}})
    }
    
  return (
    <>
    <div className="header">
    <h1 className="headtextmain">Git Stats</h1>
    <h3 className="headtextsub">Pull user data</h3>
      <input className="userinput"type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
    <button className="headbuttons" onClick={getUser}>Find User</button>
    <button className="headbuttons" onClick={showFavs}>Favorites</button>
    <button className="headbuttons" onClick={generate}>Generate Timeline</button>
    </div>
    <div>
      {info}
      {data}
    </div>
    </>
  );
  }
  export default Display;