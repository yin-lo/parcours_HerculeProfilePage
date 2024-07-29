// console.log('test 1...2...1...2');

const app = {
	/*===================*/
	/*---Etape 2 OBJET----*/
	/*===================*/

	hercule: {
		name: 'Hercule',
		job: 'Demi-dieu',
		age: 35,
		department: 75,
		arm: 60.5,
		inRelationship: true,
	},

	herculeVote: base.vote['hercule'],
	cesarVote: base.vote['cesar'],

	/*===================*/
	/*--Etape 3 TABLEAU--*/
	/*===================*/

	friends: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],

	initProfil: function () {
		base.fillProfil(app.hercule);
		base.printFriends(app.friends);
		base.setBestFriend(app.friends[0]);
	},

	/*===================*/
	/*----Etape 4 DOM----*/
	/*===================*/

	addTitle: function () {
		const header = document.querySelector('#header-banner');
		const title = document.createElement('h1');
		title.classList.add('banner__title');
		title.textContent = 'Vous consultez le profil de Hercule';
		header.appendChild(title);
	},

	/*===================*/
	/*---Etape 5 BOUCLE---*/
	/*===================*/

	displayWork: function () {
		for (let i = 0; i <= 11; i++) {
			base.displayWork([i]);
		}
	},

	/*===================*/
	/*----Etape 6 IF-----*/
	/*===================*/

	getHour: function () {
		const availability = document.querySelector('#availability');
		if (base.getHour() >= 8 && base.getHour() <= 20) {
			availability.textContent = 'disponible';
		} else {
			availability.classList.add('off');
		}
	},

	/*===================*/
	/*--Etape 7 FONCITON-*/
	/*===================*/

	generatePseudo: function (firstName, department) {
		const profilName = document.querySelector('#profil-name');
		profilName.textContent = `${firstName}-du-${department}`;
	},

	/*===================*/
	/*---Etape 8 EVENT---*/
	/*===================*/

	openMenuBtn: function () {
		const header = document.querySelector('#header-banner');
		const menuBtn = document.querySelector('#menu-toggler');
		menuBtn.addEventListener('click', function () {
			header.classList.toggle('banner--open');
		});
	},

	/*===================*/
	/*-Etape 9 EVENT BIS-*/
	/*===================*/

	handleSubmit: function () {
		const form = document.querySelector('#contact');
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			alert('Hercule ne souhaite pas être dérangé');
		});
	},

	/*===================*/
	/*---Etape 10 ALGO---*/
	/*===================*/

	percentCalcul: function (personVote) {
		const totalVote = app.herculeVote + app.cesarVote;
		return Math.round((personVote / totalVote) * 100);
	},

	percentInDom: function () {
		const popularities = document.querySelectorAll('.people__popularity');
		const barPercent = document.querySelectorAll('.people__bar');

		popularities[0].textContent = `${app.percentCalcul(app.herculeVote)}%`;
		popularities[1].textContent = `${app.percentCalcul(app.cesarVote)}%`;

		barPercent[0].style.width = `${app.percentCalcul(app.herculeVote)}%`;
		barPercent[1].style.width = `${app.percentCalcul(app.cesarVote)}%`;
	},

	/*===================*/
	/*-Etape 11 ALGO bis-*/
	/*===================*/

	activityFinished: function () {
		const activities = document.querySelector('#activities');
		activities.classList.remove('hidden');
		const tasks = document.querySelector('.tasks');
		// for (const task of base.activities) {
		// 	if (task.author === 'Hercule' && task.finished) {
		// 		const title = document.createElement('li');
		// 		title.textContent = task.title;
		// 		tasks.appendChild(title);
		// 	}
		// }
		base.activities
			.filter((activity) => activity.author === 'Hercule' && activity.finished === true)
			.forEach((filteredActivity) => {
				const title = document.createElement('li');
				title.textContent = filteredActivity.title;
				tasks.appendChild(title);
			});
	},

	init: function () {
		app.initProfil();
		app.addTitle();
		app.displayWork();
		app.getHour();
		app.generatePseudo(app.hercule.name, app.hercule.department);
		app.openMenuBtn();
		app.handleSubmit();
		app.percentInDom();
		app.activityFinished();
	},
};

document.addEventListener('DOMContentLoaded', app.init);
