// menangkap pilihan player
var tanya = true;
while (tanya) {
var p = prompt("Masukan pilihan Anda:  cth:gajah, semut, orang");
// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
  comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67 ) {
  comp = 'orang';
} else if (comp >= 0.67) {
  comp = 'semut';
}

//menentuka rules
var hasil = '';
if (p == comp) {
  hasil = 'SERI';
} else if (p == 'gajah') {
  // if (comp == 'orang') {
  //   hasil = 'MENANG';
  // } else {
  //   hasil = 'KALAH';
  // }
  hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang') {
  // if (comp == 'gajah') {
  //   hasil = 'KALAH';
  // } else {
  //   hasil = 'MENANG';
  // }
  hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
} else if (p == 'semut'){
  hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
  hasil = 'anda memasukan yang salah';

}
// menampilkan hasil
alert('kamu memilih ' + p + ' dan komputer memilih ' + comp + '\n' + 'Maka hasilnya ' + hasil);
tanya = confirm('Apakah ingin melanjutkan permainan? ');
}
alert('terimakasih telah bermain');
