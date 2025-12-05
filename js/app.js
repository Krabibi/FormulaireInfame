const b = document.querySelector('button.button--yes')
b.addEventListener("mouseover", (event) =>{
    const i = Math.floor(Math.random()+500)+1;
    const j = Math.floor(Math.random()+500)+1;


    event.target.style.left = `${i}px`;
    event.target.style.top = `${j}px`;

})






let position;
function moveHover(){
    const i = Math.floor(Math.random()+500)+1;
    const j = Math.floor(Math.random()+500)+1;

    b.style.left = i +"px";
    b.style.top = j + "px";

}

