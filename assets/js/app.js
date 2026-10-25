
// Task 1 For each
var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];

var result = '';

planets.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.planetName}</td>
            <td>${params.distanceFromSunKm}</td>
            <td>${params.diameterKm}</td>
            <td>${params.hasRings}</td>
            <td>${params.numberOfMoons}</td>

    `;
});

document.getElementById('planetsInfo').innerHTML = result;

// Task 1 For loop
var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];



var result = '';

for (var i = 0; i < planets.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${planets[i].planetName}</td>
            <td>${planets[i].distanceFromSunKm}</td>
            <td>${planets[i].diameterKm}</td>
            <td>${planets[i].hasRings}</td>
            <td>${planets[i].numberOfMoons}</td>
        </tr>
    `;
}

document.getElementById('planetsInfo2').innerHTML = result;

// ===========================================Task2===================================================

var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];

var result = '';

mountains.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.mountainName}</td>
			<td>${params.heightMeters}</td>
            <td>${params.locationContinent}</td>
            <td>${params.firstAscentYear}</td>
            <td>${params.isVolcano}</td>
           

    `;
});

document.getElementById('mountains').innerHTML = result;

// Task 2 For loop
var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];



var result = '';

for (var i = 0; i < mountains.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${mountains[i].mountainName}</td>
			<td>${mountains[i].heightMeters}</td>
            <td>${mountains[i].locationContinent}</td>
            <td>${mountains[i].firstAscentYear}</td>
            <td>${mountains[i].isVolcano}</td>
        </tr>
    `;
}

document.getElementById('mountains1').innerHTML = result;

// ===========================================Task3===================================================

var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];


var result = '';

universities.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.uniName}</td>
			<td>${params.foundedYear}</td>
            <td>${params.countryLocated}</td>
            <td>${params.studentCount}</td>
            <td>${params.worldRanking}</td>
           

    `;
});

document.getElementById('universities').innerHTML = result;


// Task 2 For loop
var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];


var result = '';

for (var i = 0; i < universities.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${universities[i].uniName}</td>
			<td>${universities[i].foundedYear}</td>
            <td>${universities[i].countryLocated}</td>
            <td>${universities[i].studentCount}</td>
            <td>${universities[i].worldRanking}</td>
        </tr>
    `;
}

document.getElementById('universities1').innerHTML = result;


// ===========================================Task4===================================================

var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];

var result = '';

animals.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.uniNspeciesame}</td>
			<td>${params.averageWeightKg}</td>
            <td>${params.habitatType}</td>
            <td>${params.lifespanYears}</td>
            <td>${params.endangeredStatus}</td>
           

    `;
});

document.getElementById('animals').innerHTML = result;


// Task 2 For loop
var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];

var result = '';

for (var i = 0; i < animals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${animals[i].species}</td>
			<td>${animals[i].averageWeightKg}</td>
            <td>${animals[i].habitatType}</td>
            <td>${animals[i].lifespanYears}</td>
            <td>${animals[i].endangeredStatus}</td>
        </tr>
    `;
}

document.getElementById('animals1').innerHTML = result;


// ===========================================Task5===================================================


var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];

var result = '';

apps.forEach((params, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${params.appName}</td>
			<td>${params.categoryType}</td>
            <td>${params.downloadsMillion}</td>
            <td>${params.developerCompany}</td>
            <td>${params.subscriptionRequired}</td>
           

    `;
});

document.getElementById('apps').innerHTML = result;


// Task 2 For loop
var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];

var result = '';

for (var i = 0; i < apps.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${apps[i].appName}</td>
			<td>${apps[i].categoryType}</td>
            <td>${apps[i].downloadsMillion}</td>
            <td>${apps[i].developerCompany}</td>
            <td>${apps[i].subscriptionRequired}</td>
        </tr>
    `;
}

document.getElementById('apps1').innerHTML = result;


// ===========================================Task6===================================================


var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];


var result = '';

