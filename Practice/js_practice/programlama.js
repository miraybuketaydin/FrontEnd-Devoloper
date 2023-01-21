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
var oldcar = {
  doorNum: 4,
  wheelNum: 4,
};
var car = {
  brand: "togg",
  year: 2022,
  isElectricCar: true,
  colors: ["black", "red", "blue"],
  subModel: {
    is4x4: true,
  },
  introduce: function () {
    console.log("Merhaba ben arabayım");
    console.log(this);
  },
  ...oldcar,
};

console.log(typeof car);
console.log(car.brand);
console.log(car.colors[1]);
car.colors.push("white");
car.hasSunRoof = true;
car.year = 2023;
console.log(car);
car.introduce();

var model2024 = {
  tech: "5g",
  year: 2024,
};
var newCar = Object.assign(car, model2024);
//kısa yolu car={...car,...model2024}
newCar.introduce();

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

var basket = ["apple", "banana", "cherry"];
basket.push("mango"); //en sona mango'yu ekler
basket.unshift("kiwi"); //en başa kiwi'yu ekler
console.log(basket);
console.log(basket.length);
basket.pop(); //sondaki elemanı siler
console.log(basket[3]);
basket.shift(); //baştaki elemanı siler

const array1 = [1, 2, 3, 4, 5, 6];
const map1 = array1.map((x) => x * 2);
console.log(array1);
console.log(map1);

const array2 = [5, 12, 8, 130, 44];
const found = array2.find((x) => x > 10);
console.log(found);

var text1 = "Merhaba Dünya";
console.log(text1.length);

const world = Dünya;
console.log(`Selam ${world} naber`); // Selam Dünya naber yazar

const sentence = "The quick brown fox jumped over the lazy dog";
const index = 4;
console.log(`The character at index ${index}is ${sentence.charAt(index)}`); // The character at index 4 is q

const paragraph =
  "The quick brown fox jumped over the lazy dog. If the dog barkked, was it really lazy?";
const searchTerm = "dog";
const indexOffFirst = paragraph.indexOf(searchTerm);
console.log(
  `The index of the first "${searchTerm}" from the beginnig is ${indexOffFirst}`
);
console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOffFirst + 1
  )}`
);

const str = "The quick brown fox jumped over the lazy dog.";
const words = str.split(" ");
console.log(words);
console.log(words[3]);

const str1 = "Mozilla";
console.log(str1.substring(1, 3));
console.log(str1.substring(2));

const sentence1 = "The quick brown fox jumped over the lazy dog.";
console.log(sentence1.toLowerCase());
//tüm cümlenin harflerini küçüğe çevirir.

const sentence2 = "The quick brown fox jumped over the lazy dog.";
console.log(sentence1.toUpperCase());
//tüm cümlenin harflerini büyüğe çevirir.

// var door= true;
// document.onclik= function(){
//   if (door==true){
//     door=false;
//   }else {
//     door=true;
//   }
//   console.log(door);
// }
//daha kısa yolu:
var door = true;
document.onclik = function () {
  door = door ? false : true; // bunun daha kısası: door=!door;
  console.log(door);
};

for (var i = 0; i <= 64; i++) {
  console.log(i);
  console.log(i, i.toString(2));
}

function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2 * Math.PI;
}
console.log(circumference("4,5685"));
console.log(circumference("abdfkvnf"));

document.addEventListener("keyup", function () {
  console.log("Tuşa basılıp bırakıldı");
});

document.addEventListener("keydown", function () {
  console.log("Tuşa basıldı");
});

var car1 = {
  run: function () {
    console.log("Araba Çalıştı");
    if (this.onRun) {
      this.onRun();
    }
  },
};
document.onkeyup = function () {
  car1.run();
};
car.onRun = function () {
  console.log("Araba çalıştığında çalışacak fonksiyon");
};

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.width * this.height;
  }
}
var shape = new Rect(3, 4);
console.log("Alan", shape.area());

class Song {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
  }
  play() {
    console.log("Şarkı çalıyor", this.artist, this.title);
  }
}
var mySong = new Song("Barış Manço", "Dönence");
mySong.play();
