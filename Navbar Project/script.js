const toggleBtn = document.querySelector(".toggleBtn");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", ()=>{

    if(links.classList.contains("active")){
        links.classList.remove("active");
    } else{
        links.classList.add("active");
    }
});
