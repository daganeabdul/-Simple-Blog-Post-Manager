
 
 Blog Post Manager
 
A simple CRUD (Create, Read, Update, Delete) web application for managing blog posts. Users can view a list of blog post titles, see full post details, add new posts, edit existing posts, and delete them. The app uses vanilla JavaScript to manipulate the DOM and interact with a local JSON server API.

 Features
 Core Functionality
 
View all blog post titles on page load inside the sidebar.


Click a post title to view its full details (title, content, author) in the main section.


Add a new blog post using the form at the bottom of the page.


Edit a post by clicking the “Edit” button, updating its title and content.


Delete a post with the “Delete” button in the post detail view.


Auto-load first post details when the page first loads.


Full DOM manipulation and API communication handled using fetch().



 Getting Started
1. Clone or set up your project folder
mkdir blog-post-manager
cd blog-post-manager

2. Create the required files
index.html
style.css
index.js
db.json

3. Install and run JSON Server
Install JSON Server globally if not already installed:
npm install -g json-server

Then run:
json-server --watch db.json

The server will run 

4. Start your frontend
Use live-server or open index.html in your browser.
live-server


File Structure
.
 - index.html
 - index.js
 -style.css
 -db.json





 How It Works
1. main() function
Runs after the DOM is fully loaded. It calls:
displayPosts() to render the sidebar


addNewPostListener() to enable the "Add New Post" form


2. displayPosts()
Fetches all posts from the server


Populates the sidebar with clickable post titles


Automatically loads the first post’s details into the main view


3. handlePostClick(id)
Fetches a single post by ID


Displays its title, content, and author


Shows “Edit” and “Delete” buttons


Binds click events for edit and delete


4. addNewPostListener()
Listens for form submission on #new-post-form


Gathers form input and sends a POST request


Clears form and refreshes the post list


5. showEditForm(post)
Displays an edit form with the current post data


On submit, sends a PATCH request to update the post


Updates the DOM and hides the form


6. deletePost(id)
Sends a DELETE request to remove a post


Clears post detail section


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



 Author
Abdirahman Dagane




