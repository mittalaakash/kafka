const { Kafka } = require('kafka');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer();

const run = async () => {
  //producing
  await producer.connect();
  await producer.send({
    topic: 'frutis',
    messages: [{ value: 'mango' }],
  });
};
