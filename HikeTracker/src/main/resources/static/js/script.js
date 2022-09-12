window.addEventListener('load', function() {
	console.log('script.js loaded')
	init();
});

function init() {
	loadAllRoutes();
	addRoute();
	document.newRouteForm.addRoute.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log('Adding new film');

		let route = {};
		route.date = newRouteForm.date.value;
		route.location = newRouteForm.location.value;
		route.distance = newRouteForm.distance.value;
		route.time = newRouteForm.time.value;
		route.pace = newRouteForm.pace.value;
		route.description = newRouteForm.description.value;

		addRoute(route);


	});




}

function loadAllRoutes() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/routes");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayAllRoutes(JSON.parse(xhr.responseText));
			}
			else {
				console.log("Error loading events: " + xhr.status);
			}
		}
	};

	xhr.send();
}



function displayAllRoutes(eventList) {


	let dataDiv = document.getElementById("eventList")
	dataDiv.textContent = '';

	let ol = document.createElement('ol');
	dataDiv.appendChild(ol);



	for (let route of eventList) {
		let li = document.createElement('li');
		li.textContent = route.date;
		ol.appendChild(li);

		li.addEventListener('click', function(evt) {
			evt.preventDefault();

			let dataDiv = document.getElementById('detail');
			dataDiv.textContent = '';

			let ul = document.createElement('ul');
			dataDiv.appendChild(ul)
			
			let li = document.createElement('li');
			li.textContent = 'Id: ' + route.id;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = 'Date: ' + route.date;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = 'Location: ' + route.location;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = 'Distance ' + route.distance + ' miles';
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "Time: " + route.time;
			ul.appendChild(li)

			li = document.createElement('li');
			li.textContent = "Pace: " + route.pace + " minutes/mile";
			ul.appendChild(li)

			li = document.createElement('li');
			li.textContent = "Description: " + route.description;
			ul.appendChild(li)

			

			let remove = document.createElement('button');
			remove.textContent = 'Delete';

			remove.addEventListener('click', function(e) {
				deleteHike(route);
			});
			
			dataDiv.appendChild(remove);
			
			let edit = document.createElement('button');
			edit.textContent = 'Edit';

			edit.addEventListener('click', function(e) {
				updateRoute(route);
			});
			
			dataDiv.appendChild(edit);
		});





	}





}




function displayRoute(route) {
	let dataDiv = document.getElementById('routeData');
	dataDiv.textContent = '';

	let date = document.createElement('h3');
	date.textContent = "Hike was Succesfully Logged";
	dataDiv.appendChild(date);

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul)

	let li = document.createElement('li');
	li.textContent = 'Date: ' + route.date;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = 'Location: ' + route.location;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = 'Distance ' + route.distance;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Time: " + route.time;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Pace: " + route.pace + " minutes/mile";
	ul.appendChild(li)

	let desc = document.createElement('blockquote');
	desc.textContent = "Description: " + route.description;
	dataDiv.appendChild(desc);
}


function addRoute(route) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/routes');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('Hike created')
				displayRoute(JSON.parse(xhr.responseText));
			}
			else if (xhr.status === 400) {
				console.log('Invalid data');
			}
			else {
				console.log('Error creating Hike: ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let routeJson = JSON.stringify(route);
	xhr.send(routeJson);
}





function updateRoute(route) {

	let tbody = document.getElementById('routeTable')
	tbody.textContent = '';

	let updateForm = document.createElement('form');
	updateForm.setAttribute('name', 'updateForm');
	let div = document.getElementById('routeTableDiv');

	let routeDate = document.createElement('label');
	routeDate.textContent = "Date: "
	let dateInput = document.createElement('input');
	dateInput.setAttribute('name', 'date');
	dateInput.setAttribute('type', 'date')
	dateInput.setAttribute('value', route.date);
	updateForm.appendChild(routeDate);
	updateForm.appendChild(dateInput);
	updateForm.appendChild(document.createElement('br'));

	let routeLocation = document.createElement('label');
	routeLocation.textContent = "Location: "
	let locationInput = document.createElement('input');
	locationInput.setAttribute('name', 'location');
	dateInput.setAttribute('value', route.location);
	updateForm.appendChild(routeLocation);
	updateForm.appendChild(locationInput);
	updateForm.appendChild(document.createElement('br'));

	let routeDistance = document.createElement('label');
	routeDistance.textContent = "Distance: "
	let distanceInput = document.createElement('input');
	distanceInput.setAttribute('name', 'distance');
	distanceInput.setAttribute('value', route.distance);
	distanceInput.setAttribute('type', 'number');
	updateForm.appendChild(routeDistance);
	updateForm.appendChild(distanceInput);
	updateForm.appendChild(document.createElement('br'));

	let routeTime = document.createElement('label');
	routeTime.textContent = "Time: "
	let timeInput = document.createElement('input');
	timeInput.setAttribute('name', 'time');
	timeInput.setAttribute('value', route.time);
	timeInput.setAttribute('type', 'time');
	updateForm.appendChild(routeTime);
	updateForm.appendChild(timeInput);
	updateForm.appendChild(document.createElement('br'));

	let routePace = document.createElement('label');
	routePace.textContent = "Pace: "
	let paceInput = document.createElement('input');
	paceInput.setAttribute('name', 'pace');
	paceInput.setAttribute('value', route.pace);
	paceInput.setAttribute('type', 'number');
	updateForm.appendChild(routePace);
	updateForm.appendChild(paceInput);
	updateForm.appendChild(document.createElement('br'));

	let routeDescription = document.createElement('label');
	routeDescription.textContent = "Description: "
	let descriptionInput = document.createElement('input');
	descriptionInput.setAttribute('name', 'route');
	descriptionInput.setAttribute('value', route.description);
	descriptionInput.setAttribute('type', 'textarea');
	updateForm.appendChild(routeDescription);
	updateForm.appendChild(descriptionInput);
	updateForm.appendChild(document.createElement('br'));

	let button = document.createElement('button');
	button.textContent = "Update Hike";
	button.setAttribute('id', 'updateRoute');
	button.addEventListener('click', function(e) {
		e.preventDefault();


		let updateRoute = {

			date: updateForm.date.value,
			location: updateForm.location.value,
			distance: updateForm.distance.value,
			time: updateForm.time.value,
			pace: updateForm.pace.value,
			description: updateForm.description.value
		};
		sendUpdate(updateRoute);
		updateForm.textContent = '';
	});
	updateForm.appendChild(button);
	div.appendChild(updateForm);
}

function sendUpdate(route) {
	let xhr = new XMLHttpRequest();
	xhr.open('PATCH', `api/routes/${route.id}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 201) {
				let route = JSON.parse(xhr.responseText);
				console.log('Updated Hike');
				
			} else {
				console.log('Error updating: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(route));
}

function deleteHike(route) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/routes/${route.id}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				console.log('Hike was deleted');
				deleteMessage();
			} else {
				console.log('Error deleting hike: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(route));
}

function deleteMessage(){
	window.alert('Hike was successfuly deleted. Refresh the page');
}
