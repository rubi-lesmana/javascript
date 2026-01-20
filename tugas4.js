// Tugas 4 : Mengurutkan tinggi badan dari tertinggi ke terkecil
var tbSiswa1 = 179;
var tbSiswa2 = 180;
var tbSiswa3 = 150;

if (tbSiswa1 >= tbSiswa2 && tbSiswa1 >= tbSiswa3) {
  if (tbSiswa2 >= tbSiswa3) {
    console.log(tbSiswa1, tbSiswa2, tbSiswa3);
  } else {
    console.log(tbSiswa1, tbSiswa3, tbSiswa2);
  }
} else if (tbSiswa2 >= tbSiswa1 && tbSiswa2 >= tbSiswa3) {
  if (tbSiswa1 >= tbSiswa3) {
    console.log(tbSiswa2, tbSiswa1, tbSiswa3);
  } else {
    console.log(tbSiswa2, tbSiswa3, tbSiswa1);
  }
} else {
  console.log(tbSiswa3, tbSiswa2, tbSiswa1);
}
