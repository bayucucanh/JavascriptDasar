// Membuat dan Menjalankan FUNCTION
var volumeA, volumeB;
var total;
function hitungVolumeKubus(a, b) {
  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;
  return total; 
}
// console.log(hitungVolumeKubus(8, 3));
// console.log(hitungVolumeKubus(10, 2));

// PARAMETER dan ARGUMENT
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

// console.log(tambah(1,2,3,4,5))

// REFACTORING
function hitungVolumeKubus(a, b) {
  return (a * a * a) + (b * b * b); 
}
// console.log(hitungVolumeKubus(5, 2))

// Variable Scope
// bagaimana sebuah variabel dapat diakses dalam program
// global scope / window scope
var a = 1;
function tes(a) {
  // console.log(a);
}
tes(a);
// console.log(a);


//  Rekursif
// sebuah fungsi yang memanggil dirirnya sendiri
// Base Case = kondisi akhir dari rekursif yang menghasilkan nilai
// NOTE : Semua looping bisa dibuat rekursif, tetapi tidak sebaliknya
function tampilAngka(n) {
  // Base Case
  if (n === 0) return;
  // console.log(n);
  tampilAngka(n-1);
}

tampilAngka(10);

// DECLARATION vs. EXPRESSION
// Declaration
function sayHallo (x) {
  // alert('Hallo ' + x);
}
sayHallo('Bayu');

// Expression
var sayHallo = function(x) {
  // alert('Hallo ' + x);
}
sayHallo('Maman')

