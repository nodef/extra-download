[Download] and extract files (with [progress]).


## console

```bash
$ download --help

  Usage
    $ download <url>
    $ download <url> > <file>
    $ download --out <directory> <url>

  Example
    $ download http://foo.com/file.zip
    $ download http://foo.com/cat.png > dog.png
    $ download --extract --strip 1 --out dest http://foo.com/file.zip
    $ download --header 'authorization: Basic foo:bar' http://foo.com/file.zip

  Options
    -e, --extract         Try decompressing the file
    -o, --out             Where to place the downloaded files
    -s, --strip <number>  Strip leading paths from file names on extraction
    --filename <string>   Name of the saved file
    --proxy <string>      Proxy endpoint
    --header <string>     HTTP header. Can be set multiple times
```



## package

```js
const fs = require('fs');
const download = require('download');

download('http://unicorn.com/foo.jpg', 'dist').then(() => {
	console.log('done!');
});

download('http://unicorn.com/foo.jpg').then(data => {
	fs.writeFileSync('dist/foo.jpg', data);
});

download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('dist/foo.jpg'));

Promise.all([
	'unicorn.com/foo.jpg',
	'cats.com/dancing.gif'
].map(x => download(x, 'dist'))).then(() => {
	console.log('files downloaded!');
});
```

### download(url, [destination], [options])

Returns both a `Promise<Buffer>` and a [Duplex stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex) with [additional events](https://github.com/sindresorhus/got#streams-1).

#### url

Type: `string`

URL to download.

#### destination

Type: `string`

Path to where your file will be written.

#### options

Type: `Object`

Same options as [`got`](https://github.com/sindresorhus/got#options) and [`decompress`](https://github.com/kevva/decompress#options) in addition to the ones below.

##### extract

Type: `boolean`<br>
Default: `false`

If set to `true`, try extracting the file using [`decompress`](https://github.com/kevva/decompress).

##### filename

Type: `string`

Name of the saved file.

##### proxy

Type: `string`

Proxy endpoint.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
