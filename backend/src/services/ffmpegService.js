const ffmpeg = require("fluent-ffmpeg");

exports.addSubtitlesAndAudio = (videoPath, subtitles, audioPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .videoFilters(`subtitles=${subtitles}`)
      .audioCodec("aac")
      .output(audioPath)
      .on("end", () => resolve())
      .on("error", (err) => reject(err))
      .run();
  });
};
