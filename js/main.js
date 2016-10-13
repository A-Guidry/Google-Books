
function searchBooks() {
	var search = document.getElementById("search").value
	// .innerHTML clears results were displayed
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		// gets data from Google API + the user search
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",
		// tells the system to get data
		type:"GET",
		// success call back function 
		success:function(data) {
			var results = document.getElementById("results")
			var image = document.createElement("IMG")
			var bookItem = document.getElementById("bookItem")
			var buyBtn = document.createElement("A")
			buyBtn.setAttribute = ('target', '_blank')
			buyBtn.innerText = "Buy Now"
			// search through all of the data items from the API list
			for (var i = 0; i < data.items.length; i++) {
			// using += adds every instence. adds result data to the screen
			results.innerHTML += "<H4>" + "Title" + "</H4>" + "<H6>" + data.items[i].volumeInfo.title + "</H6>"
			results.innerHTML += "<H4>" + "Author(s)" + "</H4>" + "<H6>" + data.items[i].volumeInfo.authors + "</H6>"
			results.innerHTML += "<H4>" + "Published" + "</H4>" + "<H6>" + data.items[i].volumeInfo.publishedDate + "</H6>"
			// links the data to these variables for each book
			buyBtn.href = data.items[i].volumeInfo.infoLink
			image.src = data.items[i].volumeInfo.imageLinks.thumbnail
			// adds classes to elements
			buyBtn.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button"
			image.className = "img-responsive"
			results.className = "mdl-cell mdl-cell--3-offset-desktop mdl-cell--6-col mdl-cell--8-col-tablet"
			// adds the image and buy button to the bottom of each item
			results.appendChild(image)
			results.appendChild(buyBtn)
			// adds everything from results to div bookItem
			bookItem.appendChild(results)
		}
			// displays all of the data displayed in the console
			console.log(data)
		}, //ends success

	}) //end ajax

} //end searchBooks

// fires function when search button is clicked
document.getElementById("button").addEventListener("click", searchBooks)

