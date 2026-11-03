// Builds the email address in the browser so it never appears whole in the page source.
// Any element with data-email shows "[at]/[dot]" text until this runs.
(function () {
	var address = ['2paul', 'clarke'].join('') + '@' + ['gmail', 'com'].join('.');
	document.querySelectorAll('[data-email]').forEach(function (target) {
		var link = document.createElement('a');
		link.href = 'mailto:' + address;
		link.textContent = address;
		target.textContent = '';
		target.appendChild(link);
	});
})();
