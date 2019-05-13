let puan = prompt("Puanınızı giriniz: ");

if (puan <= 100 && puan >= 85) {
  console.log("Pekiyi");
  document.write("Pekiyi");
} else if (puan < 85 && puan >= 70) {
  console.log("İyi");
  document.write("İyi");
} else if (puan < 70 && puan >= 55) {
  console.log("Orta");
  document.write("Orta");
} else if (puan < 55 && puan >= 45) {
  console.log("Geçer Not");
  document.write("Geçer Not");
} else if (puan < 45 && puan >= 25) {
  console.log("Geçersiz Not");
  document.write("GEçersiz Not");
} else if (puan < 25 && puan >= 0) {
  console.log("DErs Tekrarı");
  document.write("Ders Tekrarı");
}
