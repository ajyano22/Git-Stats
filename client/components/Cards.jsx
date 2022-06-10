import React from 'react';
import { Link } from 'react-router-dom';

//{reponame, owner, datecreated} = req.body
const RepoCard = (props)=>{
    const name = props.repoNames;
    const owner = props.user;
    const descrip = props.descrip;
    const dateCreated = props.dateCreated
    const dateSimple = '' + new Date(props.dateCreated.slice(0, -1));
    const dateSimpler = dateSimple.slice(0,13)
    //console.log(dateSimple)
    const payload = JSON.stringify({reponame:name, owner:owner, datecreated:dateCreated, descrip:descrip})
     function saveFav(e){
         try{
            fetch('/favorites/save',{
                method: 'POST',
                headers:{'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"},
                body: payload,
            })
            .then((response) => response.json())
            .then((data) => {
            //console.log(data,"reponse")
             })
         }
         catch (error) {
            console.log("error in frontend push")
          }
    }

    return(
    <div className='repoCard'>
        <h4 className="repoName">Repo Name: {name}</h4>
        <ul className="cardtext">Owner: {owner}</ul>
        <ul className="cardtext">Date Created: {dateSimpler}</ul>
        <ul className="cardtext">About: {descrip}</ul>
        <button className="cardbutton" onClick={saveFav}>Add to Favorites</button>
    </div>

    )

}

export default RepoCard;