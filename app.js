const lis = document.querySelectorAll('li')
lis.forEach(li => {
    li.addEventListener('click',()=>{
        li.classList.toggle('do')
        if(li.classList.contains("do")){
            li.style.backgroundColor = li.style.backgroundColor.slice(0,-1)+",0.5)"
        }
        else{
            li.style.backgroundColor = li.style.backgroundColor.slice(0,-6)+")"
        }
    })
    li.addEventListener('touch',()=>{
        li.classList.toggle('do')
    })
});
for(let i = 0; i < lis.length;i++){
    let red = 232 + (255 - 232) / 9 * (4 - i)
    let green = 70 + (255 - 70) / 9 * (4 - i)
    let blue = 119 + (255 - 119) / 9 * (4 - i)
    lis[i].style.backgroundColor = "rgb("+red.toString()+","+green.toString()+", "+blue.toString()+")"
}