document.body.style.margin='0';
document.body.style.padding='0';
document.body.style.height='100vh';
document.body.style.backgroundColor='white';


const container = document.getElementsByClassName("container")[0];
container.style.display='grid';
container.style.gridTemplateColumns='1fr 1fr';
container.style.gridTemplateRows='1fr 1fr';
container.style.height='100vh';


const box=document.getElementsByClassName("box");
const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");
const box4=document.getElementById("box4");


for (let i=0;i<box.length;i++){
box[i].style.display='flex';
box[i].style.justifyContent='center';
box[i].style.alignItems='center';
box[i].style.color='transparent';
box[i].style.borderRadius='10px';
box[i].style.fontSize='34px';
}


box1.addEventListener('mouseenter',()=>{
    box1.style.backgroundColor='#059bffff';
    box1.style.color='black';
    box1.style.cursor='pointer';
    box1.textContent="Box 1";
    box1.style.boxShadow='10px 10px 20px #059bffff';
    box1.style.transition='all 0.3s ease-in-out' 
    box1.style.zIndex = '10';
});
box1.addEventListener('mouseleave',()=>{
    box1.style.backgroundColor='white';
    box1.style.color='transparent';
    box1.style.boxShadow='none';
    box1.style.zIndex = '0';
    
})


box2.addEventListener('mouseenter',()=>{
    box2.style.backgroundColor='#ff3305ff';
    box2.style.color='black';
    box2.style.cursor='pointer';
    box2.textContent="Box 2";
    box2.style.boxShadow='-10px 10px 20px #ff3305ff';
    box2.style.transition='all 0.3s ease-in-out'
    box2.style.zIndex = '10';
});
box2.addEventListener('mouseleave',()=>{
    box2.style.backgroundColor='white';
    box2.style.color='transparent';
    box2.style.boxShadow='none';
    box2.style.zIndex = '0';
    
})

box3.addEventListener('mouseenter',()=>{
    box3.style.backgroundColor='#05ff16ff';
    box3.style.color='black';
    box3.style.cursor='pointer';
    box3.textContent="Box 3";
    box3.style.boxShadow='10px -10px 20px #05ff16ff';
    box3.style.transition='all 0.3s ease-in-out'
    box3.style.zIndex = '10';
});
box3.addEventListener('mouseleave',()=>{
    box3.style.backgroundColor='white';
    box3.style.color='transparent';
    box3.style.boxShadow='none';
    box3.style.zIndex = '0';
    
})

box4.addEventListener('mouseenter',()=>{
    box4.style.backgroundColor='#d5ff04ff';
    box4.style.color='black';
    box4.style.cursor='pointer';
    box4.textContent="Box 4";
    box4.style.boxShadow='-10px -10px 20px #d5ff04ff';
    box4.style.transition='all 0.3s ease-in-out'
    box4.style.zIndex = '10';
});
box4.addEventListener('mouseleave',()=>{
    box4.style.backgroundColor='white';
    box4.style.color='transparent';
    box4.style.boxShadow='none';
    box4.style.zIndex = '0';

})
