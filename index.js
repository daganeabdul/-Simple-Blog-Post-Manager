const BASE_URL = "http://localhost:3000/posts";

function main() {
  displayPosts();
  addNewPostListener();
}

document.addEventListener("DOMContentLoaded", main);

function displayPosts() {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        li.addEventListener("click", () => handlePostClick(post.id));
        postsContainer.appendChild(li);
      });

      if (posts.length > 0) {
        handlePostClick(posts[0].id); 
      }
    });
}

function handlePostClick(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((post) => {
      document.getElementById("post-title").textContent = post.title;
      document.getElementById("post-content").textContent = post.content;
      document.getElementById("post-author").textContent = `By: ${post.author}`;

      document.getElementById("edit-button").classList.remove("hidden");
      document.getElementById("delete-button").classList.remove("hidden");

      document.getElementById("edit-button").onclick = () => showEditForm(post);
      document.getElementById("delete-button").onclick = () => deletePost(post.id);
    });
}

function addNewPostListener() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPost = {
      title: document.getElementById("new-title").value,
      content: document.getElementById("new-content").value,
      author: document.getElementById("new-author").value,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        form.reset();
        displayPosts();
      });
  });
}

function showEditForm(post) {
  const editForm = document.getElementById("edit-post-form");
  editForm.classList.remove("hidden");
  document.getElementById("edit-title").value = post.title;
  document.getElementById("edit-content").value = post.content;

  editForm.onsubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      title: document.getElementById("edit-title").value,
      content: document.getElementById("edit-content").value,
    };

    fetch(`${BASE_URL}/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then(() => {
        editForm.classList.add("hidden");
        displayPosts();
      });
  };

  document.getElementById("cancel-edit").onclick = () => {
    editForm.classList.add("hidden");
  };
}

function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(() => {
    document.getElementById("post-title").textContent = "Select a post";
    document.getElementById("post-content").textContent = "";
    document.getElementById("post-author").textContent = "";
    displayPosts();
  });
}
