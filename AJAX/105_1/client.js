let form = document.querySelector('form');
let div = document.querySelector('p');

form.addEventListener('submit', function(event) {
	let promise = fetch('/handler/', {
		method: 'POST',
		body: new FormData(this),
	}).then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
	
	event.preventDefault();
});