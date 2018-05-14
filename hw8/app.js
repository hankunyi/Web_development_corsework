var express = require('express');
var app = express();
var url = require('url');
var https = require('https');
var request = require('request');

function getprice(id,callback){
  request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+id+'&outputsize=full&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }

  function getSMA(id,callback){
  request('https://www.alphavantage.co/query?function=SMA&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }

  function getEMA(id,callback){
  request('https://www.alphavantage.co/query?function=EMA&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }

  function getSTOCH(id,callback){
  request('https://www.alphavantage.co/query?function=STOCH&symbol='+id+'&interval=daily&time_period=10&slowkmatype=1&slowdmatype=1&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }
  function getRSI(id,callback){
  request('https://www.alphavantage.co/query?function=RSI&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }
  function getADX(id,callback){
  request('https://www.alphavantage.co/query?function=ADX&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }
  function getCCI(id,callback){
  request('https://www.alphavantage.co/query?function=CCI&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }
  function getBBANDS(id,callback){
  request('https://www.alphavantage.co/query?function=BBANDS&symbol='+id+'&interval=daily&time_period=10&series_type=close&nbdevup=3&nbdevdn=3&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }
  function getMACD(id,callback){
  request('https://www.alphavantage.co/query?function=MACD&symbol='+id+'&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }









  function getXML(id,callback){
  request('https://seekingalpha.com/api/sa/combined/'+id+'.xml',function(error,response,body){
    if(!error && response.statusCode == 200){
      callback(body);
    }
    else
      console.log(error);
    });
  }



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  next();
});

app.get('/price', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getprice(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/SMA', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getSMA(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/EMA', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getEMA(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/STOCH', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getSTOCH(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/RSI', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getRSI(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/ADX', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getADX(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/SMA', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getSMA(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/CCI', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getCCI(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/BBANDS', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getBBANDS(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/MACD', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  getMACD(params.symbol,function(data){
    res.write(data);
    res.end();
  });
});

app.get('/XML', function (req, res, next) {
  var params = url.parse(req.url, true).query;
  console.log(params);
  var parseString = require('xml2js').parseString;
  getXML(params.symbol,function(data){
    parseString(data, function (err, result) {
      res.write(JSON.stringify(result));
      res.end();
    }); 
  });
});



app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 80');
});