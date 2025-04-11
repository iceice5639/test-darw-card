const cards = [
  { image: 'images/card1.png', meaning: 'ความรัก การอุทิศใจ ความสัมพันธ์' },
  { image: 'images/card2.png', meaning: 'เริ่มต้นใหม่ การเดินทาง' },
  { image: 'images/card3.png', meaning: 'การเปลี่ยนแปลง การเติบโต' },
  { image: 'images/card4.png', meaning: 'ปัญหาและบทเรียน' },
  { image: 'images/card5.png', meaning: 'อำนาจและความปลอดภัย' },
  { image: 'images/card6.png', meaning: 'ความเสียสละ ความรู้สึก' },
  { image: 'images/card7.png', meaning: 'ความฝันและความหวัง' },
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
