const cards = [
  { image: 'https://i.imgur.com/FY2m3Qa.jpg', meaning: 'ความรัก การอุทิศใจ ความสัมพันธ์' },
  { image: 'https://i.imgur.com/Oz8gGAB.jpg', meaning: 'เริ่มต้นใหม่ การเดินทาง' },
  { image: 'https://i.imgur.com/EoZg3qe.jpg', meaning: 'การเปลี่ยนแปลง การเติบโต' },
  { image: 'https://i.imgur.com/tQQzBoN.jpg', meaning: 'ปัญหาและบทเรียน' },
  { image: 'https://i.imgur.com/BX6x6rK.jpg', meaning: 'อำนาจและความปลอดภัย' },
  { image: 'https://i.imgur.com/F5TiEzF.jpg', meaning: 'ความเสียสละ ความรู้สึก' },
  { image: 'https://i.imgur.com/ZZYazr1.jpg', meaning: 'ความฝันและความหวัง' },
  { image: 'https://i.imgur.com/Xi3L0rd.jpg', meaning: 'ความทนและอุปสรรค' },
  { image: 'https://i.imgur.com/GYOlSvp.jpg', meaning: 'พลังและการควบคุม' },
  { image: 'https://i.imgur.com/4XrhGdp.jpg', meaning: 'การตัดสินใจและโชคชะตา' }
];

function drawCard() {
  const cardContainer = document.getElementById('card');
  const front = cardContainer.querySelector('.front');
  const meaningText = cardContainer.querySelector('.meaning');

  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  console.log("🎴 กำลังสุ่มไพ่...");
  console.log("🖼️ รูปภาพไพ่:", randomCard.image);
  console.log("🔮 คำทำนาย:", randomCard.meaning);

  front.src = randomCard.image;
  meaningText.textContent = randomCard.meaning;

  cardContainer.classList.remove('hidden');
}
