/// <reference types="ion.web" />

ionweb.module("speech-recognition")((registry: ionweb.IRegistry) => {

    // require is a webpack command to build the dependency tree.
    require('./speechRecognition.ts');

    var category = registry.category("speechRecognition", "SpeechRecognition");
    category.components.push({
        displayName: "Speech Recognition",
        id: "speech-recognition",
        template: require('./speechRecognition.tpl.html') 
    });
});