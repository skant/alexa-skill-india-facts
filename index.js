'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = null; //App Id here

var SKILL_NAME = 'Amazing India Facts';

var FACTS = [
        "India is the world's largest, oldest, continuous civilization",
        "India is the world's Largest democracy",
        "India never invaded any country in her last 1000 years of history",
        "India invented the number system. Zero was invented by Aryabhatta",
        "Sanskrit is the mother of all the European Languages",
        "Chess was invented in India",
        "India has the second largest pool of Scientist and Engineers in the World",
        "India is the largest English speaking nation in the world",
        "India is the only country other than US and Japan, to have built a super computer indeigenously",
        "India has the largest number of Post Offices in the world",
        "One of the largest employer in the world is the Indian Railways, employing over a million people",
        "India was one of the richest countries till the time of British rule in the early 17th Century"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'AmazingIndiaFacts': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];
        var speechOutput = "Here's your amazing India fact: " + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me an amazing India fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'Unhandled': function () {
        this.emit(':tell', 'Oops!');
    }
};
