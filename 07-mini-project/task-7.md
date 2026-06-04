Görev 7. Not Sorgu Sistemi

Bu görevi `task-7.js` dosyasında gerçekleştirin.

Bir okul yönetim paneli için basit bir not sorgulama sistemi hazırlanıyor. Öğrenci adı ve notu alınacak, not durumuna göre geçme ya da kalma mesajı üretilecek ve bu akış en az iki fonksiyonla yönetilecek.

`task-7.js` içinde aşağıdaki işleri yapın:

Öğrenci adı tutulmalıdır.
Öğrenci notu tutulmalıdır.
Geçme durumu kontrol edilmelidir.
En az 2 fonksiyon kullanılmalıdır.

Mantık:

Not 50 ve üzerindeyse öğrenci geçer.
Not 50'nin altındaysa öğrenci kalır.

Amaç, öğrendiğiniz konuları küçük ama tam bir senaryoda birleştirmektir.

Aşağıdaki kodu al ve görevi tamamladıktan sonra doğruluğunu kontrol etmek için altına yapıştır. Konsola çıktılar yazdırılacaktır.

```javascript
const studentName = "Ali";
const score = 72;

function getResult(score) {
  if (score >= 50) {
    return "Geçti";
  }
  return "Kaldı";
}

function showStudentInfo(name, score) {
  console.log(`Öğrenci: ${name}`);
  console.log(`Not: ${score}`);
  console.log(`Durum: ${getResult(score)}`);
}

showStudentInfo(studentName, score);
```
