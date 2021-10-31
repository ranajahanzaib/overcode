/**
 * Returns a time object with the current time.
 * @param  {string} date Returns current date
 * @param  {string} time Returns current time
 * @param {string} timestamp Returns current timestamp
 */
const time = () => {
  const obj = {
    now: () => {
      return {
        time: new Date().toString(),
        date: new Date().toLocaleDateString(),
      };
    },
  };
  return obj;
};

export { time };
