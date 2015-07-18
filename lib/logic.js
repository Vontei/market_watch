module.exports = {


var portfolio = [];

function Portfolio(){
  this.list = []
}

function Stock(name, symbol, bid, ask){
  this.name = name,
  this.symbol = symbol,
  this.bid = bid,
  this.ask = ask
}

Stock.prototype = new Portfolio();

Stock.prototype.show = function(){
  console.log(this);
}

Stock.prototype.spread = function () {
  var spread = this.ask - this.bid;
  console.log(spread.toFixed(4));
}


var MSFT = new Stock('Microsoft','MSFT', 46, 47.5)
var AAPL = new Stock('Apple','AAPL', 170, 171.8)


MSFT.show()
MSFT.spread()
AAPL.show()
AAPL.spread()

portfolio.push(MSFT)
console.log(portfolio)


}
