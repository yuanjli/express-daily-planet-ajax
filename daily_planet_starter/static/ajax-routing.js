// The front end JavaScript;

$(document).ready(function(){
	// Get the detele button to work on the ajax;
	$("#delete-btn").on("click", function(e){
		e.preventDefault();

		var url = $(this).attr("href");

		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			window.location = "/articles";
		}).fail(function(err){
			console.log("Error:", err);
		});
	});	

	// Get the edit button to work on the ajax;
	$("#edit-form").on("submit", function(e){
		e.preventDefault();

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
		});
	});
});
