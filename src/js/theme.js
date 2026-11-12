// Light and dark theme toggle.
// With no saved choice the site follows the system setting. Pressing the button saves the opposite of
// what is showing; if that matches the system setting, the saved choice is cleared so the site follows
// the system again. The inline script in the page head applies a saved choice before the page paints.
(function () {
	var button = document.querySelector('.theme-toggle');
	if (!button) return;
	var root = document.documentElement;
	var system = window.matchMedia('(prefers-color-scheme: dark)');

	function isDark() {
		return root.dataset.theme ? root.dataset.theme === 'dark' : system.matches;
	}

	function sync() {
		button.setAttribute('aria-pressed', String(isDark()));
	}

	button.addEventListener('click', function () {
		var wantDark = !isDark();
		if (wantDark === system.matches) {
			delete root.dataset.theme;
		} else {
			root.dataset.theme = wantDark ? 'dark' : 'light';
		}
		// Storage can be blocked (private browsing, strict settings); the toggle still works for this page
		try {
			if (root.dataset.theme) localStorage.setItem('theme', root.dataset.theme);
			else localStorage.removeItem('theme');
		} catch (e) {}
		sync();
	});

	system.addEventListener('change', sync);
	sync();
	button.hidden = false;
})();
