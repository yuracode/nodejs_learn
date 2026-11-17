const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

wait(1000)
  .then(() => {
    console.log("1秒後");
    return wait(1000);
  })
  .then(() => {
    console.log("2秒後");
    return wait(1000);
  })
  .then(() => {
    console.log("3秒後");
  });
