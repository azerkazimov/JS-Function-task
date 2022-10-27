// return və void funksiya növlərinə aid hər biri üçün 3 ədəd nümunə yazın
// Misal: seviyenin olculmesi (void)

function getLevelByCode(code) {
  let num = code;
  if (num == 0) {
    console.log("empty");
  } else if (num < 10) {
    console.log("low");
  } else if (num < 50) {
    console.log("middle");
  } else if (num < 100) {
    console.log("full");
  } else {
    console.log("overload");
  }
}
getLevelByCode(110);

// =============================
// Misal: faktorial hesablanmasi (void)

function getFactorial(a) {
  let num = a;
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  console.log(result);
}

getFactorial(4);

// ==============================
// Misal: Xoş gəlmisiz (void)

function setGreeting(name) {
  let prefix = "Welcome ";
  console.log(prefix + name);
}
setGreeting('Nico');

// ==============================
// Misal: istifadecinin adini oyren (any)

function getUserName(name, surname) {
  return `${name} ${surname}`;
}

let user = getUserName("Lewis", "Hamilton");
console.log(user);

// ==============================
// Misal: hesablama (any)

function countMultiple(numOne, numTwo) {
  let result = 1;
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result
}
console.log(countMultiple(2, 4))

// ==============================
// Misal: Dollar to AZN convertor (any)

function convertCurrency(bill) {
  return bill * 1.7;
}
console.log(convertCurrency(10));

// ==============================

// parametr və argument anlayışlarını izah edə bilmək üçün hər birinə aid 3 ədəd funksiya yazın
// Misal: (a, b) -> default parametr / (11, 22) -> argument

function getSum(a = 0, b = 0) {
  let c = a + b;
  return c;
}
console.log(getSum(11,22));

// ==============================
// Misal: avtomobilin işlənmə müddəti (model, year) -> parametr / (BMW, 2014) -> argument

function getCarProperty(model, year) {
  let car = model;
  let used = 2022 - year;
  console.log(`This ${car}, are ${used} years old`);
}
getCarProperty("BMW", 2014);

// ==============================
// Misal: Sınağın nəmliyinin analizi

function humidMeasure(wet, dry) {
  let humid = ((wet - dry) / dry) * 100;
  console.log(`Bu sinagın nəmliyi: ${Math.round(humid)}%`);
}
humidMeasure(500, 450);

// ==============================
// Misal: maasHesabla adında funksiya yazın.Funksiyanın məqsədi daxil edilən maas və vergi miqdarına görə yekun maaş hesablamasını etməkdir.Bu funksiyanı yazaraq comment bölməsində paylaşın

function maasHesabla(name, gross, tax = 0.07) {
  let charge = gross * tax;
  let salary = gross - charge;
  console.log(
    `${name} 1 ayliq (${gross} AZN) maaşından (${Math.round(
      charge
    )} AZN) vergini çixdiqda, maaşı - ${salary} AZN təşkil edir`
  );
}
maasHesabla("Anar Abbasov", 1200);

// ==============================
// Misal: parametr olaraq istifadəçi adı və mesajı qəbul edən bir funksiya yazın.Funksiya ekrana Salam hörmətli **-istifadəçi adı-**, sizə gələn mesaj var.Mesajın mətni **-mesaj-** formatında bir nəticə çap etməlidir.

function setMessageToUser (user, message) {
	console.log(`Salam hörmətli ${user}, sizə gələn mesaj var.Mesajın mətni: "${message}"`)
}
setMessageToUser('Fuad','qaqan nə qulluğ eləsin)))')