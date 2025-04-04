# Centivo Take-Home Challenge
A simple Node.js, Express, MongoDB API that returns user details based on the ID provided in the request and exclude any user who is under age 21. 

<h3>Local Development:</h3>

**Step 1:** `cd server`  

**Step 2:** run `npm start` or `node server.js` to start the application locally

**Step 3:** navigate to browser and enter `http://localhost:5001/users/${userId}`

<h3>Production Deployment:</h3>

**Live:** [https://centivo-takehomechallenge.onrender.com](https://centivo-takehomechallenge.onrender.com)

<h3>Example 1</h3>

`GET` /users/67e49cf2316964759f95185b

<h5>Response</h5>
{
  "_id": "67e49cf2316964759f95185b",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

<h3>Example 2</h3>

`GET` /users/67e4d682bf4381f906ea2369

<h5>Response</h5>
{
  "message": "User was not found or is under the age 21."
}

<h3>JSON Data:</h3>
{
  "_id": "67e4d682bf4381f906ea2369",
  "name": "Jessica Smith",
  "email": "jessicalsmith@gmail.com",
  "age": 20
}
<br>
{
  "_id": "67e49cf2316964759f95185b",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
<br>
{
  "_id": "67e4d71abf4381f906ea236b",
  "name": "Thomas Jefferson",
  "email": "thomasjefferson@gmail.com",
  "age": 60
}


