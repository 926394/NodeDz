// Random name selection function
function namePerson() {
  let arr = ["David Guetta", "David Guetta", "Martin Garrix", "Tiesto", "Dimitri Vegas & Like Mike"];
  let answ1 = arr[Math.floor(Math.random() * arr.length)];
  return answ1;
}
console.log("Random name: " + namePerson());

// Random date selection function
function birthdayPerson() {
  const birth = [
    { birthday: "1993-04-31", id: 1 },
    { birthday: "1990-08-06", id: 2 },
    { birthday: "1998-11-17", id: 3 },
    { birthday: "1991-02-24", id: 4 },
    { birthday: "1995-01-01", id: 5 },
  ];
  let answ2 = birth[Math.floor(Math.random() * birth.length)].birthday;
  return answ2;
}
console.log("Random date: " + birthdayPerson());


// Random address selection function
function adressPerson() {
  const birth = [
    { adress: "910426, Курганская область, город Истра, ул. Балканская, 12", id: 1 },
    { adress: "010989, Костромская область, город Дмитров, пр. Гоголя, 85", id: 2 },
    { adress: "274146, Воронежская область, город Балашиха, спуск Славы, 56", id: 3 },
    { adress: "312230, Кемеровская область, город Солнечногорск, бульвар Бухарестская, 82", id: 4 },
    { adress: "536186, Сахалинская область, город Дорохово, въезд Ломоносова, 70", id: 5 },
  ];
  let answ3 = birth[Math.floor(Math.random() * birth.length)].adress;


  return answ3;
}
console.log("Random date: " + adressPerson());



// Random football Club selection function
function footballClubPerson() {
  const birth = [
    { footballClub: "Локомотив", id: 1 },
    { footballClub: "Краснодар", id: 2 },
    { footballClub: "Динамо", id: 3 },
    { footballClub: "Зенит", id: 4 },
    { footballClub: "Спартак", id: 5 },
  ];
  let answ4 = birth[Math.floor(Math.random() * birth.length)].footballClub;
  return answ4;
}

console.log("Random footballClub: " + footballClubPerson());

module.exports = {namePerson, birthdayPerson, adressPerson, footballClubPerson};