continents.forEach((continents, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${continents.continentLabel}</td>
			<td>${continents.surfaceAreaMillionSqKm}</td>
            <td>${continents.countriesCount}</td>
            <td>${continents.populationBillion}</td>
            <td>${continents.largestCountry}</td>
           

    `;
});

document.getElementById('continents').innerHTML = result;



// Task 2 For loop
var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];


var result = '';

for (var i = 0; i < continents.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${continents[i].continentLabel}</td>
			<td>${continents[i].surfaceAreaMillionSqKm}</td>
            <td>${continents[i].countriesCount}</td>
            <td>${continents[i].populationBillion}</td>
            <td>${continents[i].largestCountry}</td>
        </tr>
    `;
}

document.getElementById('continents1').innerHTML = result;


// ===========================================Task7===================================================


var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];


var result = '';

desserts.forEach((desserts, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${desserts.dessertName}</td>
			<td>${desserts.sugarContentGrams}</td>
            <td>${desserts.servingTemp}</td>
            <td>${desserts.mainIngredient}</td>
            <td>${desserts.calorieCount}</td>
           

    `;
});

document.getElementById('desserts').innerHTML = result;



// Task 2 For loop
var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];

var result = '';

for (var i = 0; i < desserts.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${desserts[i].dessertName}</td>
			<td>${desserts[i].sugarContentGrams}</td>
            <td>${desserts[i].servingTemp}</td>
            <td>${desserts[i].mainIngredient}</td>
            <td>${desserts[i].calorieCount}</td>
        </tr>
    `;
}

document.getElementById('desserts1').innerHTML = result;


// ===========================================Task8===================================================


var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];


var result = '';

oceans.forEach((oceans, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${oceans.oceanTitle}</td>
			<td>${oceans.avgDepthMeters}</td>
            <td>${oceans.surfaceAreaMillionSqKm}</td>
            <td>${oceans.borderingContinents}</td>
            <td>${oceans.salinityPpt}</td>
           

    `;
});

document.getElementById('oceans').innerHTML = result;



// Task 2 For loop
var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];

var result = '';

for (var i = 0; i < oceans.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${oceans[i].oceanTitle}</td>
			<td>${oceans[i].avgDepthMeters}</td>
            <td>${oceans[i].surfaceAreaMillionSqKm}</td>
            <td>${oceans[i].borderingContinents}</td>
            <td>${oceans[i].salinityPpt}</td>
        </tr>
    `;
}

document.getElementById('oceans1').innerHTML = result;


// ===========================================Task9===================================================


var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];



var result = '';

gadgets.forEach((gadgets, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${gadgets.gadgetLabel}</td>
			<td>${gadgets.featuresCount}</td>
            <td>${gadgets.batteryLifeHours}</td>
            <td>${gadgets.connectivityType}</td>
            <td>${gadgets.weightGrams}</td>
           

    `;
});

document.getElementById('gadgets').innerHTML = result;



// Task 2 For loop
var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];


var result = '';

for (var i = 0; i < gadgets.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${gadgets[i].gadgetLabel}</td>
			<td>${gadgets[i].featuresCount}</td>
            <td>${gadgets[i].batteryLifeHours}</td>
            <td>${gadgets[i].connectivityType}</td>
            <td>${gadgets[i].weightGrams}</td>
        </tr>
    `;
}

document.getElementById('gadgets1').innerHTML = result;


// ===========================================Task10===================================================


var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];



var result = '';

landmarks.forEach((landmarks, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${landmarks.landmarkLabel}</td>
			<td>${landmarks.heightMeters}</td>
            <td>${landmarks.visitorCountYearMillion}</td>
            <td>${landmarks.countryLocation}</td>
            <td>${landmarks.constructionYear}</td>
           

    `;
});

document.getElementById('landmarks').innerHTML = result;



// Task 2 For loop
var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];


var result = '';

for (var i = 0; i < landmarks.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${landmarks[i].landmarkLabel}</td>
			<td>${landmarks[i].heightMeters}</td>
            <td>${landmarks[i].visitorCountYearMillion}</td>
            <td>${landmarks[i].countryLocation}</td>
            <td>${landmarks[i].constructionYear}</td>
        </tr>
    `;
}

document.getElementById('landmarks1').innerHTML = result;


// ===========================================Task11===================================================


var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];



