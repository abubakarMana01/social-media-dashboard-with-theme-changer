const themeSwitcher = document.querySelector('.theme-switcher');
const buttonSwitch = document.querySelector('.switch');
const root = document.querySelector('html');

themeSwitcher.addEventListener('click', () => {
	if (buttonSwitch.style.marginLeft == '') {
		themeSwitcher.style.background = 'rgb(174, 179, 203)';
		buttonSwitch.style.marginLeft = '24px';
		root.style.setProperty('--main-color', '#1d1f29');
		root.style.setProperty('--main-background', '#f7f9ff');
		root.style.setProperty('--board-background', '#f1f3fa');
		root.style.setProperty('--hover-background', '#e1e4f0');
		root.style.setProperty('--secondary-color', '#63687D');
	} else {
		themeSwitcher.style.background =
			'linear-gradient(rgb(64, 219, 130), rgb(56, 143, 231)) rgb(174, 179, 203)';
		buttonSwitch.style.marginLeft = '';
		root.style.setProperty('--main-color', '#fff');
		root.style.setProperty('--main-background', '#1d1f29');
		root.style.setProperty('--board-background', '#252b42');
		root.style.setProperty('--hover-background', '#333a55');
		root.style.setProperty('--secondary-color', '#8c98c6');
	}
});
