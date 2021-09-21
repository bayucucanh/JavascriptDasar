// ARRAY
// Susunan sistematis dari objek - objek yang serupa.
// Tipe data digunakan untuk mendefinisikan kumpulan elemen (nilai atau variabel), yang setiap elemennya memiliki index.
var myFunc = function() {
  alert('Hello World');
}
myArr = ['teks', 2, false,myFunc, [4,5,6]];
// console.log(myArr[4][1]); 

// Manupulation ARRAY
// 1. Menambah Elemen Array
var arr1 = [];
arr1[0] = 'Bayu';
arr1[1] = 'Cucan';
arr1[2] = 'Herdian';
arr1[3] = 'Ganteng';
arr1[4] = 'KING';
// console.log(arr1);

// 2. Menghapus Elemen Array
// arr1[1] = undefined;
// console.log(arr1);
for (var i = 0; i < arr1.length; i++) {
  // console.log(arr1[i]);
}

// Method pada Array
// 1. JOIN
// console.log(arr1.join(Separator untuk menggantikan Koma (,) seperti ' - '));

// 2. Push (Menambah) & Pop (Menghapus) dibagian TERAKHIR
// arr1.push('Isi Elemen yang akan ditambahkan');
// arr1.pop();

// 3 Unshift (Menambah) & Shift (Menghapus) dibagian PERTAMA
// arr1.unshift('Isi Elemen yang akan ditambahkan');
// arr.shift();

// 4 Slice (Mengiris bagian pada array untuk dibuat array baru) & Splice (Menyambung)
// 4.1 Splice (indexAwal, mauDiHapusBerapa, elemenBaru, elemenBaru2, .... )
// arr1.splice(2, 1, 'KING', 'Cans');
// console.log(arr1.join(' - '));

// 4.2 Slice (indexAwal, indexAkhir)
// var arr2 = arr1.slice(1, 3);
// console.log(arr2.join(' - '));

// 5. foreach & Map
// 5.1 forEach
var ang = [8,20,11,6,3,9,4,5,2,1];
// ang.forEach(function(e){
//   console.log(e);
// }) 
// arr1.forEach(function(e, i) {
//   // NOTE : i mengacu pada index | e mengacu pada elemennya
//   console.log('Mahasiswa ke- ' + (i+1) + ' adalah: ' + e);
// })

// 5.2 Map
// Mengembalikan array
// var ang2 = ang.map(function(e){
//   return e * 2;
// }) 
// console.log(ang2.join(' - '));

// 6. Sort
// Mengurut
// var ang = [8,2,1,6,3,9,4,5];
// console.log(ang.join(' - ')); // belum diurutkan
// ang.sort(); // belum bisa mengurutkan angka diatas 9
// bisa mengurutkan angka diatas 9 dengan menambah function
// ang.sort(function(a,b){
//   return a-b;
// })
// console.log(ang.join(' - ')); // sesudah diurutkan

// 6. Filter & Find
// Method yang berfungsi untuk mencari elemen pada array
// Find hanya dapat menemukan 1 nilai sedangkan filtel bisa banyak nilai
// 6.1 Filter
// Mencari nilai pada array dan mengembalikannya dalam bentuk array
// var ang = [8,20,11,6,3,9,4,5,2,1];
// var ang2 = ang.filter(function(e) {
//   return e > 5;
// });
// console.log(ang2.join(' - '));

// 6.2 Find
var ang2 = ang.find(function(e) {
  return e > 5;
});
console.log(ang2);


