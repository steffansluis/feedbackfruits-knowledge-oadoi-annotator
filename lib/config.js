"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').load({ silent: true });
const { NAME = 'feedbackfruits-knowledge-oadoi-annotator', CAYLEY_ADDRESS = 'http://localhost:64210', KAFKA_ADDRESS = 'tcp://localhost:9092', INPUT_TOPIC = 'updates', OUTPUT_TOPIC = 'update_requests' } = process.env;
exports.NAME = NAME;
exports.CAYLEY_ADDRESS = CAYLEY_ADDRESS;
exports.KAFKA_ADDRESS = KAFKA_ADDRESS;
exports.INPUT_TOPIC = INPUT_TOPIC;
exports.OUTPUT_TOPIC = OUTPUT_TOPIC;
