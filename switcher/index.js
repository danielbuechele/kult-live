const osc = require('node-osc');
const cams = {
	'/atem/program/1': 0.25,
	'/atem/program/2': 0.25,
	'/atem/program/3': 0.25,
	'/atem/program/4': 0.25,
};

console.log('✅  Switcher started');

const emojis = [ '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣' ];
let currentCam;
const client = new osc.Client('127.0.0.1', 8000);

function changeCam() {
	const possibleNewCams = Object.keys(cams).filter(cam => cam !== currentCam);
	const selected = getRandom(0, possibleNewCams.reduce((sum, value) => sum + cams[value], 0));
	let acc = 0;
	for (let cam of possibleNewCams) {
		if (acc <= selected && acc + cams[cam] > selected) {
			currentCam = cam;
			break;
		}
		acc += cams[cam];
	}
	console.log(`switched to ${emojis[currentCam.replace(/\D/g, '')]}`);
	client.send(currentCam);
	setTimeout(changeCam, getSwitchTime());
}

function getSwitchTime() {
	return parseInt(getRandom(6000, 12000));
}

function getRandom(min, max) {
	return max - Math.random() * (max - min);
}

setTimeout(changeCam, getSwitchTime());
