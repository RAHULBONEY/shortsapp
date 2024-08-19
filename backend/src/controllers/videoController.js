const multer = require("multer");
const ffmpegService = require("../services/ffmpegService");
const upload = multer({ dest: "public/uploads/" });

(exports.uploadVideo = upload.single("video")),
  (req, res) => {
    res.json({ message: "Video uploaded successfully!" });
  };

exports.processVideo = async (req, res) => {
  const { subtitles, audio } = req.body;
  try {
    await ffmpegService.addSubtitlesAndAudio(req.file.path, subtitles, audio);
    res.json({ message: "Video processed successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
