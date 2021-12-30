$(document).ready(function() {
// 1. Adding questions and answers in the contact form
    // When the "+" button is clicked...
    $("#add").click(function() {
        // Append a new empty row with two buttons in the end
        $("tbody").append(`<tr>
            <td class="col-5"></td>
            <td class="col-5"></td>
            <td>
                <button class="btn btn-success confirm"><i class="bi-check-circle"></i></button>
            </td>
            <td>
                <button type="button" class="btn btn-outline-danger delete" onclick="deleteRow(this)"><i class="bi-trash"></i></button>
            </td>
            </tr>`);
        // Prepare the newly-created row to get user input
        editRow($("tbody:last-child .confirm"));
        // Increase the questions number
        $("#score").html(parseInt($("#score").html()) + 1);
    });

    // Should be replaced with a php variable in the future
    $(".small-title, .medium-title").append("<span><img src='Images/2x/outline_chevron_left_black_24dp.png'/></span>");
    // Expand text, change the arrow image and fixate the title's style on click
    $(".medium-title, .small-title").click(function() {
        if ($(this).next().css("display") == "none") {
            $(this).children().html("<img src='Images/2x/outline_expand_more_black_24dp.png'/>");
            $(this).siblings().css("display", "block");
            if ($("body").hasClass("dark-theme")) {
                $(this).css({"border": "solid rgb(204, 250, 240) 1px", "color":"rgb(204, 250, 240)", "background-color" : "transparent"});
            }
            else {
                $(this).css({"border": "solid rgb(3, 131, 103) 1px", "color":"rgb(3, 131, 103)", "background-color" : "white"});
            }
            $(this).children().css("filter", "invert(50%)");
        }
        else {
            $(this).siblings().css("display", "none");
            $(this).children().html("<img src='Images/2x/outline_chevron_left_black_24dp.png'/>");
            $(this).css({"border": "", "color":"", "background-color" : ""});
            $(this).children().css("filter", "");
        }
    });

    $(".reduire").click(function(){
        $(this).prevUntil("h3, h5").css("display","none");
        $(this).css("display","none");
        $(this).siblings("h3, h5").css({"border": "", "color":"", "background-color" : ""});
        $(this).siblings("h3, h5").children().html("<img src='Images/2x/outline_chevron_left_black_24dp.png'/>");
   });
});

// Check if the fields are filled correctly and transform input fields into ordinary text
function confirmEdit(champ) {
    var row = $(champ).parent().parent();
    var cell, text;
    
    // Check if any of the two fields is empty
    for(var i = 0; i < 2; i++) {
        cell = $(row).children(":nth-child(" + (i + 1) + ")");
        text = cell.children(":first-child").val();
        if (text.trim() == "" || text == null) {
            alert("Veillez remplir les deux champs !");
            return;
        }
    }
    // Replace input fields in cells with the text value of these fields
    for(var i = 0; i < 2; i++) {
        cell = $(row).children(":nth-child(" + (i + 1) + ")");
        text = cell.children(":first-child").val();
        $(cell).html(text);
    }

    // Replace "confirm" button with a "Modify" button
    $(row).children(":nth-child(3)").html(`<button type="button" class="btn btn-outline-warning edit" onclick="editRow(this)"><i class="bi-pen"></i></button>`)
}

function editRow(champ) {
    var q = $(champ).parent().parent().children(":first-child");
    var r = $(champ).parent().parent().children(":nth-child(2)");
    var m = $(champ).parent().parent().children(":nth-child(3)");
    // Replace the text in the first two cells with input fields
    q.html(`
            <input class="col-5" type="text" value="` +
            q.text().trim() +`"
            />
            `);
    r.html(`
            <input class="col-5" type="text" value="` +
            r.text().trim() +`"
            />
            `);
    // Replaces "modify" button with "confirm" button
    m.html(`
            <button class="btn btn-success confirm"  onclick="confirmEdit(this)"><i class="bi-check-circle"></i></button>
            `);
}

// Removes the row
function deleteRow(champ) {
    $(champ).parent().parent().remove();
    $("#score").html(parseInt($("#score").html()) - 1);
}