const audioService = require("../services/audioService");

exports.generateNarration = async (req, res) => {
  const { text } = req.body;
  try {
    const audioPath = await audioService.generateNarration(text);
    res.json({ audioPath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
