import React from 'react';
import { Link } from 'react-router-dom';

//{reponame, owner, datecreated} = req.body
const FavCard = (props)=>{
    const [about, setAbout] = React.useState('')
    const name = props.repoNames;
    const owner = props.user;
    const dateCreated = props.dateCreated;
    const favId = props.favId;
    const getFav = props.getFunc;
    const descrip = props.descrip
    const dateSimple = '' + new Date(props.dateCreated.slice(0, -1));
    const dateSimpler = dateSimple.slice(0,13)
    //console.log(dateSimple)
    const payloads = JSON.stringify({favId:favId})
     function deleteFav(e){
         console.log("delete clicked",props._id)
         try{
            fetch('/favorites/delete',{
                method: 'DELETE',
                headers:{'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"},
                body: payloads,
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data,"reponse")
            getFav()
             })
         }
         catch (error) {
            console.log("error in frontend push")
          }
     }

         function updateFav(e){
             //console.log("update clicked",about)
             const payload = JSON.stringify({favId:favId, about:about})
             try{
                fetch('/favorites/update',{
                    method: 'POST',
                    headers:{'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"},
                    body: payload,
                })
                .then((response) => response.json())
                .then((data) => {
                //console.log(data,"reponse")
                getFav()
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
        <button className="deletebutton" onClick={deleteFav}>Delete</button>
        <div>
            <input className="updateinput" type='text' onChange={(e) => setAbout(e.target.value)}></input>
            <button className="cardbutton" onClick={updateFav}>Update</button>
        </div>
    </div>

    )

}

export default FavCard;