async function main() {
  const res = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=1000001");
  const data = await res.json();

  console.log(data);

  // 必要な値だけを取り出す（第5回の分割代入）
  const { address1, address2, address3 } = data.results[0];
  console.log(`${address1}${address2}${address3}`);
}

main();
