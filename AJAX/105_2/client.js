let form = document.querySelector('form');
let div = document.querySelector('p');

let obj = {
	a: 1,
	b: 2,
	c: 3
}

formData = new FormData();

for (let i in obj) {
	formData.set(i, obj[i]);
}

form.addEventListener('submit', function(event) {
	let promise = fetch('/handler/', {
		method: 'POST',
		body: formData,
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