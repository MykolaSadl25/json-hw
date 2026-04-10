let e=document.getElementById("addBookmarkBtn"),t=document.querySelector("#bookmarkList"),n=document.querySelector("#bookmarkInput"),a=[];e.addEventListener("click",()=>{a.push(n.value),n.value="",t.innerHTML=a.map(e=>`<li>
  <a href="${e}" target="_blank">${e}</a>
  <button type="button" class="delete">X</button>
</li>`).join(""),t.addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.parentElement,n=t.querySelector("a").textContent;a=a.filter(e=>e!==n),t.remove()}})});
//# sourceMappingURL=json-hw.92fada20.js.map
