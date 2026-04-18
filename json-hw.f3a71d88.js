let e=document.getElementById("addBookmarkBtn"),t=document.querySelector("#bookmarkList"),a=document.querySelector("#bookmarkInput"),o="listOfBookmarks",n=[];function l(e){t.innerHTML=e.map(e=>`<li>
  <a href="${e}" target="_blank">${e}</a>
  <button type="button" class="delete">X</button>
</li>`).join("")}l(n=JSON.parse(localStorage.getItem(o))||[]),e.addEventListener("click",()=>{n.push(a.value),a.value="",l(n),localStorage.setItem(o,JSON.stringify(n))}),t.addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.parentElement,a=t.querySelector("a").textContent;n=n.filter(e=>e!==a),t.remove(),localStorage.setItem(o,JSON.stringify(n))}});
//# sourceMappingURL=json-hw.f3a71d88.js.map
