// startAccount = new XMLHttpRequest();
// startAccount.open('get', '/casino/players', true);
//   startAccount.addEventListener('load', function(){
//     var balance = document.getElementById('balance');
//     var response = startAccount.response;
//     var res = parseInt(response)
//     if(response.balance == null){
//       balance.innerHTML == 1000;
//     }
//     else{balance.innerHTML=res}
//   })
// startAccount.send(null);

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
