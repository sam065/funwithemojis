import React, { useState } from "react";
import "./styles.css";
var colorhead = "royalblue";
const dictionary = {
  "😵": "Adrija on life decisions.",
  "🥱": "Adrija most times.",
  "🏃‍♀️": "Adrija when someone says, 'Mouth Melto?'",
  "👴": "Aarush, the daddy of cool.",
  "😀": "Grinning.",
  "😃": "Grinning,but with extra emotions.",
  "😄": "Grinning, but cutely.",
  "😁": "Did someone say Biryani?",
  "😆": "Grinning, but Adrija has no eyes.",
  "😂": "Fake laughter",
  "🙂": "Little Khushi",
  "🙃": "Oh.",
  "😅": "Adrija talking to mama.",
  "🤴": "Aarush in Sharma parivaar.",
  "😮":
    "Aarush when Aunty does not cook dinner for him after he said he isn't hungry.",
  "": "Enter the emoji you wanna know about."
};
var emojisweknow = Object.keys(dictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");
  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = dictionary[userinput];
    if (meaning === undefined) {
      meaning = "Sorry, no idea. Move on.";
    }
    setmeaning(meaning);
  }
  function emojiclickhandler(emoji) {
    var meaning = dictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: colorhead }}>Let's see what they mean!</h1>
      <input placeholder="Put emoji here" onChange={emojiinputhandler}></input>
      <div class="output">
        <strong>{meaning}</strong>
      </div>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer", fontSize: "1.5rem", padding: "0.5rem" }}
            onClick={() => emojiclickhandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
