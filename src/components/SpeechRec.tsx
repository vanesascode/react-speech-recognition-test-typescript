// import { useState } from "react";
import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRec = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
  };

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={copyToClipboard}>Copy Transcript</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRec;
