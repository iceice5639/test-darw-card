body {
  background: linear-gradient(to bottom, #1b1b2f, #3a3a5c);
  color: white;
  font-family: 'Georgia', serif;
  text-align: center;
  padding: 2rem;
}

#deck {
  width: 150px;
  height: 200px;
  margin: 30px auto;
  background-image: url('https://i.imgur.com/6Oe7cKU.png');
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  transition: transform 0.3s;
}
#deck:hover {
  transform: scale(1.05);
}

#card {
  width: 150px;
  height: 200px;
  margin: 0 auto;
  perspective: 1000px;
  display: none;
}

#card .front, #card .back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  transition: transform 0.6s;
}

#card .front {
  transform: rotateY(0deg);
}

#card .back {
  background: #fff;
  color: #000;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1rem;
}

#card.flipped .front {
  transform: rotateY(180deg);
}

#card.flipped .back {
  transform: rotateY(360deg);
}

