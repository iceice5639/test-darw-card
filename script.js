const cards = [
  { image: 'https://i.imgur.com/fY2m3Qa.jpg', meaning: 'ความรัก การออกหน้าใจ ความสัมพันธ์' },
  { image: 'https://i.imgur.com/Oz8gGAB.jpg', meaning: 'เริ่มต้นใหม่ การเดินทาง' },
  { image: 'https://i.imgur.com/Eo2g3qe.jpg', meaning: 'การเปลี่ยนแปลง การเติบโต' },
  { image: 'https://i.imgur.com/tQ0zBoN.jpg', meaning: 'ปัญหาและบทเรียน' },
  { image: 'https://i.imgur.com/BXb6XrK.jpg', meaning: 'ความมั่นคงและความปลอดภัย' },
  { image: 'https://i.imgur.com/F5TzEjK.jpg', meaning: 'การเสียสละความรู้สึก' },
  { image: 'https://i.imgur.com/ZZYazr1.jpg', meaning: 'ความฝันและความหวัง' },
  { image: 'https://i.imgur.com/3Kl1Ozd.jpg', meaning: 'ความขัดแย้งและอุปสรรค' },
  { image: 'https://i.imgur.com/GYOl5vp.jpg', meaning: 'พลังและการควบคุม' },
  { image: 'https://i.imgur.com/4XrhGdp.jpg', meaning: 'การตัดสินใจและโชคชะตา' }
];

function drawCard() {
  const random = cards[Math.floor(Math.random() * cards.length)];
  const card = document.getElementById('card');
  const front = card.querySelector('.front');
  const meaning = card.querySelector('.meaning');

  front.src = random.image;
  meaning.textContent = random.meaning;
  
  card.classList.remove('hidden');

  // เพิ่มแอนิเมชันใหม่ทุกครั้ง
  card.style.animation = 'none';
  void card.offsetWidth; // trick เพื่อรีเฟรชแอนิเมชัน
  card.style.animation = 'bounceIn 0.6s ease';
}
