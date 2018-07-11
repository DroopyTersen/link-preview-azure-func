let processLink = require("./processLink");

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.query.url) {
        processLink(req.query.url).then(linkInfo => {
            context.res = {
                body: linkInfo
            };
            context.done();
        }).catch(err => {
            context.res = {
                status: 500,
                body: JSON.stringify(err, null, '  ')
            }
        })
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a url on the query string"
        };
        context.done();
    }
};