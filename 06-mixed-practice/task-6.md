Görev 6. Üyelik Durumu Özeti

Bu görevi `task-6.js` dosyasında gerçekleştirin.

Müşteri destek ekibi, aktif üyeler için tek bir özet mesajı üreten küçük bir yardımcıya ihtiyaç duyuyor. Bu özet; kullanıcı adı, yaş, şehir bilgisi ve aktiflik kontrolünü bir araya getirmeli.

`task-6.js` içinde aşağıdaki işleri yapın:

Önce küçük bir kullanıcı profili oluşturun.
Bu profilde ad, yaş, şehir ve aktiflik durumunu ayrı değişkenlerde tutun.
Ardından bu bilgileri tek bir açıklayıcı mesajda birleştirin.
En az bir koşul kontrolü ekleyin ve sonucu bir fonksiyon içinde yazdırın.

Amaç, farklı konuları tek bir çözüm içinde birleştirebilme pratiği yapmaktır.

Aşağıdaki kodu al ve görevi tamamladıktan sonra doğruluğunu kontrol etmek için altına yapıştır. Konsola çıktılar yazdırılacaktır.

```javascript
const name = "Ali";
const age = 20;
const city = "Istanbul";
const isActive = true;

function showProfile() {
  if (age >= 18 && isActive) {
    console.log(`Ad: ${name}, Yaş: ${age}, Şehir: ${city}`);
  }
}

showProfile();
```
