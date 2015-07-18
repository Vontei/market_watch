var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var eyes = require('eyes')
var xml2js = require('xml2js');

var parser = new xml2js.Parser();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



router.post('/', function(req,res,next){
  var query = req.body.search;
  var req = unirest.get('http://www.enclout.com/api/v1/yahoo_finance/show.json?auth_token=' + process.env.KEY + '&text=' + query)
    .header("X-Mashape-Key", "jatokGS4ySmshq7MUKkwu1N7bBYsp1QGs1ejsnbBUtPrUxsFNL")
    .header("Accept", "application/json")
    .end(function (result) {
    console.log(result.body);
    res.render('index', {res: result.body});
})
})


router.get('/tradier', function(req,res,next){
  var req = unirest.get("https://sandbox.tradier.com/v1/markets/quotes?symbols=spy")
    .header("Authorization", 'Bearer eegDvVowTJGwUm22DXJVN5XMQh7u')
    .header("X-Mashape-Key", "jatokGS4ySmshq7MUKkwu1N7bBYsp1QGs1ejsnbBUtPrUxsFNL")
    .header("Accept", "text/plain")
    .end(function (result) {
      parser.on('end', function(result) {
        eyes.inspect(result);
        console.log(result.quotes.quote)
        res.render('market', {res: result.quotes.quote[0]})
      });
  var response = parser.parseString(result.body)
});
});





module.exports = router;
