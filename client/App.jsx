import React from 'react';
import { render } from 'react-dom';
import { useEffect } from 'react';//'react/cjs/react.production.min';
//import  repoCard from './components/Cards.jsx'; //client/components/Cards.jsx
import Display from './components/Display.jsx'
import Timeline from './components/Timeline.jsx'
import  './stylesheets/style.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


//testing GitHubAPI
const App = () => (
  <BrowserRouter>
      <Routes>
            <Route path="/" element={<Display/>}/>
            <Route path="/timeline" element={<Timeline/>}/>

      </Routes>
    </BrowserRouter>
  );

// function Display() {
//   const [info, setInfo] = React.useState('')
//   const [user, setUser] = React.useState('')
//   const [data, setData] = React.useState('')

//   //const url = `https://api.github.com/users/ajyano22/repos`;

//    function getUser(e){
//     //e.preventDefault()
//     let repoNames = [];
    
//     try {
//       console.log("here")
//        fetch(`/api/${user}`)
//       .then((response) => response.json())
//       .then((data) => {
//         let short = data.data.user;
//         for(let i =0; i < short.repositories.nodes.length; i++){
//               repoNames.push(short.repositories.nodes[i].name)
//           }
//         let totals = <div>Total Repos: {short.repositories.totalCount}</div>
//         setData(repoNames);
//         setInfo(totals);
//         console.log('frontend data',data.data);
//       })
      
//     } catch (error) {
//       console.log("error in frontend fetch")
//     }
//   } 
  
//     //requestUserRepos('ajyano22')
// return (
//   <>
//   <h3>Pull user data</h3>
//     <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
//   <button onClick={getUser}>Find User</button>
//   <div>
//     {info}
//     <repoCard repoData={data[0]}></repoCard>
//   </div>
//   </>
// );
// }

export default App;
