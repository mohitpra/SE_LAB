import db from './db';

const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

const onError = async (err, res) => {
  await db.disconnect();
  res.status(500).send({ message: err.toString() });
};

export { getError, onError };
