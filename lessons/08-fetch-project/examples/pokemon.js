// ポケモンの情報を調べる：node pokemon.js pikachu
async function main() {
  const name = process.argv[2];

  if (name === undefined) {
    console.log("使い方：node pokemon.js 名前（英語の小文字）か番号");
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      console.log(`${name} は見つかりませんでした`);
      return;
    }

    const data = await res.json();
    const types = data.types.map(({ type }) => type.name).join("、");

    console.log(`No.${data.id} ${data.name}`);
    console.log(`タイプ：${types}`);
    console.log(`高さ：${data.height}　重さ：${data.weight}`);
  } catch (error) {
    console.log(`通信に失敗しました：${error.message}`);
  }
}

main();
