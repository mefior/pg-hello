function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I will show you your personal data' + '\n' +
			'=====' + '\n' +
			'Name    : '     + 'Mateusz' + '\n' + 
			'Surname: ' + 'Kalfas';

	navigator.notification.alert(info);
	
}