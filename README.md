# ExpressApp
Learning to use Express Framework in Node
# Backend
Task: Build a webserver that servers an API using Node and Express. We will do an example "Blog"
The API should have the folllowing functions:
- Get an array of all blog posts (Like a landing page)
- Add a new blog post to the DB
- Edit an existing blog post by supplying the ID and a new blog post object (Fail if the ID doesn't exist)
- Get a specific blog post by it's ID
- Get all blog posts by a specified user in an array
- Get a list of all users and their number of posts:
```
{
  "User": "Garrett Delfosse",
  "PostCount": 7
}
```
Here's the blog post data structure:
```
inMemoryDB = {
  "iaw8743fg3rl92": {
    "Title": "Your Title Here",
    "Body": "Some text for the body.",
    "Author": "David Le"
  },
  "9p38qhgqirgpq2": {
    "Title": "Your Title Here 2 ",
    "Body": "Some text for the body. 2 ",
    "Author": "Garrett Delfosse"
  }
}
```
The ID of the blog posts should be a unique randomly generated string.
- Check out the npm package UUID for this. 

For now do everything in memory, we'll deal with real DB stuff later. 

Use multiple files to organize your routes. (api.js, posts.js, users.js)

All responses should follow the format:
```
{
  Success: true or false, 
  Results: [] or {}, (If there is no error)
  Error: "Error message" (Only have this key if there is an error)
}
```
