
 Blog Post Manager

A simple CRUD (Create, Read, Update, Delete) blog management web application built using  JavaScript,  HTML, and CSS. This app allows users to create, edit, and delete blog posts, and dynamically updates the UI by interacting with a  JSON Server API.

By Abdirahman Dagane

Description

This Blog Post Manager demonstrates how to:

- Use  fetch()  to communicate with an API
- Dynamically manipulate the DOM
- Implement full CRUD operations using a local JSON Server
- Create a user-friendly interface for managing posts


SCREENSHOT


![image alt](https://github.com/daganeabdul/-Simple-Blog-Post-Manager/blob/main/unnamed%20(1).png?raw=true)




Features


Core Functionality


- View all blog post titles on page load (sidebar)
- Click a post title to view full details (title, content, author)
- Add new blog posts using a form
- Edit existing blog posts with a live edit form
- Delete posts with a single click
- Auto-load the first post’s details on initial page load
- Full API communication using `fetch()` and JSON Server



How to Use

Requirements

- A computer or device
- Internet access
- A modern browser
- JSON Server installed globally




Local Setup

Create your project folder:

   mkdir blog-post-manager
   cd blog-post-manager

Create the required files:

 index.html
 style.css
 index.js
 db.json

 

Install JSON Server globally (if not installed):

     npm install -g json-server

Run the JSON Server:

     json-server --watch db.json
 The server will run at: http://localhost:3000


Start the frontend:


Use Live Server in your code editor


 or


Open index.html manually in your browser



 File Structure

 
blog-post-manager/

   index.html
   style.css
   index.js
   db.json


 How It Works

 
 main()
 
Called once the DOM is fully loaded


Triggers:


displayPosts() to render the sidebar


addNewPostListener() to activate the "Add New Post" form



 displayPosts()
Fetches all posts from the JSON Server


Populates sidebar with clickable post titles


Auto-loads the first post into the main view



 handlePostClick(id)
Fetches a single post by its ID


Displays title, content, and author


Adds “Edit” and “Delete” button functionality



 addNewPostListener()
Listens for form submission on #new-post-form


Gathers form input and sends a POST request


Clears the form and refreshes the post list



 showEditForm(post)
Displays an editable form with current post data


On submit, sends a PATCH request to update the post


Updates the DOM and hides the form



 deletePost(id)
Sends a DELETE request to remove the post


Clears the post detail section


Refreshes the post list



 Sample db.json Data
{
  "posts": [
    {
      "id": 1,
      "title": "Hello World",
      "content": "Welcome to the blog!",
      "author": "Jane Doe"
    },
    {
      "id": 2,
      "title": "Another Day",
      "content": "Today I learned JSON Server.",
      "author": "John Smith"
    }
  ]
}





 License
MIT License
Copyright © 2025 Abdirahman Dagane







 





