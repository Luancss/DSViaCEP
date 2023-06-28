export default function RequestException(message) {
  const error = new Error(message);
  return error;
}

RequestException.prototype = Object.create(Error.prototype);