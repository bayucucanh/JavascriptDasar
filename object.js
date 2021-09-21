// OBJECT
// Kumpulan nilai, yang memiliki nama.
// Membuat object
var mahasiswa = {
  // properti
  nama : 'Bayu',
  umur : 20,
  ips : [3.49, 3.57, 3.60],
  // method
  ipk : function() {
    var total = 0;
    var ips2 = this.ips;
    for (var i = 0; i < ips2.length; i++) {
      total += this.ips[i];
    }
    return total/this.ips.length;
  },
  alamat : {
    jalan : 'Jalan babakan-ciwaruga No.17',
    kota : 'Bandung Barat',
    provinsi : 'Jawa Barat'
  } 
};
// console.log(mahasiswa.nama);
// console.log(mahasiswa.ipk());
// console.log(mahasiswa.alamat.kota);
// console.log(mahasiswa.alamat['jalan']);

 
/* Membuat OBJECT
1. Object Literal
2. Function Declaration
3. Constructor Function (Keyword new)
4. object.create()
*/

// Object Literal
var mhs = {
  nama : 'Bayu Cucan Herdian',
  nrp : '193040058',
  email : 'bayucucan36@gmail.com',
  jurusan : 'Teknik Informatika'
};

var mhs2 = {
  nama : 'Maman',
  nrp : '193040051',
  email : 'maman296@gmail.com',
  jurusan : 'Teknik Pangan'
}

// Function Declration
function objectMhs(nama, nrp, email, jurursan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurursan = jurursan;
  return mhs;
}

var mhs3 = objectMhs('Jajang', '193040061', 'jajang33@yahoo.com', 'Teknik Mesin');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurursan = jurusan;
}

var mhs4 = new Mahasiswa('Cardia', '193040057', 'cardia@cloud.com', 'Teknik Perkebunan');

/* THIS */

// Cara 1 - Function Declaration
// THIS mengembalikan Object global
// function halo() {
//   console.log(this);
//   console.log('Halo');
// }
// halo();

// Cara 2 - object literal
// THIS mengembalikan Object yang bersangkutan
// var obj = {s : 'Bayu', b : 20};
// obj.halo = function halo(){
//   console.log(this);
//   console.log('halo');
// }
// obj.halo();

// Cara 3 - Constructor
// THIS mengembalikan object yang baru dibuat
function Halo() {
  console.log(this);
  console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
