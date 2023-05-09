const { Kafka } = require('kafkajs');
const getRandomFruitsName = require('random-fruits-name');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer();
const topic = 'fruits';

const produceMessage = async () => {};

const run = async () => {
  //producing
  await producer.connect();
  setInterval(produceMessage, 1000);
};

run().catch(console.error);
