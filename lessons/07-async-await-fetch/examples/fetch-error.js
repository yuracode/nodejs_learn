// ポケモンの情報を取ってくる。見つからなければ失敗にする
async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error(`見つかりませんでした（${res.status}）`);
  }

  return await res.json();
}

async function main() {
  try {
    const data1 = await getPokemon("pikachu");
    console.log(`${data1.name}：高さ${data1.height}、重さ${data1.weight}`);

    const data2 = await getPokemon("abcdefg");
    console.log(`${data2.name}：高さ${data2.height}、重さ${data2.weight}`);
  } catch (error) {
    console.log(`失敗：${error.message}`);
  }
}

main();
