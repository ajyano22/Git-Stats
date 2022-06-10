const fetch = require('node-fetch');
;//server/models/favoriteModel.js

const userController = {};

const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return {
      log: `userController.${method} ${type}: ERROR: ${
        typeof err === 'object' ? JSON.stringify(err) : err
      }`,
      message: {
        err: `Error occurred in userController.${method}. Check server logs for more details.`,
      },
    };
  };

userController.getUserData = async (req, res, next) => {
    const token = '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';
    const id = req.params.id;
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login:"${id}") {
                repositories(first: 100) {
                    totalCount
                    nodes {
                        name
                        createdAt
                        description
                        }
                    pageInfo {
                        endCursor
                        hasNextPage
                        }
                 }
            }
        }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    res.locals.userData = data;
    //console.log(data.data.user.repositories.nodes[1],"heres the data")
    //console.log(`"${id}"`)
    return next();
//return data
}

    //     // for(let i =0; i < response.length; i++){
    //     //     names.push(response[i].name)
    //     // }
    //     res.locals.userData = response;
    //     console.log(response,"heres the data")
    //     //res.send(response[0].name)
    //     return next();
    // })
//     .catch((err) => {
//         return next({
//             log: `userController.getMoreCharacterData: ERROR: ${
//                 typeof err === 'object' ? JSON.stringify(err) : err
//             }`,
//             message: {
//                 err: 'Error occurred in userController.getUserData. Check server logs.'
//             }
//         })

//     })

// }
// )}


module.exports = userController;