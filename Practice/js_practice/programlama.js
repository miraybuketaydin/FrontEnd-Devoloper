

document.write("Hello World");
document.write("Selam World");

console.log("Hello World");

var isim = "Buket";
var soyisim = "Aydın";
var sayi = 5;
console.log(isim, soyisim);
console.log(sayı);

var kapiNumarasi = 10; //camelcase yazı tipi
var kapi_numarasi = 10; //snake_case yazı tipi
var KapiNumarasi = 10; //PascalCase yazı tipi

alert("Selam Dünya");

//Ekrana 10 kere "Yaramazlık Yapmayacağım" yazdırır.
for (var i = 0; i < 10; i++) {
  console.log("Yaramazlık yapmayacağım.");
  document.write(<br />);
}

//Ekrana 0'den 10'a kadar yazdırır.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//0'dan 10'a kadar 2'şer 2'şer yazdırır.
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(i, j, i * j);
  }
}

var age = 16;
if (age >= 18) {
  console.log("Ehliyet alabilirsiniz.");
  if (age == 18) {
    console.log("Sınıf yaştasınız.");
  }
} else if (age > 10) {
  console.log("Ehliyet alamazsınız.");
} else {
  console.log("Henüz çok erken.");
}

var workers = 54;
var cleaners = 6;
var drivers = 12;
var vehicles = 8;
console.log("Toplam çalışan:", workers + cleaners + drivers);
console.log("Aktif işçi:", workers - 4);
console.log("Temizlikçi başına düşen işçi", workers / cleaners);
console.log("Dışarıda kalan işçi sayısı:", workers % cleaners);
console.log("Toplam koltuk sayısı:", vehicles * 10);

if (workers >= 50 && vehicles >= 10) {
  console.log("Hibe desteği alabilirisiniz.");
}

if (vehicles >= 5 || drivers >= 15) {
  console.log("Vardiya sistemine geçiniz.");
}

var a = parseInt(prompt("İşçi sayısını giriniz:"));
// parseInt yazılan sayısı int. değere çevirir.

var message1 = '"Merhaba Dünya"de';
var message2 = "Türkiye'ye gel";
var message3 = `Türkiye'ye gel ve Merhaba Dünya"de`;
// ş harfi + i harfi + , + altgr basarsan:``çıkar.

var num1 = 123456.6;
var num2 = 1400.45;

var isDoorOpen = false;
var oddNumbers = [1, 3, 5, 7, 9];
var examScores = [100, 80, 95];
var fruits = ["apple", "banana", "cherry"];

//JSON
var car = {
  brand: "togg",
  year: 2022,
  isElectricCar: true,
  colors: ["black", "red", "blue"],
  subModel: {
    is4x4: true,
  },
};
console.log(typeof car);

console.log("Program başladı.");
function sayHello() {
  console.log("Selam");
}
sayHello();

//veya bunu yazabiliriz:
var sayHello = () => {
  console.log("Selam");
};
sayHello();

var sayHello = (name) => {
  console.log("Selam", name);
};
sayHello("Ayşe");
sayHello("Fatma");

console.log("Program bitti.");

var addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(3, 5);

var addNumbers = (a, b) => {
  return a + b;
};
var result = addNumbers(3, 5);
console.log("Sonuç", result);

var average = (a, b) => {
  return (a + b) / 2;
};

var average = (a, b) => {
  return addNumbers(a, b) / 2;
};

var result = addNumbers(3, 5);
console.log("Sonuç", result);