var result = '';

vehiclesModels.forEach((vehiclesModels, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${vehiclesModels.vehicleType}</td>
			<td>${vehiclesModels.maxSpeedKph}</td>
            <td>${vehiclesModels.fuelCapacityLiters}</td>
            <td>${vehiclesModels.wheelCount}</td>
            <td>${vehiclesModels.manufacturerLocation}</td>
           

    `;
});

document.getElementById('vehiclesModels').innerHTML = result;



// Task 2 For loop
var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];


var result = '';

for (var i = 0; i < vehiclesModels.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${vehiclesModels[i].vehicleType}</td>
			<td>${vehiclesModels[i].maxSpeedKph}</td>
            <td>${vehiclesModels[i].fuelCapacityLiters}</td>
            <td>${vehiclesModels[i].wheelCount}</td>
            <td>${vehiclesModels[i].manufacturerLocation}</td>
        </tr>
    `;
}

document.getElementById('vehiclesModels1').innerHTML = result;


// ===========================================Task12===================================================


var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];



var result = '';

professions.forEach((professions, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${professions.professionName}</td>
			<td>${professions.avgSalaryUSD}</td>
            <td>${professions.yearsOfStudy}</td>
            <td>${professions.riskLevel}</td>
            <td>${professions.workEnvironment}</td>
           

    `;
});

document.getElementById('professions').innerHTML = result;



// Task 2 For loop
var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];


var result = '';

for (var i = 0; i < professions.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${professions[i].professionName}</td>
			<td>${professions[i].avgSalaryUSD}</td>
            <td>${professions[i].yearsOfStudy}</td>
            <td>${professions[i].riskLevel}</td>
            <td>${professions[i].workEnvironment}</td>
        </tr>
    `;
}

document.getElementById('professions1').innerHTML = result;



// ===========================================Task13===================================================


var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];



var result = '';

beveragesMenu.forEach((beveragesMenu, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${beveragesMenu.beverageTitle}</td>
			<td>${beveragesMenu.caffeineMg}</td>
            <td>${beveragesMenu.servingSizeMl}</td>
            <td>${beveragesMenu.servedHot}</td>
            <td>${beveragesMenu.sugarContentG}</td>
           

    `;
});

document.getElementById('beveragesMenu').innerHTML = result;



// Task 2 For loop
var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];


var result = '';

for (var i = 0; i < beveragesMenu.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${beveragesMenu[i].beverageTitle}</td>
			<td>${beveragesMenu[i].caffeineMg}</td>
            <td>${beveragesMenu[i].servingSizeMl}</td>
            <td>${beveragesMenu[i].servedHot}</td>
            <td>${beveragesMenu[i].sugarContentG}</td>
        </tr>
    `;
}

document.getElementById('beveragesMenu1').innerHTML = result;



// ===========================================Task14===================================================


var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];



var result = '';

flowers.forEach((flowers, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${flowers.flowerName}</td>
			<td>${flowers.petalCount}</td>
            <td>${flowers.fragranceLevel}</td>
            <td>${flowers.bloomingSeason}</td>
            <td>${flowers.stemLengthCm}</td>
           

    `;
});

document.getElementById('flowers').innerHTML = result;



// Task 2 For loop
var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];


var result = '';

for (var i = 0; i < flowers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${flowers[i].flowerName}</td>
			<td>${flowers[i].petalCount}</td>
            <td>${flowers[i].fragranceLevel}</td>
            <td>${flowers[i].bloomingSeason}</td>
            <td>${flowers[i].stemLengthCm}</td>
        </tr>
    `;
}

document.getElementById('flowers1').innerHTML = result;


// ===========================================Task15===================================================


var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];



var result = '';

