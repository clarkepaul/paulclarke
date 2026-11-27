// Work page: filter the case studies by focus area.
// The buttons are hidden in the HTML and shown here, so without JavaScript every case study shows.
// /work.html?focus=strategy opens the page already filtered, which is how the homepage tiles link in.
(function () {
	var group = document.querySelector('.filters');
	if (!group) return;

	var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-filter]'));
	var cards = Array.prototype.slice.call(document.querySelectorAll('.card[data-focus]'));
	var status = document.querySelector('[data-filter-status]');
	var keys = buttons.map(function (b) { return b.dataset.filter; });

	function apply(key, announce) {
		if (keys.indexOf(key) === -1) key = 'all';
		var shown = 0;
		cards.forEach(function (card) {
			var match = key === 'all' || card.dataset.focus.split(' ').indexOf(key) !== -1;
			card.hidden = !match;
			if (match) shown++;
		});
		buttons.forEach(function (b) {
			b.setAttribute('aria-pressed', b.dataset.filter === key ? 'true' : 'false');
		});
		if (announce && status) {
			var label = buttons[keys.indexOf(key)].textContent.trim();
			status.textContent = key === 'all'
				? 'Showing all ' + shown + ' case studies'
				: 'Showing ' + shown + (shown === 1 ? ' case study' : ' case studies') + ' in ' + label;
		}
		try {
			var url = new URL(location.href);
			if (key === 'all') url.searchParams.delete('focus');
			else url.searchParams.set('focus', key);
			history.replaceState(null, '', url);
		} catch (e) {}
	}

	group.addEventListener('click', function (event) {
		var button = event.target.closest('[data-filter]');
		if (button) apply(button.dataset.filter, true);
	});

	group.hidden = false;
	apply(new URLSearchParams(location.search).get('focus') || 'all', false);
})();
