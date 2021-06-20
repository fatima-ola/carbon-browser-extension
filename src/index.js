// 1

// fields of the form
const form = document.querySelector(".form-data");
const region = document.querySelector(".region-name");
const apiKey = document.querySelector(".api-key");

// results
const loading = document.querySelector(".loading");
const errors = document.querySelector(".errors");
const results = document.querySelector(".result-container");
const region = document.querySelector(".my-region");
const carbonUsage = document.querySelector(".carbon-usage");
const fossilFuel = document.querySelector(".fossil-fuel");
const clearBtn = document.querySelector(".clear-btn");

//2
// set the listeners and start of the app
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();

// 3 initial checks
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

// 4
// manage the submission of the form
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}

// 5
// set the api key and region for the user
function setUpUser(apiKey, regionName){
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('regionName', regionName);
    loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
// 6
// API call





