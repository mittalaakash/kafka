const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const consumer = kafka.consumer({ groupId: 'fruits-group' });
const topic = 'fruits';

const run = async () => {
  //consume
  await consumer.connect();
  await consumer.subscribe({ topic });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        topic,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
