const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.API_KEY_SECRET); // Your secret API key


const databases = new sdk.Databases(client);


const usersAppwrite = new sdk.Users(client);


const account = new sdk.Account(client);
<<<<<<< HEAD
=======
// const listUsers = async()=>{
//     const users = await usersAppwrite.list();
//     console.log(users);

// }

// listUsers()
// const promise = account.createEmailPasswordSession('g@gmail.com', '12345678');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

>>>>>>> a829d2d (Changes)




module.exports = {usersAppwrite, account};

