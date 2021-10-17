// Returns an time object
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
