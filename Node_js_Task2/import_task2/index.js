// импорт библиотеки с помощью функции require
const nokolayBiblLite = require('nokolay_bibl_lite');

const nameResult = nokolayBiblLite.namePerson();
const birthdayResult = nokolayBiblLite.birthdayPerson();
const adressResult = nokolayBiblLite.adressPerson();
const footballClubResult = nokolayBiblLite.footballClubPerson();

console.log(nameResult);
console.log(birthdayResult);
console.log(adressResult);
console.log(footballClubResult);