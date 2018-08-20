<<<<<<< HEAD
// The front end JavaScript;

$(document).ready(function(){
	// Get the detele button to work on the ajax;
	$("#delete-btn").on("click", function(e){
		e.preventDefault();

		var url = $(this).attr("href");
=======
// This is the front end JavaScript;

$(document).ready(function(){

	$("#delete-btn").on("click", function(e){
		e.preventDefault(); // stops the default click event response, and prevent the page from refreshing.

		var url = $(this).attr("href"); // Get href from delete link button.

		//console.log("Delete btn clicked!");
>>>>>>> d82dbe1464dbc3402ea971eb751c3c80020c93c0

		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			window.location = "/articles";
		}).fail(function(err){
			console.log("Error:", err);
<<<<<<< HEAD
		});
	});	

	// Get the edit button to work on the ajax;
	$("#edit-form").on("submit", function(e){
		e.preventDefault();
=======
		}); // End of AJAX DELETE 
	});


	$("#edit-form").on("submit", function(e){
		e.preventDefault(); // stops the submit default functionality;
>>>>>>> d82dbe1464dbc3402ea971eb751c3c80020c93c0

		var url = $(this).attr("action");
		var data = $(this).serialize();
		console.log(data);

		$.ajax({
			method: "PUT",
			url: url,
			data: data
		}).done(function(data){
			window.location = "/articles";
		}).fail(function(err){
			console.log("Error:", err);
<<<<<<< HEAD
		});
	});
});
=======
		}); // End AJAX PUT
	});
});











>>>>>>> d82dbe1464dbc3402ea971eb751c3c80020c93c0
