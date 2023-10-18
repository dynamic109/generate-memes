import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const [memeText, setMemeText] = React.useState({
    topText: "",
    bottomText: "",
  });

  function getUrl() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

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
        <button onClick={getUrl}>Get a new meme image 🖼</button>
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
