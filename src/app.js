const addBtnRef = document.getElementById("addBookmarkBtn");
const bookmarksListRef = document.querySelector("#bookmarkList");
const inputRef = document.querySelector("#bookmarkInput");
let arrayOfBookmarks = [];

function createItems(array) {
    const items = array.map(item=>{
        return `<li>
  <a href="${item}" target="_blank">${item}</a>
  <button type="button" class="delete">X</button>
</li>`
    }).join("");
    bookmarksListRef.innerHTML = items;
    bookmarksListRef.addEventListener("click",(e)=>{
        if (e.target.classList.contains("delete")) {
        const li = e.target.parentElement;
        const value = li.querySelector("a").textContent;
        arrayOfBookmarks = arrayOfBookmarks.filter(item => item !== value);
        li.remove();         
        }
    })
}
addBtnRef.addEventListener("click",()=>{
    arrayOfBookmarks.push(inputRef.value)
    inputRef.value = "";
    createItems(arrayOfBookmarks)
})

// 2











