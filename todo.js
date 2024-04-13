let todoList=[{item:'buy milk', dueDate:'10/10/2023'},{item:'buy bread', dueDate:'10/10/2023'},];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
todoList.push({item:todoItem, dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();

}
function displayItems(){

    let containerElemnt=document.querySelector('.todo-container'); 
    
   let newHtml='';
    
    
    for(let i=0;i<todoList.length;i++){
        let{item,dueDate}=todoList[i];
         newHtml += `
    <div>
    <span>${todoList[i]}</span>
<button class="btn-delete" onclick="todoList.splice(${i},1);
displayItems();">Delete</button>
    </div>
    `;


   
    }
    containerElemnt.innerHTML=newHtml;
}