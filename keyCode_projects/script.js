const container = document.getElementById("keyContainer");

container.innerHTML = generateHTML("-","-", "-")

window.addEventListener("keydown" , (e)=>{

    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
           //e.key.charCodeAt(0): This returns the Unicode character code of the key (its key code). It's a numeric representation of the character.
});

function generateHTML(key, code,keyCode){

    return`
    <div class="key-container">
       <h4>Key</h4>
       <div class="key-content">${key === " " ? "Space" : key}
        </div>
     </div>
      
    <div class="key-container">
       <h4>Code</h4>
       <div class="key-content">${code}
        </div>
     </div>
    
    <div class="key-container">
       <h4>Key Code</h4>
       <div class="key-content">${keyCode}
        </div>
     </div>
    `;
}


