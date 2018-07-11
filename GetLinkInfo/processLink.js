const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { getMetadata}  = require('page-metadata-parser');

const fetchHtml = function(url) {
    return fetch(url).then(res => res.text());
}

const processLink = function(url) {
    console.log(url);
    return fetchHtml(url).then(html => {
        let dom = new JSDOM(html);
        let metadata = getMetadata(dom.window.document, url);
        return metadata;
    });
}
module.exports = processLink;