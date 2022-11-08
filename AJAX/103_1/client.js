let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function() {
	fetch('/handler/?num1=3&num2=53').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});