const addBtnRef = document.getElementById("addBookmarkBtn");
const bookmarksListRef = document.querySelector("#bookmarkList");
const inputRef = document.querySelector("#bookmarkInput");
let arrayOfBookmarks = [];

const STORAGE_KEY = "listOfBookmarks"

function createItems(array) {
    const items = array.map(item=>{
        return `<li>
  <a href="${item}" target="_blank">${item}</a>
  <button type="button" class="delete">X</button>
</li>`
    }).join("");
    bookmarksListRef.innerHTML = items;
}
addBtnRef.addEventListener("click",()=>{
    arrayOfBookmarks.push(inputRef.value)
    inputRef.value = "";
    createItems(arrayOfBookmarks)
    localStorage.setItem(STORAGE_KEY,JSON.stringify(arrayOfBookmarks)) 
})

bookmarksListRef.addEventListener("click",(e)=>{
        if (e.target.classList.contains("delete")) {
        const li = e.target.parentElement;
        const value = li.querySelector("a").textContent;
        arrayOfBookmarks = arrayOfBookmarks.filter(item => item !== value);
        li.remove();
        localStorage.setItem(STORAGE_KEY,JSON.stringify(arrayOfBookmarks))       
        }
    })












