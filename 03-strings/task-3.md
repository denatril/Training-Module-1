Görev 3. Profil Kartı Hazırlığı

Bu görevi `task-3.js` dosyasında gerçekleştirin.

Ürün ekibi, kullanıcı profil kartında gösterilecek isim alanını hazırlıyor. Ad ve soyadın tek bir satırda gösterilmesi, açıklama metninin uzunluğunun ölçülmesi ve metnin başı ile sonunun kontrol edilmesi gerekiyor.

`task-3.js` içinde aşağıdaki işleri yapın:

Ad ve soyad için iki ayrı değişken oluşturun.
Bu iki değeri birleştirerek tam adı tek bir string olarak üretin.
Daha sonra başka bir metin belirleyin ve bu metnin uzunluğunu ölçün.
Aynı metnin ilk ve son karakterini de ekrana yazdırın.
Gerekirse string index mantığını kullanın.

Amaç, stringlerle temel manipülasyon pratiği yapmaktır.

Aşağıdaki kodu al ve görevi tamamladıktan sonra doğruluğunu kontrol etmek için altına yapıştır. Konsola çıktılar yazdırılacaktır.

```javascript
const firstName = "Ali";
const lastName = "Yilmaz";

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const message = "JavaScript öğreniyorum";
console.log(message.length);
console.log(message[0]);
console.log(message[message.length - 1]);
```
