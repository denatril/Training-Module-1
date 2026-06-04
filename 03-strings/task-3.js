// Görev 3: Profil Kartı Hazırlığı
// Amaç: Kullanıcı bilgilerini tek bir profil alanında toplama pratiği yapın. Ad ve soyadı birleştirerek tam adı oluşturun,
// bir string'in uzunluğunu ölçün ve hem ilk hem de son karakterini ekrana yazdırın.
// Referans: ./task-3.md

const firstName = "Ali";
const lastName = "Yilmaz";

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const message = "JavaScript öğreniyorum";
console.log(message.length);
console.log(message[0]);
console.log(message[message.length - 1]);