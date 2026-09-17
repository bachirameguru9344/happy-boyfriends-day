const pages=[...document.querySelectorAll(".page")],bar=document.querySelector(".progress span"),count=document.querySelector(".count");
let current=0;
function show(n){current=(n+pages.length)%pages.length;pages.forEach((p,i)=>p.classList.toggle("active",i===current));bar.style.width=((current+1)/pages.length*100)+"%";count.textContent=String(current+1).padStart(2,"0")+" / "+String(pages.length).padStart(2,"0");if(audio.src&&audio.paused)audio.play().catch(()=>{})}
document.querySelectorAll(".next").forEach(b=>b.onclick=()=>show(current+1));
document.querySelector(".restart").onclick=()=>show(0);

document.getElementById("photos").onchange=e=>{[...e.target.files].slice(0,4).forEach((f,i)=>{let r=new FileReader();r.onload=x=>document.getElementById("photo"+(i+1)).src=x.target.result;r.readAsDataURL(f)})};
document.getElementById("apply").onclick=()=>{let v=document.getElementById("messageInput").value.trim();if(v)document.getElementById("message").textContent=v;show(0)};

const audio=document.getElementById("audio"),musicBtn=document.getElementById("musicBtn");
document.getElementById("song").onchange=e=>{let f=e.target.files[0];if(!f)return;audio.src=URL.createObjectURL(f);audio.play().then(()=>musicBtn.innerHTML="♫ <span>playing</span>").catch(()=>{})};
musicBtn.onclick=()=>{if(!audio.src){document.getElementById("song").click();return}if(audio.paused){audio.play();musicBtn.innerHTML="♫ <span>playing</span>"}else{audio.pause();musicBtn.innerHTML="♫ <span>paused</span>"}};

function makeHeart(){let h=document.createElement("span");h.className="heart-particle";h.textContent=["♡","♥","❤","✦"][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+"vw";h.style.fontSize=(12+Math.random()*22)+"px";h.style.animationDuration=(6+Math.random()*8)+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),16000)}
setInterval(makeHeart,600);for(let i=0;i<15;i++)setTimeout(makeHeart,i*160);
document.onkeydown=e=>{if(e.key==="ArrowRight")show(current+1);if(e.key==="ArrowLeft")show(current-1)};
show(0);
