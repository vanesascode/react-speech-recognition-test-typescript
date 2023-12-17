# Speech recognition using react-speech-recognition (with Typescript)

You can check the Javascript test [HERE](https://github.com/vanesascode/react-speech-recognition-test-javascript)

`npm i react-speech-recognition`

`npm i regenerator-runtime`

In order to make the same in Typescript, you must also install the types library for 'react-speech-recognition'

`npm i --save-dev @types/react-speech-recognition`

Also, you need to change this line:

```
    <button onClick={SpeechRecognition.startListening}>Start</button>
```

By this line:

```
 <button onClick={() => SpeechRecognition.startListening()}>Start</button>
```

This is because the type mismatch in the onClick event handler of the button. `The onClick event handler expects a function that takes a MouseEvent as a parameter`, but the SpeechRecognition.startListening function doesn't match that signature.

The way to fix the error, is wrapping the SpeechRecognition.startListening function with an arrow function that doesn't take any parameters. When you use the arrow function syntax () => SpeechRecognition.startListening(), `you're creating a new function that doesn't have any parameters.`

By wrapping SpeechRecognition.startListening with an arrow function, you're providing a function that matches the `expected signature for the onClick event handler`.

---

by Vanesascode.
