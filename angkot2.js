var jAngkot = 10;
var angkotBeroperasi = 5;
var angkot = 1;
// while (angkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + angkot + " beroperasi dengan baik");
//   angkot++;
// }

// for (angkot = angkotBeroperasi + 1; angkot <= jAngkot; angkot++) {
//   console.log("Angkot No. " + angkot + " tidak beroperasi dengan baik");
// }

for (angkot = 1; angkot <= jAngkot; angkot++) {
  if (angkot <= 6 && angkot !== 5 ) {
    console.log("angkot No. " + angkot + " beroperasi dengan baik");
  } else if (angkot === 8 ||  angkot === 5 || angkot === 10) {
    console.log("angkot No " + angkot + " sedang lembur");
  } else {
    console.log("angkot No. " + angkot + " tidak beroperasi dengan baik");
  }
}


while(menu !== 4) {
  var menu = prompt("Masukan Menu: ");
  switch (menu) {
    case 1: console.log("Ini adalah Menu No. " + menu); break;
    case 2: console.log("Ini adalah Menu No. " + menu); break;
    case 3: console.log("Ini adalah Menu No. " + menu); break;
    case 4: console,log("Terimakasih!!!");
  }
}
