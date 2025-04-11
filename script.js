const cards = [
  { image: 'https://i.imgur.com/fY2m3Qa.jpg', meaning: 'ความรัก การอดทนใจ ความสัมพันธ์ดี' },
  { image: 'https://i.imgur.com/Oz8qGAB.jpg', meaning: 'เริ่มต้นใหม่ การเดินทาง' },
  { image: 'https://i.imgur.com/EoZg3qe.jpg', meaning: 'การเปลี่ยนแปลง การเติบโต' },
  { image: 'https://i.imgur.com/tQOzBoN.jpg', meaning: 'ปัญหาและบทเรียน' },
  { image: 'https://i.imgur.com/BXx6XKr.jpg', meaning: 'ความมั่นคงและความปลอดภัย' },
  { image: 'https://i.imgur.com/F5TzEjX.jpg', meaning: 'อารมณ์และความรู้สึก' },
  { image: 'https://i.imgur.com/Z2YazrI.jpg', meaning: 'ความฝันและความหวัง' },
  { image: 'https://i.imgur.com/jk3lZOd.jpg', meaning: 'การวางแผนและอนาคต' },
  { image: 'https://i.imgur.com/GYo1Svp.jpg', meaning: 'พลังและการควบคุม' },
  { image: 'https://i.imgur.com/4XrhGdp.jpg', meaning: 'การตัดสินใจและโชคชะตา' }
];

function drawCard() {
  const card = document.getElementById('card');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');
  const random = Math.floor(Math.random() * cards.length);
  const selected = cards[random];

  front.style.backgroundImage = `url(${selected.image})`;
  back.innerText = selected.meaning;

  card.style.display = 'block';
  card.classList.remove('flipped');
}

function flipCard() {
  document.getElementById('card').classList.toggle('flipped');
}
