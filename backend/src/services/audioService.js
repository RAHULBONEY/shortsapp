const axios = require("axios");
const fs = require("fs");
const path = require("path");

exports.generateNarration = async (text) => {
  const response = await axios.post("https://api.text-to-speech.com/generate", {
    text,
  });
  const audioPath = path.join(__dirname, "../public/output/narration.mp3");
  fs.writeFileSync(audioPath, response.data.audioContent, "base64");
  return audioPath;
};
