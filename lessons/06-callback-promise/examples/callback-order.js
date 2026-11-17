setTimeout(() => {
  console.log("1秒後");
  setTimeout(() => {
    console.log("2秒後");
    setTimeout(() => {
      console.log("3秒後");
    }, 1000);
  }, 1000);
}, 1000);
