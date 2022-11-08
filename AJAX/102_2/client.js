let div    = document.querySelector('div');
let btn1 = document.querySelector('#btn1');
let i = 0;
let pages = ["/ajax1.html", "/ajax2.html", "/ajax3.html", "/ajax4.html", "/ajax5.html"];

btn1.addEventListener('click', function() {
	fetch(pages[i]).then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
	i++;
	if (i>4) i = 0;
});
