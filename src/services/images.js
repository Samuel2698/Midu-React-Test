export async function getImages({ threeFirtsWords }) {
  const res = await fetch(
    `https://cataas.com/cat/says/${threeFirtsWords}?size=50&color=red&json=true`
  );
  const res_2 = await res.json();
  const { url } = res_2;
  return `${url}`;
}
