// console.log('test 1...2...1...2');

/*===================*/
/*---Etape 2 OBJET----*/
/*===================*/

const hercule = {
	name: 'Hercule',
	job: 'Demi-dieu',
	age: 35,
	department: 75,
	arm: 60.5,
	inRelationship: true,
};

base.fillProfil(hercule);

/*===================*/
/*--Etape 3 TABLEAU---*/
/*===================*/

const friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
// console.log(friends);

base.printFriends(friends);

base.setBestFriend(friends[0]);

/*===================*/
/*----Etape 4 DOM----*/
/*===================*/

const h1Element = document.createElement('h1');
h1Element.classList.add('banner__title');
h1Element.textContent = 'Vous consultez le profil de Hercule';

const headerElement = document.getElementById('header-banner');

headerElement.appendChild(h1Element);

/*===================*/
/*---Etape 5 BOUCLE---*/
/*===================*/

for (let i = 0; i < 12; i++) {
	base.displayWork([i]);
}

/*===================*/
/*----Etape 6 IF-----*/
/*===================*/

const availability = document.getElementById('availability');
if (base.getHour() >= 8 && base.getHour() <= 20) {
	availability.textContent = 'disponible';
} else {
	availability.classList.add('off');
}

/*===================*/
/*--Etape 7 FONCITON-*/
/*===================*/

function generatePseudo(firstName, department) {
	const profilName = document.getElementById('profil-name');
	profilName.textContent = `${firstName}-du-${department}`;
};

generatePseudo(hercule['name'], hercule['department']);



/*===================*/
/*---Etape 8 EVENT---*/
/*===================*/

const menuBtn = document.getElementById('menu-toggler');

menuBtn.addEventListener('click', function () {
	headerElement.classList.toggle('banner--open');
});

/*===================*/
/*-Etape 9 EVENT BIS-*/
/*===================*/

const form = document.getElementById('contact');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	alert('Hercule ne souhaite pas être dérangé');
}

/*===================*/
/*---Etape 10 ALGO---*/
/*===================*/

/* faire les calculs de pourcentage */
const herculeVote = base.vote['hercule'];
const cesarVote = base.vote['cesar'];
const totalVote = herculeVote + cesarVote;

function percentCalcul(personVote) {
	return Math.round((personVote / totalVote) * 100);
}
const herculePercent = percentCalcul(herculeVote);
const cesarPercent = percentCalcul(cesarVote);

/* insérer les pourcentages sur la feuille */
const popularities = document.querySelectorAll('.people__popularity');

popularities[0].textContent=`${herculePercent}%`;
popularities[1].textContent=`${cesarPercent}%`;

/* augmenter la barre en fonction du pourcentage */
const barPercent = document.querySelectorAll('.people__bar');
barPercent[0].style.width = `${herculePercent}%`;
barPercent[1].style.width = `${cesarPercent}%`;

// const herculeTrendsElement = document.getElementById('trends-hercule')
// const cesarTrendsElement = document.getElementById('trends-cesar')

// herculeTrendsElement.querySelector('.people__popularity').textContent = `${herculePercent}%`
// herculeTrendsElement.querySelector('.people__popularity').textContent = `${herculePercent}%`