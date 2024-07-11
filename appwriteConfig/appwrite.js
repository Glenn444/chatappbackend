const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.API_KEY_SECRET); // Your secret API key


const databases = new sdk.Databases(client);


const usersAppwrite = new sdk.Users(client);


const account = new sdk.Account(client);



module.exports = {usersAppwrite, account};

