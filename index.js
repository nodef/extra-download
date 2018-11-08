const downloadCli = require('download-cli');
const download = require('download');
const Progress = require('progress');


// Global variables.
const FORMAT = '[:bar] :percent :etas';
const OPTIONS = {
  complete: '=',
  incomplete: ' ',
  width: 20,
  total: 0
};


/**
 * Download and extract files (with progress).
 * @param {string} url URL to download.
 * @param {string} [dst] Path to where your file will be written.
 * @param {object} [opt] Options for "download", progress, onresponse.
 */
function edownload(url, dst, opt) {
  var o = (opt || typeof dst==='string'? opt:dst)||{};
  var bar = o.progress===undefined? new Progress(FORMAT, OPTIONS):o.progress;
  return download(url, dst, opt).on('response', o.onresponse||(res => {
    if(bar==null) return;
    bar.total = res.headers['content-length'];
    res.on('data', dat => bar.tick(dat.length));
  }));
};
module.exports = edownload;
