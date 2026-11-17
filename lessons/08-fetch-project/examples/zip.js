// 郵便番号から住所を調べる：node zip.js 1000001
async function main() {
  const zipcode = process.argv[2];

  // 番号が渡されなかったとき
  if (zipcode === undefined) {
    console.log("使い方：node zip.js 郵便番号（7けた）");
    return;
  }

  try {
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
    const data = await res.json();

    // 見つからなかったとき
    if (data.results === null) {
      console.log(`〒${zipcode} は見つかりませんでした`);
      return;
    }

    // 見つかった住所をすべて表示する
    data.results.forEach(({ address1, address2, address3 }) => {
      console.log(`〒${zipcode}　${address1}${address2}${address3}`);
    });
  } catch (error) {
    console.log(`通信に失敗しました：${error.message}`);
  }
}

main();
