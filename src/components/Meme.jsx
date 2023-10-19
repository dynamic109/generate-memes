import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  const [memeText, setMemeText] = React.useState({
    topText: "",
    bottomText: "",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMeme(data.data.memes);
      });
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMemeText((prevMemeText) => ({
      ...prevMemeText,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={memeText.topText}
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Botttom text"
          onChange={handleChange}
          value={memeText.bottomText}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-container" />
        <h2 className="meme-text top">{memeText.topText}</h2>
        <h2 className="meme-text bottom">{memeText.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
