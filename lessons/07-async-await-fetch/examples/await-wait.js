const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function main() {
  console.log("始め");

  await wait(1000);
  console.log("1秒後");

  await wait(1000);
  console.log("2秒後");
}

main();
