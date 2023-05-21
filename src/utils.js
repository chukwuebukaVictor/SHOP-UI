export function getError(error) {
  return error.response && error.response.data.message
    ? error.response
    : error.message;
}
