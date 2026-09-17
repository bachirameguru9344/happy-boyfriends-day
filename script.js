const pages=[...document.querySelectorAll(".page")],
bar=document.querySelector(".progress span"),
count=document.querySelector(".count");
let current=0;

function show(n){
  current=(n+pages.length)%pages.length;
  pages.forEach((p,i)=>p.classList.toggle("active",i===current));
  bar.style.width=((current+1)/pages.length*100)+"%";
  count.textContent=String(current+1).padStart(2,"0")+" / "+String(pages.length).padStart(2,"0");
}

document.querySelectorAll(".next").forEach(b=>b.onclick=()=>show(current+1));
document.querySelector(".restart").onclick=()=>show(0);

function makeHeart(){
  let h=document.createElement("span");
  h.className="heart-particle";
  h.textContent=["♡","♥","❤","✦"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*22)+"px";
  h.style.animationDuration=(6+Math.random()*8)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),16000);
}
setInterval(makeHeart,600);
for(let i=0;i<15;i++)setTimeout(makeHeart,i*160);

document.onkeydown=e=>{
  if(e.key==="ArrowRight")show(current+1);
  if(e.key==="ArrowLeft")show(current-1);
};
show(0);
