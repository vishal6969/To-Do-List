
var x=document.querySelector(".divi");
var y=document.querySelector(".p");
var c=document.querySelector(".clr");
let toDoItems=[];
function Handler(item){
      const all=document.querySelectorAll(".div");
    all.forEach(function(object){
        if(object.querySelector(".pp").textContent===item)
        {
    object.querySelector(".e").addEventListener("click",function(){
        y.value=item;
        object.remove();
    });
    object.querySelector(".c").addEventListener("click",function(){
       object.querySelector(".pp").innerHTML+="[COMPLETED]";
       function complete(ite){
            if(ite===item)
           return ite+"[COMPLETED]";
           else
           return ite;
       }
       toDoItems=toDoItems.map(complete);
        setLocalStorage(toDoItems);
        });
     object.querySelector(".d").addEventListener("click",function(){
         object.remove();
         toDoItems=toDoItems.filter(function(inp){
            return inp!=item;
         });
           setLocalStorage(toDoItems);
         });
        }
        });
}
function createList(toDoItems){
    x.innerHTML="";
    toDoItems.forEach(function(item){
    if(item!="")
    {
    x.insertAdjacentHTML("beforeend",`<div class="div">
    <p class="pp" style="display:inline;font-size:120%"><i>${item}</i></p>
    <button style="float:right" class="e">E</button>
    <button style="float:right" class="c">C</button>
    <button style="float:right" class="d">D</button>
    </div>`);
     Handler(item);
    }
    });
       y.value="";
    }
function getLocalStorage()
{
    const storage=localStorage.getItem('toDoItem');
    if(storage)
    {
        toDoItems=JSON.parse(storage);
        createList(toDoItems);
    }
}
function setLocalStorage(toDoItems){
    localStorage.setItem('toDoItem',JSON.stringify(toDoItems));
}
getLocalStorage();
document.querySelector(".btn").addEventListener("click",function()
{
    toDoItems.push(y.value);
    if(y.value)
    {
    setLocalStorage(toDoItems);
    createList(toDoItems);
    }
});
c.addEventListener("click",function(){
    x.innerHTML="";
    localStorage.clear();
    toDoItems=[];
});