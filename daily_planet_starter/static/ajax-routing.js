// This is the front end JavaScript;

$(document).ready(function(){

	$("#delete-btn").on("click", function(e){
		e.preventDefault(); // stops the default click event response, and prevent the page from refreshing.

		var url = $(this).attr("href"); // Get href from delete link button.

		//console.log("Delete btn clicked!");

		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			window.location = "/articles";
		}).fail(function(err){
			console.log("Error:", err);
		}); // End of AJAX DELETE 
	});


	$("#edit-form").on("submit", function(e){
		e.preventDefault(); // stops the submit default functionality;

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
		}); // End AJAX PUT
	});
});











