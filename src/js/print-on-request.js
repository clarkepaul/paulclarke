// "Download my CV" links to resume.html?print, which opens the print dialogue once the page and fonts load.
if (new URLSearchParams(location.search).has('print')) {
	window.addEventListener('load', function () {
		document.fonts.ready.then(function () { window.print(); });
	});
}
