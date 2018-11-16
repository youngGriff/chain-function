const getResponse = result => result.json();

export default function chain (urls) {
  urls.forEach(async url =>
    console.log(await getResponse(await (fetch(url))))
  );
}
