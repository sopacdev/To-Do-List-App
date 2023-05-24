
function newItem(){
    
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("This cannot be left empty");
    } else {
       $("#list").append(li);
    }

    function crossOut() {
        li.toggleClass(".strike");
    }

    li.on("dblclick", crossOut);

    let crossOutButton = $("<button></button>").text("X");
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }

    $("#list").sortable();
};