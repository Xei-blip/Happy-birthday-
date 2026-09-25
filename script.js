const gift = document.getElementById("giftBox");
const message = document.getElementById("birthdayMessage");
const hearts = document.querySelector(".hearts");

function floatingHeart(){
  const h=document.createElement("span");
  h.className="float-heart";
  h.textContent=["♡","♥","❤","✦"][Math.floor(Math.random()*4)];
  h.style.left=(Math.random()*100)+"vw";
  h.style.fontSize=(14+Math.random()*18)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(floatingHeart,650);

function celebrate(){
  const symbols=["♥","♡","✦","❤"];
  for(let i=0;i<28;i++){
    const c=document.createElement("span");
    c.className="confetti";
    c.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    c.style.left="50vw";
    c.style.top="42vh";
    c.style.color=["#ef7198","#f5a0ba","#e8c45d","#c98aa5"][Math.floor(Math.random()*4)];
    c.style.setProperty("--x",((Math.random()-.5)*75)+"vw");
    c.style.setProperty("--y",((Math.random()-.75)*70)+"vh");
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),1600);
  }
}

gift.addEventListener("click",()=>{
  if(gift.classList.contains("open")) return;
  gift.classList.add("open");
  setTimeout(()=>{
    message.classList.add("show");
    message.setAttribute("aria-hidden","false");
    message.scrollIntoView({behavior:"smooth",block:"start"});
  },500);
  celebrate();
});
