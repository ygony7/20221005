const toDoInput = $("#toDoForm #toDoInput");
const toDoButton = toDoInput.next();
const toDoUl = $("#toDoUl");
const completeNum = $("#completeNum");

toDoButton.on("click", addTodo);

function addTodo(e) {
    e.preventDefault();
    const li = $("<li>");
    let checkbox = $("<input>").attr("type","checkbox");
    const textNode = $("<span>").html(toDoInput.val());
    const addTime = $("<span>").html(" ("+getTime()+")");
    const button = $("<button>");
    
    li.append(checkbox).append(textNode).append(addTime).append(button);
    toDoUl.append(li).show("slow");

    toDoInput.val("");
    button.html("X");

    number();
    checkbox.on("click", todoCheck);
    button.on("click", todoDelete);
}

function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked) {
        li.style.color = "lightgray";
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
    } else {
        li.style.color = "black";
        li.style.textDecoration = "";
    }  
    number();
};

function todoDelete(e) {
    const li = e.target.parentNode;
    li.remove();
    number();
};

function number() {
    const allnum = $("input:checkbox").length;
    const num = $("input:checkbox:checked").length;  
    $("#completeNum").html("All : "+allnum+" | Completed : "+num+" | left : "+(allnum-num));
}