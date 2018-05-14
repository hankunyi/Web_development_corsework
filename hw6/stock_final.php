<!DOCTYPE html>
<html>
<head>
<title> Homework 6 </title>

<style type="text/css">
body{
	font-family:"Helvetica Neue",Helvetica,"Arial Nova",Arial,sans-serif;
}
input{
	background-color:rgb(255,255,255);
	border:1px solid rgb(214,214,214);
	border-radius:2px;
	font-size:11px;
}
#form{
margin-right:auto;
margin-left:auto;
padding-top:3px;
background-color:rgb(245,245,245);
border:1px solid rgb(214,214,214);
width:300px;
height:120px;
}
.table1{
	margin-right:auto;
	margin-left:auto;
	width:990px;
	border:solid 2px rgb(214,214,214);
	border-collapse:collapse;
	margin-top:5px;
}
.label{
	background-color:rgb(243,243,243);
	text-align:left;
	width:330px;
	font-size:12px;
	font-weight:600;
	border:1px solid rgb(214,214,214);
}
.value{
	background-color:rgb(251,251,251);
	width:660px;
	font-size:12px;
	text-align:center;
	border:1px solid rgb(214,214,214);
}
a{
text-decoration:none;
}
</style>


<script type = "text/javaScript">
function noinput(){
	alert("Please enter a symbol");
}
function clearinfo(){
	document.getElementById("content").innerHTML="";
	document.getElementById("code").value="";
}

function plotSMA(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=SMA&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["SMA"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dateset.reverse();

Highcharts.chart('pricestock', {

    title: {
        text: 'Simple Moving Average (SMA)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
 yAxis: {				
        title: {
        	text: 'SMA',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1,
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}





function plotEMA(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=EMA&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["EMA"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Exponential Moving Average (EMA)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'EMA',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1,
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}



function plotSTOCH(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=STOCH&symbol="+symbol+"&interval=daily&time_period=10&slowkmatype=1&slowdmatype=1&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dataset2=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["SlowK"])  )   );
		dataset2.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["SlowD"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dataset2.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Stochastic Oscillator (STOCH)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'STOCH',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1 + ' SlowK',
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},
		{
       		name: name1 + ' SlowD',
		color:'blue',
        	data: dataset2,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}




function plotRSI(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=RSI&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["RSI"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Relative Strength Index (RSI)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'RSI',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1,
		color:'red',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}



function plotADX(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=ADX&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["ADX"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Average Directional Movement Index (ADX)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'RSI',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1,
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}



function plotCCI(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=CCI&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["CCI"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Commodity Channel Index (CCI)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'CCI',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1,
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}






function plotBBANDS(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=BBANDS&symbol="+symbol+"&interval=daily&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dataset2=[];
	var dataset3=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["Real Lower Band"])  )   );
		dataset2.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["Real Upper Band"])  )   );
		dataset3.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["Real Middle Band"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dataset2.reverse();
	dataset3.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Bollinger Bands (BBANDS)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'BBANDS',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1 + ' Real Middle Band',
		color:'red',
        	data: dataset3,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},
		{
       		name: name1 + ' Real Upper Band',
		color:'blue',
        	data: dataset2,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},
		{
       		name: name1 + ' Real Lower Band',
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}


function plotMACD(){
	symbol=document.getElementById("code").value
	var xmlhttp;
	var url= "https://www.alphavantage.co/query?function=MACD&symbol="+symbol+"&interval=daily&time_period=10&series_type=close&apikey=YXB12HEXNE8W0E3R";
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();	// code for IE7+, Firefox, Chrome, Opera, Safari
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	xmlhttp.onreadystatechange=function()
  	{
  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
   	 {
	var jsonObj;
   	try{
		jsonObj=JSON.parse(xmlhttp.responseText);
	}
	catch(err){
		alert("Wrong format for JSON File .");return 0;
	}
	var key1=Object.keys(jsonObj);
	var key2=Object.keys(jsonObj[key1[0]]);
	var key3=Object.keys(jsonObj[key1[1]]);
	var name1=jsonObj[key1[0]][key2[0]];
	var dataset=[];
	var dataset2=[];
	var dataset3=[];
	var dateset=[];
	var enddate= new Date(key3[0]);
	var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
	for (i=0; i<key3.length; i++){
		if(new Date(key3[i])< begindate && i%5 == 1){
			break;
		}
		dataset.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["MACD_Signal"])  )   );
		dataset2.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["MACD_Hist"])  )   );
		dataset3.push( parseFloat(  parseFloat(jsonObj[key1[1]][key3[i]]["MACD"])  )   );
		dateset.push(Date.parse(new Date(key3[i]))); 
	
	}
	dataset.reverse();
	dataset2.reverse();
	dataset3.reverse();
	dateset.reverse();
