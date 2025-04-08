[Download] and extract files (with [progress]).

## console

```bash
$ download [options] <url>
# --help: show help
# -o | --out:     Where to place the downloaded files
# -e | --extract: Try decompressing the file
# -s | --strip <number>: Strip leading paths from file names on extraction
# --filename <string>: Name of the saved file
# --proxy <string>:    Proxy endpoint
# --header <string>:   HTTP header. Can be set multiple times

$ download http://foo.com/file.zip
$ download http://foo.com/cat.png > dog.png
$ download --extract --strip 1 --out dest http://foo.com/file.zip
$ download --header 'authorization: Basic foo:bar' http://foo.com/file.zip
```


## package

```js
const fs = require('fs');
const download = require('extra-download');
// download(<url>, [out], [options])
// -> Promise<Buffer> & <Duplex Stream> with additional events

// [options]: {
//   extract: false, // try decompressing the file?
//   filename: null, // name of the saved file
//   proxy: null,    // proxy endpoint
//   progress: new Progress(...), // progress object (null to disable)
//   onresponse: /* handler */    // download stream response handler
// }


await download('http://unicorn.com/foo.jpg', 'dist');
console.log('done!');

var data = await download('http://unicorn.com/foo.jpg');
fs.writeFileSync('dist/foo.jpg', data);

var stream = download('unicorn.com/foo.jpg');
stream.pipe(fs.createWriteStream('dist/foo.jpg'));

var urls = [
	'unicorn.com/foo.jpg',
	'cats.com/dancing.gif'
];
await Promise.all(urls.map(url => download(url, 'dist')));
console.log('files downloaded!');
```



[![Merferry](https://i.imgur.com/lKwA6yH.jpg)](https://merferry.github.io)
> See about [Duplex stream], and [additional events].<br>
> See the original modules: [download], [download-cli].

![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-download)

[Duplex stream]: https://nodejs.org/api/stream.html#stream_class_stream_duplex
[additional events]: https://github.com/sindresorhus/got#streams-1
[Download]: https://www.npmjs.com/package/download
[download]: https://www.npmjs.com/package/download
[download-cli]: https://www.npmjs.com/package/download-cli
[progress]: https://www.npmjs.com/package/progress
