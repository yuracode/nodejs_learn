async function main() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");

  let count = 0;
  let total = 0;

  // res.body から、届いたかたまりを1つずつ受け取る
  for await (const chunk of res.body) {
    count++;
    total = total + chunk.length;
    console.log(`${count}個目のかたまり：${chunk.length}バイト`);
  }

  console.log(`全部で${total}バイト`);
}

main();