Highcharts.chart('pricestock', {

    title: {
        text: 'Moving Average Convergence/Divergence (MACD)',
	style:{
		fontSize:'14px',
		}
    },
    subtitle: {
        text: '<a href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	style:{
		color:'blue',
		fontSize:'10px',
		},
    },

 xAxis: {categories:dateset,

	labels:{
	  formatter: function() {
             return Highcharts.dateFormat('%m/%d', this.value);
        },
	},

tickInterval: 5,
	
},
yAxis: {				
        title: {
        	text: 'MACD',
       		 },
	},				
	tooltip: {
        	headerFormat: '{point.x:%m/%d}<br>',
	},
   	legend: {
       		layout: 'vertical',
       		align: 'right',
       		verticalAlign: 'middle'
  	},

	series: [{
       		name: name1 + ' MACD',
		color:'red',
        	data: dataset3,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},
		{
       		name: name1 + ' MACD_Hist',
		color:'blue',
        	data: dataset2,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},
		{
       		name: name1 + ' MACD_Signal',
		color:'black',
        	data: dataset,
		lineWidth:0.5,
		marker:{
			radius: 1.5,
		},
  		},]


});
	
   	 }
  	}
	xmlhttp.open("GET",url,true); //open, send, responseText are
	xmlhttp.send();	
}



</script>
<script src="https://code.highcharts.com/highcharts.js"></script>
</head>





<body style="text-align:center">

<div id="form">
<B><I style="font-size:20px"> Stock Search</I></B><br>
<div style="margin-top:3px;margin-left:3px;width:294px;height:1px;background-color:rgb(214,214,214)"> </div>
<form name="myform"  method="post">
<div style="font-size:11px;text-align:left;padding-left:5px;padding-top:15px;">
Enter Stock Ticker Symbol:* <input type="text" id="code" name="input" size="15" value="<?php echo isset($_POST["search"])?($_POST["input"]):"" ?>"><br>
<div style="padding-left:140px;padding-top:5px">
<input type="submit" name="search" value="Search">
<input type="button" name="clear"  value="Clear" onClick="clearinfo()">
</div>
<I style="font-size:10px">* - Mandatory fields.</I>
</div>
</form>
</div>


