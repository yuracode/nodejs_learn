// 地名から今の気温を調べる：node weather.js Tokyo
async function getPlace(name) {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=ja`);
  const data = await res.json();

  // 見つからないときは results がない
  if (data.results === undefined) {
    throw new Error(`${name} は見つかりませんでした`);
  }
  return data.results[0];
}

async function getTemperature(latitude, longitude) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
  const data = await res.json();
  return data.current.temperature_2m;
}

async function main() {
  const name = process.argv[2];

  if (name === undefined) {
    console.log("使い方：node weather.js 地名（英語。Tokyo、Osaka など）");
    return;
  }

  try {
    const place = await getPlace(name);
    const temperature = await getTemperature(place.latitude, place.longitude);
    console.log(`${place.name}の今の気温は${temperature}℃です`);
  } catch (error) {
    console.log(`失敗：${error.message}`);
  }
}

main();