hotels.forEach((hotels, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${hotels.hotelLabel}</td>
			<td>${hotels.stars}</td>
            <td>${hotels.totalRooms}</td>
            <td>${hotels.poolAvailable}</td>
            <td>${hotels.cityLoc}</td>
           

    `;
});

document.getElementById('hotels').innerHTML = result;



// Task 2 For loop
var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];


var result = '';

for (var i = 0; i < hotels.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${hotels[i].hotelLabel}</td>
			<td>${hotels[i].stars}</td>
            <td>${hotels[i].totalRooms}</td>
            <td>${hotels[i].poolAvailable}</td>
            <td>${hotels[i].cityLoc}</td>
        </tr>
    `;
}

document.getElementById('hotels1').innerHTML = result;


// ===========================================Task16===================================================


var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];


var result = '';

islands.forEach((islands, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${islands.islandLabel}</td>
			<td>${islands.areaSqKm}</td>
            <td>${islands.countryAdmin}</td>
            <td>${islands.inhabited}</td>
            <td>${islands.climateType}</td>
           

    `;
});

document.getElementById('islands').innerHTML = result;



// Task 2 For loop
var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];


var result = '';

for (var i = 0; i < islands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${islands[i].islandLabel}</td>
			<td>${islands[i].areaSqKm}</td>
            <td>${islands[i].countryAdmin}</td>
            <td>${islands[i].inhabited}</td>
            <td>${islands[i].climateType}</td>
        </tr>
    `;
}

document.getElementById('islands1').innerHTML = result;


// ===========================================Task17===================================================


var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];



var result = '';

insects.forEach((insects, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${insects.insectName}</td>
			<td>${insects.wingspanCm}</td>
            <td>${insects.legsCount}</td>
            <td>${insects.lifespanDays}</td>
            <td>${insects.canFly}</td>
           

    `;
});

document.getElementById('insects').innerHTML = result;



// Task 2 For loop
var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];



var result = '';

for (var i = 0; i < insects.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${insects[i].insectName}</td>
			<td>${insects[i].wingspanCm}</td>
            <td>${insects[i].legsCount}</td>
            <td>${insects[i].lifespanDays}</td>
            <td>${insects[i].canFly}</td>
        </tr>
    `;
}

document.getElementById('insects1').innerHTML = result;


// ===========================================Task18===================================================


var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];




var result = '';

festivals.forEach((festivals, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${festivals.festivalName}</td>
			<td>${festivals.monthObserved}</td>
            <td>${festivals.durationDays}</td>
            <td>${festivals.originCountry}</td>
            <td>${festivals.outdoorEvent}</td>
           

    `;
});

document.getElementById('festivals').innerHTML = result;



// Task 2 For loop
var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];



var result = '';

for (var i = 0; i < festivals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${festivals[i].festivalName}</td>
			<td>${festivals[i].monthObserved}</td>
            <td>${festivals[i].durationDays}</td>
            <td>${festivals[i].originCountry}</td>
            <td>${festivals[i].outdoorEvent}</td>
        </tr>
    `;
}

document.getElementById('festivals1').innerHTML = result;



// ===========================================Task19===================================================


var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];




var result = '';

rivers.forEach((rivers, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${rivers.riverLabel}</td>
			<td>${rivers.lengthKm}</td>
            <td>${rivers.flowsThroughCountries}</td>
            <td>${rivers.avgDepthM}</td>
            <td>${rivers.deltaExists}</td>
           

    `;
});

document.getElementById('rivers').innerHTML = result;



// Task 2 For loop
var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];



var result = '';

for (var i = 0; i < rivers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${rivers[i].riverLabel}</td>
			<td>${rivers[i].lengthKm}</td>
            <td>${rivers[i].flowsThroughCountries}</td>
            <td>${rivers[i].avgDepthM}</td>
            <td>${rivers[i].deltaExists}</td>
        </tr>
    `;
}

document.getElementById('rivers1').innerHTML = result;



// ===========================================Task20===================================================


var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];



var result = '';

