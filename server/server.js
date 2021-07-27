console.log('look ma, my first express app! 💖');

//load the express library 
//from node_module/express

const express = require('express');

const app = express();


//tell express where to find all 
//of our "public" files
//aka " clinet-side" files
//aka "static asset"
app.use(express.static('./server/public'))




//listen for requests
const port = 5000; 
app.listen(port, function(){

    //kind of like our onReady function
    console.log('app is up and running 🏃');
    
});