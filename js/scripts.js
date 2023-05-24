$(document).ready(function() {
    function newItem() {
        let li = $("<li></li>");
        let inputValue = $("#input").val();
        let text = $("<span></span>").text(inputValue)
        li.append(text);
        
        if (inputValue === '') {
            alert("This cannot be left empty");
        } else {
            let list = $("#list");
            list.append(li);
        }
    }

    function crossOut() {
        $(this).toggleClass("strike");
    }

    $(document).on("dblclick", "li", crossOut);

    function deleteListItem() {
        $(this).parent().addClass("delete");
    }

    let crossOutButton = $("<button></button>").text("X");
    
    crossOutButton.on("click", deleteListItem);

    let li = $("<li></li>").append(crossOutButton);

    $("#list").sortable();
});