<div id="content">
<?php if (isset($_POST["search"])): 
	if($_POST["input"] == ""):?>
	<script type = "text/javaScript">
		noinput();
	</script>
	<?php else:?>

		<?php
			date_default_timezone_set('America/New_York');
			$url= "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".$_POST["input"]."&outputsize=full&apikey=YXB12HEXNE8W0E3R";
			$json = file_get_contents($url);
			$obj = json_decode($json, true);
			$testkey = array_keys($obj);
			if($testkey[0] != "Meta Data"):?>
			<table class="table1">
				<tr>
				<td class="label"><b>Error</b></td>
				<td class="value">Error: NO record has been found,please enter a valid symbol</td>
				</tr>
			</table>
				
			<?php else:
				$keys = array_keys($obj['Time Series (Daily)']);
				$symbol = $obj['Meta Data']['2. Symbol'];
				$close =  $obj['Time Series (Daily)'][$keys[0]]['4. close'];
				$open = $obj['Time Series (Daily)'][$keys[0]]['1. open'];
				$preclose = $obj['Time Series (Daily)'][$keys[1]]['4. close'];
				$change = round($close - $preclose,2);
				$changeper = round($change/$preclose*100,2);
				$dayrange = $obj['Time Series (Daily)'][$keys[0]]['3. low']."-".$obj['Time Series (Daily)'][$keys[0]]['2. high'];
				$volume = $obj['Time Series (Daily)'][$keys[0]]['5. volume'];
				$timestamp = $keys[0];
				if($change >= 0):
					$arrow_url="http://cs-server.usc.edu:45678/hw/hw6/images/Green_Arrow_Up.png";
				else:
					$arrow_url="http://cs-server.usc.edu:45678/hw/hw6/images/Red_Arrow_Down.png";
				endif;
				

				$begindate = date('Y-m-d',strtotime('-6 Month',strtotime($keys[0])));
				$date_dataset=[];
				$volumn_dataset=[];
				$price_dataset=[];
				$volume_max=0;
				$price_max=0;
				$price_min=99999;
				for($i=0; $i<count($keys); $i++){
					if(strtotime ($keys[$i])< strtotime($begindate) && $i%5==1){
						break;
					}
				$volume_max= $volume_max>$obj['Time Series (Daily)'][$keys[$i]]['5. volume']?$volume_max:$obj['Time Series (Daily)'][$keys[$i]]['5. volume'];
				$price_max= $price_max>$obj['Time Series (Daily)'][$keys[$i]]['4. close']?$price_max:$obj['Time Series (Daily)'][$keys[$i]]['4. close'];
				$price_min= $price_min<$obj['Time Series (Daily)'][$keys[$i]]['4. close']?$price_min:$obj['Time Series (Daily)'][$keys[$i]]['4. close'];
				array_push($date_dataset, strtotime($keys[$i])*1000);
				array_push($volumn_dataset, intval($obj['Time Series (Daily)'][$keys[$i]]['5. volume']));
				array_push($price_dataset, floatval($obj['Time Series (Daily)'][$keys[$i]]['4. close']));
				}		
		?>

				<table class="table1">
				<tr>
				<td class="label">Stock Ticker Symbol</td>
				<td class="value"><?php echo $symbol; ?></td>
				</tr>
				<tr>
				<td class="label">Close</td>
				<td class="value"><?php echo $close; ?></td>
				</tr>
				<tr>
				<td class="label">Open</td>
				<td class="value"><?php echo $open; ?></td>
				</tr>
				<tr>
				<td class="label">Previous Close</td>
				<td class="value"><?php echo $preclose; ?></td>
				</tr>
				<tr>
				<td class="label">Change</td>
				<td class="value"><?php echo $change."<img src=".$arrow_url." width='12' height='12'style='margin-left:3px'>";?> </td>
				</tr>
				<tr>
				<td class="label">Change Percent</td>
				<td class="value"><?php echo $changeper."%"."<img src=".$arrow_url." width='12' height='12'style='margin-left:3px'>"; ?></td>
				</tr>
				<tr>
				<td class="label">Day's Range</td>
				<td class="value"><?php echo $dayrange; ?></td>
				</tr>
				<tr>
				<td class="label">Volume </td>
				<td class="value"><?php echo number_format($volume); ?></td>
				</tr>
				<tr>
				<td class="label">Timestamp </td>
				<td class="value"><?php echo $symbol; ?></td>
				</tr>
				<tr>
				<td class="label">Indicators </td>
				<td class="value">
				<a onclick="plotprice()" href="javascript:void(0)"> Price</a> &nbsp &nbsp
				<a onclick="plotSMA()" href="javascript:void(0)"> SMA </a> &nbsp &nbsp
				<a onclick="plotEMA()" href="javascript:void(0)"> EMA </a> &nbsp &nbsp
				<a onclick="plotSTOCH()" href="javascript:void(0)"> STOCH</a> &nbsp &nbsp
				<a onclick="plotRSI()" href="javascript:void(0)"> RSI </a> &nbsp &nbsp
				<a onclick="plotADX()" href="javascript:void(0)"> ADX </a> &nbsp &nbsp
				<a onclick="plotCCI()" href="javascript:void(0)"> CCI </a> &nbsp &nbsp
				<a onclick="plotBBANDS()" href="javascript:void(0)"> BBANDS </a> &nbsp &nbsp
				<a onclick="plotMACD()" href="javascript:void(0)"> MACD </a>
				</td>
				</tr>
				</table>

				
				<div id="pricestock"  style="margin-top:5px;width:990px; height:400px;margin-left:auto;margin-right:auto;border:solid 2px rgb(214,214,214)">
				<script type="text/javascript">
				function plotprice(){
				 var myChart = Highcharts.chart('pricestock', {
   					chart: {
   					},
    					title: {
       						text: 'Stock Price'+ '(<?php echo $timestamp; ?>)',
						style:{
							fontSize:'14px'	,	
						},
						
   					},
    					subtitle: {
        					text: '<a href="https://www.alphavantage.co/">' +
            					'Source:Alpha Vantage</a>',
						style:{
							color:'blue',
							fontSize:'10px'


						}
   					},
   					xAxis: {categories:<?php echo json_encode(array_reverse($date_dataset));?>,

						labels:{
	 					 formatter: function() {
            					 return Highcharts.dateFormat('%m/%d', this.value);
       						 },
						},

						tickInterval: 5,
	
						},
    					yAxis: [{
							max:(<?php echo $price_max;?>*1.02),
							min:(<?php echo $price_min;?>/1.1),

        						title: {
            						text: 'Stock Price',
        						},
							tickAmount:7

						},
						{
							max:<?php echo $volume_max;?>*4,
							min:0,
							title:{
							text:'Volume'
							},
							opposite:true,
							tickAmount:7

						}],
					
					tooltip: {
        					  headerFormat: '{point.x:%m/%d}<br>',
					},
   					 legend: {
       						 layout: 'vertical',
       						 align: 'right',
       						 verticalAlign: 'middle',
  					  },

  					plotOptions: {
       							 series: {
           				 	pointWidth: 1
       					 		}
   					 },

    					series: [{
       						name: '<?php echo $symbol;?>',
       						type: 'area',
						color: 'lightcoral',
        					data: <?php  echo json_encode(array_reverse($price_dataset));?>,
						valueDecimals: 2,
  						}, {
        					name: '<?php echo $symbol;?>' + ' Volume',
        					type: 'column',
						color:'white',
						yAxis: 1,
        					data:  <?php echo json_encode(array_reverse($volumn_dataset));?>,
    						}]
				});
				}



				plotprice();
				
				</script>

				</div>

				
				
				<?php
				$url= 'https://seekingalpha.com/api/sa/combined/'. $symbol   .'.xml';
				$xml=simplexml_load_file($url) or die("Error: Cannot create object");
				$jsondata = [];
				$number = 0;
				for($i=0;; $i++){
					if($xml->channel->item[$i] == NULL): break;
					endif;
					if( strpos($xml->channel->item[$i]->link,'article')==true):
						array_push($jsondata ,array($xml->channel->item[$i]->title,$xml->channel->item[$i]->link,   $xml->channel->item[$i]->pubDate  )      );
						$number++;
					endif;
					if($number == 5):
						break;
					endif;
				}		
				?>
				<div id="newsdiv"> 
				</div>

				<script type="text/javascript">
					function getnews(){
					var html_text="";
						 html_text+="<div style=' margin-right:auto;margin-left:auto;width:150px' onclick='hidenews()'>"
						 html_text+="<span style='font-size:12px;color:rgb(214,214,214)' ><B> click to hide stock news </B></span><br>";	
						 html_text+="<img src='http://cs-server.usc.edu:45678/hw/hw6/images/Gray_Arrow_Up.png' width='30' height='15'style='margin-top:10px'><br>";
						 html_text+="</div>"
					var news = <?php echo json_encode($jsondata);   ?>;
					html_text+="<table class='table1'>";
					for(i=0; i<news.length;i++){
						html_text+="<tr>";
						html_text+="<td style='font-size:12px;background-color:rgb(251,251,251);text-align:left;border:1px solid rgb(214,214,214)'><a href='" + news[i][1][0]+ "'>" + news[i][0][0]+ "</a>&nbsp&nbsp&nbsp&nbsp"+ "Publicated Time:" + news[i][2][0].substring(0,news[i][2][0].length-6)+ "</td>";
						html_text+="</tr>";
					}
					html_text+="</table>";
					document.getElementById("newsdiv").innerHTML = html_text;
					}
					function hidenews(){
					var html_text="";
					html_text+="<div style=' margin-right:auto;margin-left:auto;width:150px' onclick='getnews()'>"
					html_text+="<span style='font-size:12px;color:rgb(214,214,214)'><B> click to show stock news </B></span><br>";
					html_text+="<img src='http://cs-server.usc.edu:45678/hw/hw6/images/Gray_Arrow_Down.png' width='30' height='15'style='margin-top:10px'><br>";
					html_text+="</div>"					
					document.getElementById("newsdiv").innerHTML = html_text;
					}


					hidenews();	
				</script>

			
					
			<?php endif; ?>
	<?php endif; ?>
<?php endif; ?>
</div>


<noscript>
</body></html>
