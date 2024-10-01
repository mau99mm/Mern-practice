// I want to get data from Facebook, 
// then whatever I will get, that data i want clean 

const prm = new Promise ( (res, rej ) =>  {

    res( { sts : 'success' } )
} ) // you got the data from facebook

prm.then( obj => obj) // you cleaned the data 
    .then( obj => obj ) // you modified as per requirement 
    .then( obj => console.log(obj) ) // you have utilized that data
    .catch( err => console.error(err))


























