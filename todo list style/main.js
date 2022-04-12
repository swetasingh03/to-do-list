let addtodobutton=document.getElementById('todobutton')
let addinputfield=document.getElementById('inputfield')
let addtodolist=document.getElementById('list')

addtodobutton.addEventListener('click',function(){
    if(addinputfield.value===""){
       alert("plz enter your todo")
    }else{
    var listitems=document.createElement('h3')
    listitems.classList.add('paragraph-styling')
    listitems.innerText=addinputfield.value
   addtodolist.appendChild(listitems)
   listitems.addEventListener('click',function(){
       listitems.style.textDecoration="line-through"
   })}
   listitems.addEventListener('dblclick',function(){
       addtodolist.removeChild(listitems)
   })
})

