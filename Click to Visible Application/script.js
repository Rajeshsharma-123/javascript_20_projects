const r = document.getElementById("r")
const a = document.getElementById("a")
const j = document.getElementById("j")
const e = document.getElementById("e")
const s = document.getElementById("s")
const h = document.getElementById("h")
const rajesh = document.getElementById("complete")

r.addEventListener("click",()=>{
    r.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click",()=>{
    a.style.display = "none";
    j.style.display = "block";
});

j.addEventListener("click",()=>{
    j.style.display = "none";
    e.style.display = "block";
});

e.addEventListener("click",()=>{
    e.style.display = "none";
    s.style.display = "block";
});

s.addEventListener("click",()=>{
    s.style.display = "none";
    h.style.display = "block";
});

h.addEventListener("click",()=>{
    h.style.display = "none";
    rajesh.style.display = "block";
});

rajesh.addEventListener("click",()=>{
    rajesh.style.display = "none";
    r.style.display = "block";
});

