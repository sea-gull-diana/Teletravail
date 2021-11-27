$(document).ready(function() {
    // When the "+" button is clicked...
    $("#add").click(function() {
        // Append a new empty row with two buttons in the end
        $("tbody").append(`<tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="btn btn-warning confirm">Confirmer</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-outline-danger delete" onclick="deleteRow(this)">Supprimer</button>
                                </td>
                                </tr>`);
        // Prepare the newly-created row to get user input
        editRow($("tbody:last-child .confirm"));
        // Increase the questions number
        $("#score").html(parseInt($("#score").html()) + 1);
    });

    $(".small-title").click(function() {
        if ($(this).next().css("display") == "none") {
            $(this).siblings().css("display", "block");
        }
        else {
            $(this).siblings().css("display", "none");
        }
    });
});

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
    // Reprlace input fields in cells with the text value of these fields
    for(var i = 0; i < 2; i++) {
        cell = $(row).children(":nth-child(" + (i + 1) + ")");
        text = cell.children(":first-child").val();
        $(cell).html(text);
    }

    // Replace "confirm" button with a "Modify" button
    $(row).children(":nth-child(3)").html(`<button type="button" class="btn btn-outline-warning edit" onclick="editRow(this)">Modifier</button>`)
}

function editRow(champ) {
    var q = $(champ).parent().parent().children(":first-child");
    var r = $(champ).parent().parent().children(":nth-child(2)");
    var m = $(champ).parent().parent().children(":nth-child(3)");
    // Replace the text in the first two cells with input fields
    q.html(`
            <input type="text" value="` +
            q.text().trim() +`"
            />
            `);
    r.html(`
            <input type="text" value="` +
            r.text().trim() +`"
            />
            `);
    // Replaces "modify" button with "confirm" button
    m.html(`
            <button class="btn btn-warning confirm"  onclick="confirmEdit(this)">Confirmer</button>
            `);
}

// Removes the row
function deleteRow(champ) {
    $(champ).parent().parent().remove();
    $("#score").html(parseInt($("#score").html()) - 1);
}