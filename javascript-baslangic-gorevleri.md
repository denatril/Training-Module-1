# JavaScript Başlangıç Seviyesi Pratik Görevleri

## Görev 1. Hoş Geldin Mesajı

Bu görevi `task-1.js` dosyasında gerçekleştirin.

`createWelcomeMessage` fonksiyonunu oluşturun.

Fonksiyon iki parametre almalıdır:

- `firstName` — kullanıcının adı (`string`)
- `lastName` — kullanıcının soyadı (`string`)

Fonksiyon, kullanıcının ad ve soyadını birleştirerek şu formatta bir string döndürmelidir:

`"Merhaba, <firstName> <lastName>! Uygulamaya hoş geldin."`

Burada:

- `<firstName>` → kullanıcının adı
- `<lastName>` → kullanıcının soyadı

Örnek kullanım:

`createWelcomeMessage("Elif", "Yılmaz")`

Beklenen çıktı:

`"Merhaba, Elif Yılmaz! Uygulamaya hoş geldin."`

Gereksinimler:

- `return` kullanılmalıdır, `console.log` kullanılmamalıdır.
- Mesaj oluştururken template literal (`${}`) kullanılmalıdır.
- String birleştirme mantığı uygulanmalıdır.
- Sadece fonksiyon yazılması beklenir.
- Çözüm kodu verilmemelidir.

## Görev 2. Kargo Uygunluk Kontrolü

Bu görevi `task-2.js` dosyasında gerçekleştirin.

`isShippingAllowed` fonksiyonunu oluşturun.

Fonksiyon iki parametre almalıdır:

- `packageWeight` — paketin ağırlığı (`number`)
- `maxWeight` — izin verilen en yüksek ağırlık (`number`)

Fonksiyon, paketin gönderime uygun olup olmadığını kontrol etmeli ve bir boolean değer döndürmelidir.

Kural:

- Eğer `packageWeight`, `maxWeight` değerinden küçük veya eşitse `true`
- Aksi durumda `false`

Örnek kullanım:

`isShippingAllowed(12, 15)`

Beklenen çıktı:

`true`

Gereksinimler:

- `return` kullanılmalıdır, `console.log` kullanılmamalıdır.
- Karşılaştırma operatörü kullanılmalıdır.
- Fonksiyon bir boolean değer döndürmelidir.
- Sonuç oluşturulurken template literal (`${}`) içeren bir ifade kullanılmalıdır.
- Sadece fonksiyon yazılması beklenir.
- Çözüm kodu verilmemelidir.

## Görev 3. Abonelik Durumu Mesajı

Bu görevi `task-3.js` dosyasında gerçekleştirin.

`getSubscriptionMessage` fonksiyonunu oluşturun.

Fonksiyon üç parametre almalıdır:

- `userName` — kullanıcı adı (`string`)
- `isPremium` — kullanıcının premium olup olmadığı (`boolean`)
- `daysLeft` — aboneliğin kaç gün geçerli olduğu (`number`)

Fonksiyon, kullanıcı durumuna göre şu formatlardan birini döndürmelidir:

- Premium kullanıcılar için: `"<userName>, premium üyeliğin <daysLeft> gün daha aktif."`
- Premium olmayan kullanıcılar için: `"<userName>, ücretsiz üyelik kullanıyorsun."`

Örnek kullanım:

`getSubscriptionMessage("Mert", true, 14)`

Beklenen çıktı:

`"Mert, premium üyeliğin 14 gün daha aktif."`

Gereksinimler:

- `return` kullanılmalıdır, `console.log` kullanılmamalıdır.
- `if` koşulu kullanılmalıdır.
- Karşılaştırma operatörü kullanılmalıdır.
- Template literal (`${}`) kullanılmalıdır.
- String ve boolean veri türleri birlikte kullanılmalıdır.
- Sadece fonksiyon yazılması beklenir.
- Çözüm kodu verilmemelidir.

## Görev 4. Günlük Mesai Uygunluğu

Bu görevi `task-4.js` dosyasında gerçekleştirin.

`canStartShift` fonksiyonunu oluşturun.

Fonksiyon iki parametre almalıdır:

- `currentHour` — mevcut saat (`number`)
- `shiftStartHour` — mesainin başlama saati (`number`)

Fonksiyon, çalışanın mesaiye başlayıp başlayamayacağını kontrol etmelidir.

Kural:

- Eğer `currentHour`, `shiftStartHour` değerinden büyük veya eşitse `true`
- Aksi durumda `false`

Örnek kullanım:

`canStartShift(9, 8)`

Beklenen çıktı:

`true`

Gereksinimler:

- `return` kullanılmalıdır, `console.log` kullanılmamalıdır.
- `if` koşulu kullanılmalıdır.
- Karşılaştırma operatörü kullanılmalıdır.
- Fonksiyon bir boolean değer döndürmelidir.
- Sonuç bir template literal (`${}`) ile üretilecek ara bir ifade içinde kullanılmalıdır.
- Sadece fonksiyon yazılması beklenir.
- Çözüm kodu verilmemelidir.

## Görev 5. Ürün Etiket Mesajı

Bu görevi `task-5.js` dosyasında gerçekleştirin.

`createProductLabel` fonksiyonunu oluşturun.

Fonksiyon üç parametre almalıdır:

- `productName` — ürün adı (`string`)
- `price` — ürün fiyatı (`number`)
- `currency` — para birimi simgesi (`string`)

Fonksiyon, ürünü açıklayan şu formatta bir string döndürmelidir:

`"<productName> ürününün fiyatı <price><currency>."`

Örnek kullanım:

`createProductLabel("Kulaklık", 799, "₺")`

Beklenen çıktı:

`"Kulaklık ürününün fiyatı 799₺."`

Gereksinimler:

- `return` kullanılmalıdır, `console.log` kullanılmamalıdır.
- Template literal (`${}`) kullanılmalıdır.
- String birleştirme mantığı kullanılmalıdır.
- Değişken isimleri modern JavaScript standartlarına uygun olmalıdır.
- Sadece fonksiyon yazılması beklenir.
- Çözüm kodu verilmemelidir.

