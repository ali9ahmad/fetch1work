const elPostList = document.querySelector(".post-list");
const API_PATH = "https://jsonplaceholder.typicode.com/posts?_limit=5";
let loading = true;
const newPostFragment = document.createDocumentFragment();

// CREATING RENDER
function renderPost(data) {
    data.forEach((item) => {
        const newLi = document.createElement("li");
        const newTitle = document.createElement("h3");
        const newText = document.createElement("p");

        newTitle.textContent = item.title;
        newText.textContent = item.body;

        newLi.appendChild(newTitle);
        newLi.appendChild(newText);

        newPostFragment.appendChild(newLi);
    });

    elPostList.appendChild(newPostFragment);
}

fetch (API_PATH)
.then((res) => res.json())
.then((data) => {
    // console.log(date);
    renderPost(data);
})
.catch((error) => console.log(error))
.finally (() => {
    console.log("fetch done");
    loading = false;
});
