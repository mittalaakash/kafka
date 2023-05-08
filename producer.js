const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer();

const run = async () => {
  //producing
  await producer.connect();
  await producer.send({
    topic: 'testing',
    messages: [{ value: 'dedfault' }],
  });
};

run().catch(console.error);