spices.forEach((spices, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${spices.spiceName}</td>
			<td>${spices.colorHue}</td>
            <td>${spices.originRegion}</td>
            <td>${spices.pungencyLevel}</td>
            <td>${spices.isPowdered}</td>
           

    `;
});

document.getElementById('spices').innerHTML = result;



// Task 2 For loop
var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];



var result = '';

for (var i = 0; i < spices.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${spices[i].spiceName}</td>
			<td>${spices[i].colorHue}</td>
            <td>${spices[i].originRegion}</td>
            <td>${spices[i].pungencyLevel}</td>
            <td>${spices[i].isPowdered}</td>
        </tr>
    `;
}

document.getElementById('spices1').innerHTML = result;


// ===========================================Task21===================================================


var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];



var result = '';

tools.forEach((tools, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${tools.toolName}</td>
			<td>${tools.weightKg}</td>
            <td>${tools.handleMaterial}</td>
            <td>${tools.manualTool}</td>
            <td>${tools.usageCategory}</td>
           

    `;
});

document.getElementById('tools').innerHTML = result;



// Task 2 For loop
var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];



var result = '';

for (var i = 0; i < tools.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${tools[i].toolName}</td>
			<td>${tools[i].weightKg}</td>
            <td>${tools[i].handleMaterial}</td>
            <td>${tools[i].manualTool}</td>
            <td>${tools[i].usageCategory}</td>
        </tr>
    `;
}

document.getElementById('tools1').innerHTML = result;


// ===========================================Task22===================================================


var minerals = [
  { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
  { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
  { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
  { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
  { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];




var result = '';

minerals.forEach((minerals, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${minerals.mineralLabel}</td>
			<td>${minerals.hardnessMoh}</td>
            <td>${minerals.crystalSystem}</td>
            <td>${minerals.isMetallic}</td>
            <td>${minerals.marketPriceUSDkg}</td>
           

    `;
});

document.getElementById('minerals').innerHTML = result;



// Task 2 For loop
var minerals = [
  { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
  { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
  { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
  { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
  { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];




var result = '';

for (var i = 0; i < minerals.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${minerals[i].mineralLabel}</td>
			<td>${minerals[i].hardnessMoh}</td>
            <td>${minerals[i].crystalSystem}</td>
            <td>${minerals[i].isMetallic}</td>
            <td>${minerals[i].marketPriceUSDkg}</td>
        </tr>
    `;
}

document.getElementById('minerals1').innerHTML = result;


// ===========================================Task23===================================================


var planetsMoons = [
  { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
  { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
  { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];



var result = '';

planetsMoons.forEach((planetsMoons, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${planetsMoons.moonLabel}</td>
			<td>${planetsMoons.orbitingPlanet}</td>
            <td>${planetsMoons.diameterKm}</td>
            <td>${planetsMoons.discoveredYear}</td>
            <td>${planetsMoons.surfaceMaterial}</td>
           

    `;
});

document.getElementById('planetsMoons').innerHTML = result;



// Task 2 For loop
var planetsMoons = [
  { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
  { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
  { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];




var result = '';

for (var i = 0; i < planetsMoons.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${planetsMoons[i].moonLabel}</td>
			<td>${planetsMoons[i].orbitingPlanet}</td>
            <td>${planetsMoons[i].diameterKm}</td>
            <td>${planetsMoons[i].discoveredYear}</td>
            <td>${planetsMoons[i].surfaceMaterial}</td>
        </tr>
    `;
}

document.getElementById('planetsMoons1').innerHTML = result;


// ===========================================Task24===================================================


var musicalBands = [
  { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
  { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
  { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
  { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
  { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];


var result = '';

musicalBands.forEach((musicalBands, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${musicalBands.bandLabel}</td>
			<td>${musicalBands.originCity}</td>
            <td>${musicalBands.formedYear}</td>
            <td>${musicalBands.genreStyle}</td>
            <td>${musicalBands.albumsCount}</td>
           

    `;
});

document.getElementById('musicalBands').innerHTML = result;



// Task 2 For loop
var musicalBands = [
  { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
  { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
  { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
  { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
  { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];




var result = '';

for (var i = 0; i < musicalBands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${musicalBands[i].bandLabel}</td>
			<td>${musicalBands[i].originCity}</td>
            <td>${musicalBands[i].formedYear}</td>
            <td>${musicalBands[i].genreStyle}</td>
            <td>${musicalBands[i].albumsCount}</td>
        </tr>
    `;
}

document.getElementById('musicalBands1').innerHTML = result;



// ===========================================Task25===================================================


var citiesMetro = [
  { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
  { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
  { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
  { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
  { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];


var result = '';

citiesMetro.forEach((citiesMetro, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${citiesMetro.metroLabel}</td>
			<td>${citiesMetro.trackLengthKm}</td>
            <td>${citiesMetro.totalStations}</td>
            <td>${citiesMetro.dailyRidershipMillion}</td>
            <td>${citiesMetro.operatingSince}</td>
           

    `;
});

document.getElementById('citiesMetro').innerHTML = result;



// Task 2 For loop
var citiesMetro = [
  { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
  { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
  { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
  { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
  { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];




var result = '';

for (var i = 0; i < citiesMetro.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${citiesMetro[i].metroLabel}</td>
			<td>${citiesMetro[i].trackLengthKm}</td>
            <td>${citiesMetro[i].totalStations}</td>
            <td>${citiesMetro[i].dailyRidershipMillion}</td>
            <td>${citiesMetro[i].operatingSince}</td>
        </tr>
    `;
}

document.getElementById('citiesMetro1').innerHTML = result;



// ===========================================Task26===================================================


var sciDiscoveries = [
  { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
  { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
  { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];



var result = '';

sciDiscoveries.forEach((sciDiscoveries, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${sciDiscoveries.discoveryLabel}</td>
			<td>${sciDiscoveries.discoveredBy}</td>
            <td>${sciDiscoveries.yearMade}</td>
            <td>${sciDiscoveries.fieldArea}</td>
            <td>${sciDiscoveries.impactLevel}</td>
           

    `;
});

document.getElementById('sciDiscoveries').innerHTML = result;



// Task 2 For loop
var sciDiscoveries = [
  { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
  { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
  { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];





var result = '';

for (var i = 0; i < sciDiscoveries.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${sciDiscoveries[i].discoveryLabel}</td>
			<td>${sciDiscoveries[i].discoveredBy}</td>
            <td>${sciDiscoveries[i].yearMade}</td>
            <td>${sciDiscoveries[i].fieldArea}</td>
            <td>${sciDiscoveries[i].impactLevel}</td>
        </tr>
    `;
}

document.getElementById('sciDiscoveries1').innerHTML = result;


// ===========================================Task27===================================================


var nationalParks = [
  { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
  { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
  { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
  { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
  { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];



var result = '';

nationalParks.forEach((nationalParks, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${nationalParks.parkLabel}</td>
			<td>${nationalParks.countryLocated}</td>
            <td>${nationalParks.establishedYear}</td>
            <td>${nationalParks.areaSqKm}</td>
            <td>${nationalParks.annualVisitorsMillion}</td>
           

    `;
});

document.getElementById('nationalParks').innerHTML = result;



// Task 2 For loop
var nationalParks = [
  { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
  { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
  { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
  { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
  { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];





var result = '';

for (var i = 0; i < nationalParks.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${nationalParks[i].parkLabel}</td>
			<td>${nationalParks[i].countryLocated}</td>
            <td>${nationalParks[i].establishedYear}</td>
            <td>${nationalParks[i].areaSqKm}</td>
            <td>${nationalParks[i].annualVisitorsMillion}</td>
        </tr>
    `;
}

document.getElementById('nationalParks1').innerHTML = result;


// ===========================================Task28===================================================


var artPaintings = [
  { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
  { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
  { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
  { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
  { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];



var result = '';

artPaintings.forEach((artPaintings, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${artPaintings.paintingTitle}</td>
			<td>${artPaintings.artistName}</td>
            <td>${artPaintings.yearCreated}</td>
            <td>${artPaintings.styleType}</td>
            <td>${artPaintings.currentLocation}</td>
           

    `;
});

document.getElementById('artPaintings').innerHTML = result;



// Task 2 For loop
var artPaintings = [
  { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
  { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
  { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
  { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
  { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];





var result = '';

for (var i = 0; i < artPaintings.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${artPaintings[i].paintingTitle}</td>
			<td>${artPaintings[i].artistName}</td>
            <td>${artPaintings[i].yearCreated}</td>
            <td>${artPaintings[i].styleType}</td>
            <td>${artPaintings[i].currentLocation}</td>
        </tr>
    `;
}

document.getElementById('artPaintings1').innerHTML = result;



// ===========================================Task29===================================================


var historicalBattles = [
  { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
  { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
  { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
  { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
  { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];



var result = '';

historicalBattles.forEach((historicalBattles, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${historicalBattles.battleName}</td>
			<td>${historicalBattles.battleYear}</td>
            <td>${historicalBattles.mainCombatants}</td>
            <td>${historicalBattles.outcome}</td>
            <td>${historicalBattles.casualtiesApprox}</td>
           

    `;
});

document.getElementById('historicalBattles').innerHTML = result;



// Task 2 For loop
var historicalBattles = [
  { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
  { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
  { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
  { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
  { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];




var result = '';

for (var i = 0; i < historicalBattles.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${historicalBattles[i].battleName}</td>
			<td>${historicalBattles[i].battleYear}</td>
            <td>${historicalBattles[i].mainCombatants}</td>
            <td>${historicalBattles[i].outcome}</td>
            <td>${historicalBattles[i].casualtiesApprox}</td>
        </tr>
    `;
}

document.getElementById('historicalBattles1').innerHTML = result;



// ===========================================Task30===================================================


var awards = [
  { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
  { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
  { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];


var result = '';

awards.forEach((awards, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${awards.awardTitle}</td>
			<td>${awards.categoryGiven}</td>
            <td>${awards.established}</td>
            <td>${awards.awardCountry}</td>
            <td>${awards.frequencyYears}</td>
           

    `;
});

document.getElementById('awards').innerHTML = result;



// Task 2 For loop
var awards = [
  { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
  { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
  { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];




var result = '';

for (var i = 0; i < awards.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${awards[i].awardTitle}</td>
			<td>${awards[i].categoryGiven}</td>
            <td>${awards[i].established}</td>
            <td>${awards[i].awardCountry}</td>
            <td>${awards[i].frequencyYears}</td>
        </tr>
    `;
}

document.getElementById('awards1').innerHTML = result;



// ===========================================Task31===================================================


var bridges = [
  { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
  { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
  { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
  { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
  { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];


var result = '';

bridges.forEach((bridges, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${bridges.bridgeLabel}</td>
			<td>${bridges.lengthMeters}</td>
            <td>${bridges.countryLocated}</td>
            <td>${bridges.builtYear}</td>
            <td>${bridges.materialMain}</td>
           

    `;
});

document.getElementById('bridges').innerHTML = result;



// Task 2 For loop
var bridges = [
  { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
  { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
  { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
  { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
  { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];




var result = '';

for (var i = 0; i < bridges.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${bridges[i].bridgeLabel}</td>
			<td>${bridges[i].lengthMeters}</td>
            <td>${bridges[i].countryLocated}</td>
            <td>${bridges[i].builtYear}</td>
            <td>${bridges[i].materialMain}</td>
        </tr>
    `;
}

document.getElementById('bridges1').innerHTML = result;



// ===========================================Task32===================================================


var spaceTelescopes = [
  { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
  { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
  { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
  { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
  { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];


var result = '';

spaceTelescopes.forEach((spaceTelescopes, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${spaceTelescopes.telescopeName}</td>
			<td>${spaceTelescopes.launchYear}</td>
            <td>${spaceTelescopes.primaryMirrorM}</td>
            <td>${spaceTelescopes.builtYear}</td>
            <td>${spaceTelescopes.materialMain}</td>
           

    `;
});

document.getElementById('spaceTelescopes').innerHTML = result;



// Task 2 For loop
var spaceTelescopes = [
  { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
  { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
  { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
  { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
  { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];




var result = '';

for (var i = 0; i < spaceTelescopes.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${spaceTelescopes[i].telescopeName}</td>
			<td>${spaceTelescopes[i].launchYear}</td>
            <td>${spaceTelescopes[i].primaryMirrorM}</td>
            <td>${spaceTelescopes[i].operatorAgency}</td>
            <td>${spaceTelescopes[i].missionStatus}</td>
        </tr>
    `;
}

document.getElementById('spaceTelescopes1').innerHTML = result;




// ===========================================Task33====================================================


var fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];


var result = '';

fashionBrands.forEach((fashionBrands, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${fashionBrands.brandLabel}</td>
			<td>${fashionBrands.foundedYear}</td>
            <td>${fashionBrands.originCountry}</td>
            <td>${fashionBrands.productType}</td>
            <td>${fashionBrands.annualRevenueBillionUSD}</td>
           

    `;
});

document.getElementById('fashionBrands').innerHTML = result;



// Task 2 For loop
var fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];



var result = '';

for (var i = 0; i < fashionBrands.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${fashionBrands[i].brandLabel}</td>
			<td>${fashionBrands[i].foundedYear}</td>
            <td>${fashionBrands[i].originCountry}</td>
            <td>${fashionBrands[i].productType}</td>
            <td>${fashionBrands[i].annualRevenueBillionUSD}</td>
        </tr>
    `;
}

document.getElementById('fashionBrands1').innerHTML = result;



// ===========================================Task34====================================================


var musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];


var result = '';

musicalInstrumentsPro.forEach((musicalInstrumentsPro, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${musicalInstrumentsPro.instrumentName}</td>
			<td>${musicalInstrumentsPro.categoryFamily}</td>
            <td>${musicalInstrumentsPro.rangeOctaves}</td>
            <td>${musicalInstrumentsPro.madeOf}</td>
            <td>${musicalInstrumentsPro.originCentury}</td>
           

    `;
});

document.getElementById('musicalInstrumentsPro').innerHTML = result;



// Task 2 For loop
var musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];



var result = '';

for (var i = 0; i < musicalInstrumentsPro.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${musicalInstrumentsPro[i].instrumentName}</td>
			<td>${musicalInstrumentsPro[i].categoryFamily}</td>
            <td>${musicalInstrumentsPro[i].rangeOctaves}</td>
            <td>${musicalInstrumentsPro[i].madeOf}</td>
            <td>${musicalInstrumentsPro[i].originCentury}</td>
        </tr>
    `;
}

document.getElementById('musicalInstrumentsPro1').innerHTML = result;



// ===========================================Task35====================================================


var webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];


var result = '';

webBrowsers.forEach((webBrowsers, index) => {
    result += `
        <tr>
            <td>${index + 1}</td>
            <td>${webBrowsers.browserName}</td>
			<td>${webBrowsers.developerOrg}</td>
            <td>${webBrowsers.firstReleaseYear}</td>
            <td>${webBrowsers.engineUsed}</td>
            <td>${webBrowsers.platformSupport}</td>
           

    `;
});

document.getElementById('webBrowsers').innerHTML = result;



// Task 2 For loop
var webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];



var result = '';

for (var i = 0; i < webBrowsers.length; i++) {
    result += `
        <tr>
            <td>${i + 1}</td>
            <td>${webBrowsers[i].browserName}</td>
			<td>${webBrowsers[i].developerOrg}</td>
            <td>${webBrowsers[i].firstReleaseYear}</td>
            <td>${webBrowsers[i].engineUsed}</td>
            <td>${webBrowsers[i].platformSupport}</td>
        </tr>
    `;
}

document.getElementById('webBrowsers1').innerHTML = result;

