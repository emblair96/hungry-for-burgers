$("#new-burger-form").on("submit", function(event) {
    event.preventDefault();
    
    var newBurger = {
        input: $("#burger-type").val().trim(),
        displayed: 1 
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            location.reload();
        }
    );

});

$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newDevouredState = {
        devoured: 0
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function() {
            console.log("burger devoured");
            location.reload();
        }
    );
});

