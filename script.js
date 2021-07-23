
var x=document.querySelector(".divi");
var y=document.querySelector(".p");
var c=document.querySelector(".clr");
let toDoItems=[];
function Handler(item){
      const all=document.querySelectorAll(".div");
    all.forEach(function(object){
        var text=object.querySelector(".pp").textContent;
        if(text===item)
        {
    object.querySelector(".e").addEventListener("click",function(){
        y.value=item;
        toDoItems=toDoItems.filter(function(inp){
            return inp!=item;
         });
        object.remove();
        setLocalStorage(toDoItems);
    });
    object.querySelector(".c").addEventListener("click",function(){
       object.querySelector(".pp").innerHTML+="[COMPLETED]";
       function complete(ite){
            if(ite===item){
                item+="[COMPLETED]";
                return item;
            }
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
        var temp=item;
        var b=item.substring(0,8)==="https://";
        if(b)
        temp='<a href="'+item+'" target="_blank">'+item+'</a>';
    x.insertAdjacentHTML("beforeend",`<div class="div">
    <p class="pp" style="display:inline;font-size:120%"><i>${temp}</i></p>
    <button style="float:right" class="e">E</button>
    <button ${b?"disabled":" "} style="float:right" class="c">C</button>
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
    if(y.value && toDoItems.indexOf(y.value)==-1)
    {
    toDoItems.push(y.value);
    setLocalStorage(toDoItems);
    createList(toDoItems);
    }
});
c.addEventListener("click",function(){
    x.innerHTML="";
    localStorage.clear();
    toDoItems=[];
});