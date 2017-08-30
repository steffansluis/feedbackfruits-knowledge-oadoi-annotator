require('dotenv').load({ silent: true });

const {
  NAME = 'feedbackfruits-knowledge-oadoi-annotator',
  CAYLEY_ADDRESS = 'http://localhost:64210',
  KAFKA_ADDRESS = 'tcp://localhost:9092',
  INPUT_TOPIC = 'updates',
  OUTPUT_TOPIC = 'update_requests'
} = process.env;

export {
  NAME,
  CAYLEY_ADDRESS,
  KAFKA_ADDRESS,
  INPUT_TOPIC,
  OUTPUT_TOPIC,
}
