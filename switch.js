var angka = 0;
var batagor = 0;
var mieAyam = 0;
var cilokGoang = 0;
alert("Pilih Menu \n 1. Batagor \n 2. Mie Ayam \n 3. Cilok goang");
while (angka !== 4) {
  var angka = parseInt(prompt("Masukan angka: "));
switch (angka) {
  case 1: batagor = batagor + parseInt(prompt("Masukan Jumlah: ")); break;
  case 2: mieAyam = mieAyam + parseInt(prompt("Masukan Jumlah: ")); break;
  case 3: cilokGoang = cilokGoang + parseInt(prompt("Masukan Jumlah: ")); break;
  case 4: alert("Terimakasih, silahkan tunggu!!!");break;
  default : alert("Menu tidak ada"); break;
}

}
alert("Batagor = " + batagor + "\nMie Ayam = " + mieAyam + "\nCilok Goang = " + cilokGoang);
