var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");


 fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd', 
{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}
)
   .then(response => response.json())
   
  .then(function(data){
   
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    doge.innerHTML = data.dogecoin.usd;

  });
   
 
  