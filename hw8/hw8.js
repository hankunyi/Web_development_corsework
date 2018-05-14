
var app = angular.module('myapp', ["ngAnimate"]);
app.controller('appctrl',function($scope,$http,$window,$timeout) {
    $scope.stockdetail = false;
    $scope.stocktable = false;
    $scope.pricechart = false;
    $scope.SMAchart = false;
    $scope.EMAchart = false;
    $scope.STOCHchart = false;
    $scope.RSIchart = false;
    $scope.ADXchart = false;
    $scope.CCIchart = false;
    $scope.BBANDSchart = false;
    $scope.MACDchart = false;
    $scope.stockchart=false;
    $scope.news=false;
    $scope.chart=0;
    $scope.click=0;
    $scope.content=0;
    $scope.favor=false;
    $scope.datail=false;
    $scope.stocktableerr = false;
    $scope.stockc;
    	$scope.pricecharterr = false;
    	$scope.SMAcharterr = false;
    	$scope.EMAcharterr = false;
    	$scope.STOCHcharterr = false;
   		$scope.RSIcharterr = false;
    	$scope.ADXcharterr = false;
    	$scope.CCIcharterr = false;
    	$scope.BBANDScharterr = false;
    	$scope.MACDcharterr = false;
    	$scope.stockcharterr=false;
    	$scope.newserr=false;

    	$scope.sort1 = ["Default", "Symbol", "Price","Change","Change Percent","Volume"];
    	$scope.sort2 = ["Ascending", "Descending"];

    $scope.clearinfo=function(){
    	$scope.input='';
    	$scope.stockdetail = false;
    	$scope.myform.$setUntouched();
    	$scope.detail=false;
    };


    $scope.toggle = function() {
        $scope.stockdetail = !$scope.stockdetail;
    };



    $scope.addfavor = function(){
		localStorage.removeItem(localStorage.key(0));
    	localStorage.symbol=$("#tickersymbol").html();
    	localStorage.price = $("#lastprice").html();
    	localStorage.change = $("#change").html();
    	localStorage.volume = $("#volume").html();

    	
 		var table = document.getElementById("favortable");
 		var newRow   = table.insertRow(table.rows.length);

    	
		newRow.insertCell(0).innerHTML = localStorage.symbol;
		newRow.insertCell(1).innerHTML = localStorage.price;
		newRow.insertCell(2).innerHTML = localStorage.change;
		newRow.insertCell(3).innerHTML = localStorage.volume;
		newRow.insertCell(4).innerHTML = "<button type='button'  class='btn btn-default' ng-click='rmfavor()'> <span class='glyphicon glyphicon-trash' ></span> </button>";
		
		localStorage.clear();
		$scope.favor = true;
    };

    $scope.rmfavor = function(){
    	var table = document.getElementById("favortable");
    	table.deleteRow(table.rows.length-1);
    	$scope.favor = false;
    }


    $scope.facebook = function(){
    FB.init({
    appId            : '1422980271148255',
    autoLogAppEvents : true,
    status           : true,
    xfbml            : true,
    version          : 'v2.9' // or v2.8, v2.7, v2.6, v2.5, v2.4, v2.3,
  });
    var obj={};
    var chart;


    if($scope.chart == 0) {chart = $('#pricestock').highcharts();}
    if($scope.chart == 1) {chart = $('#SMA').highcharts();}
    if($scope.chart == 2) {chart = $('#EMA').highcharts();}
    if($scope.chart == 3) {chart = $('#STOCH').highcharts();}
    if($scope.chart == 4) {chart = $('#RSI').highcharts();}
    if($scope.chart == 5) {chart = $('#ADX').highcharts();}
    if($scope.chart == 6) {chart = $('#CCI').highcharts();}
    if($scope.chart == 7) {chart = $('#BBANDS').highcharts();}
    if($scope.chart == 8) {chart = $('#MACD').highcharts();}
    obj.svg = chart.getSVG();
    obj.type = 'image/png';
    obj.async = true;

    
    $.ajax({
        type: 'post',
        url: 'http://export.highcharts.com/',        
        data: obj, 
        success: function (data) {            
            var exportUrl = this.url;
            FB.ui({
    			method: 'feed',
    			picture: exportUrl+data,
  			}, function(response){});
  		}
  	})
  	

    }
 
   $scope.histo = function(){
   		$scope.content =1;
   		$timeout( function(){
   			try{
            $scope.stockc.reflow();
        }
        catch(e){};
        }, 10 );
    }
    $scope.priceclick = function(){
   		$scope.chart =0;
   		$timeout( function(){
   			try{
            $scope.pricec.reflow();
        }
        catch(e){};
        }, 10 );
    }
    $scope.SMAclick = function(){
   		$scope.chart =1;
   		$timeout( function(){
   			try{
            $scope.SMAc.reflow();
        }
        catch(e){};
        }, 10 );
    }

    $scope.EMAclick = function(){
   		$scope.chart =2;
   		$timeout( function(){
   			try{
            $scope.EMAc.reflow();
        }
        catch(e){};
        }, 10 );
    }

    $scope.STOCHclick = function(){
   		$scope.chart =3;
   		$timeout( function(){
   			try{
            $scope.STOCHc.reflow();
        }
        catch(e){};
        }, 10 );
    }

    $scope.RSIclick = function(){
   		$scope.chart =4;
   		$timeout( function(){
   			try{
            $scope.RSIc.reflow();
        }
        catch(e){};
        }, 10 );
    }

        $scope.ADXclick = function(){
   		$scope.chart =5;
   		$timeout( function(){
   			try{
            $scope.ADXc.reflow();
        }
        catch(e){};
        }, 10 );
    }

        $scope.BBANDSclick = function(){
   		$scope.chart =7;
   		$timeout( function(){
   			try{
            $scope.BBANDSc.reflow();
        }
        catch(e){};
        }, 10 );
    }

        $scope.MACDclick = function(){
   		$scope.chart =8;
   		$timeout( function(){
   			try{
            $scope.MACDc.reflow();
        }
        catch(e){};
        }, 10 );
    }

        $scope.CCIclick = function(){
   		$scope.chart =6;
   		$timeout( function(){
   			try{
            $scope.CCIc.reflow();
        }
        catch(e){};
        }, 10 );
    }

   $scope.cur = function(){
   		$scope.content =0;
   		$timeout( function(){
   			try{
            $scope.pricec.reflow();
            $scope.SMAc.reflow();
            $scope.EMAc.reflow();
            $scope.STOCHc.reflow();
            $scope.RSIc.reflow();
            $scope.ADXc.reflow();
            $scope.BBANDSc.reflow();
            $scope.MACDc.reflow();
            $scope.CCIc.reflow();
        }
        catch(e){};
        }, 10 );
    }


    $scope.getquote = function(){
    	$scope.stockdetail = true;
    	$scope.stocktable = false;
    	$scope.pricechart = false;
    	$scope.SMAchart = false;
    	$scope.EMAchart = false;
    	$scope.STOCHchart = false;
   		$scope.RSIchart = false;
    	$scope.ADXchart = false;
    	$scope.CCIchart = false;
    	$scope.BBANDSchart = false;
    	$scope.MACDchart = false;
    	$scope.stockchart=false;
    	$scope.news=false;
    	$scope.favor = false;
    	$scope.detail=true;


    	$scope.stocktableerr = false;
    	$scope.pricecharterr = false;
    	$scope.SMAcharterr = false;
    	$scope.EMAcharterr = false;
    	$scope.STOCHcharterr = false;
   		$scope.RSIcharterr = false;
    	$scope.ADXcharterr = false;
    	$scope.CCIcharterr = false;
    	$scope.BBANDScharterr = false;
    	$scope.MACDcharterr = false;
    	$scope.stockcharterr=false;
    	$scope.newserr=false;



    	//price

    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/price",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			respons = response.data;
    			try{
	    			var key1=Object.keys(respons);
					var key2=Object.keys(respons[key1[0]]);
					var key3=Object.keys(respons[key1[1]]);
					var key4=Object.keys(respons[key1[1]][key3[0]]);
					var ticksymbol = respons[key1[0]][key2[1]];
					var lastprice = respons[key1[1]][key3[0]][key4[3]];
					var timestamp = respons[key1[0]][key2[2]];
					var open = respons[key1[1]][key3[0]][key4[0]];
					var preclose = respons[key1[1]][key3[1]][key4[3]];
					var low = respons[key1[1]][key3[0]][key4[2]];
					var high = respons[key1[1]][key3[0]][key4[1]];
					var volume = respons[key1[1]][key3[0]][key4[4]];
					var change = lastprice - preclose;
					$('#tickersymbol').html(ticksymbol);
					$('#lastprice').html(parseFloat(lastprice).toFixed(2));
					if(change>=0){
						$('#change').html("<span style='color:green'>" +parseFloat(change).toFixed(2)+' ('+ parseFloat(change*100/preclose).toFixed(2) +"%)\
						 <img src='http://cs-server.usc.edu:45678/hw/hw8/images/Up.png' width='12' height='12' ></span>" );
					}
					else{
						$('#change').html("<span style='color:red'>" +parseFloat(change).toFixed(2)+' ('+ parseFloat(change*100/preclose).toFixed(2) +"%)\
						 <img src='http://cs-server.usc.edu:45678/hw/hw8/images/Down.png' width='12' height='12' ></span>" );
					}



					if(timestamp.length<12){
					$('#timestamp').html(timestamp+' 16:00:00 EST');
					}
					else{
					$('#timestamp').html(timestamp+' EST');	
					}					
					$('#open').html(parseFloat(open).toFixed(2));
					$('#close').html(parseFloat(preclose).toFixed(2));
					$('#dayrange').html(parseFloat(low).toFixed(2)+'-'+ parseFloat(high).toFixed(2));
					$('#volume').html(parseInt(volume).toLocaleString('en-US'));
					$scope.stocktable = true;
					var priceset=[];
					var volumeset=[];
					var dateset=[];				var enddate=new Date(key3[0]);
					var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
					for (i=0; i<key3.length; i++){
						if(i == 121){
							break;
						}
						priceset.push( parseFloat( parseFloat(respons[key1[1]][key3[i]][key4[3]])  )   );
						volumeset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]][key4[4]])  )   );
						dateset.push(Date.parse(new Date(key3[i]))); 
					}
					priceset.reverse();
					volumeset.reverse();
					dateset.reverse();
					$scope.pricec = Highcharts.chart('pricestock', {
	   						chart: {
	   							zoomType:'x',
	   						},
	    					title: {
	       						text: ticksymbol + ' Stock Price and Volume',
								style:{
									fontSize:'18px'	,
									fontWeight: 'bold'	
								},
							},
	    					subtitle: {
	        					text: '<a target="blank"   href="https://www.alphavantage.co/">' +
	            					'Source:Alpha Vantage</a>',
	            				useHTML:true,	
								style:{
									color:'blue',
									fontSize:'10px'
								}
	   						},
	   						exporting:{
	   							url: 'http://export.highcharts.com/',
	   							enabled:true
	   						},
	   						xAxis: { categories: dateset,
								labels:{
		 					 		formatter: function() {
	            					 	return Highcharts.dateFormat('%m/%d', this.value);
	       						 	},
								},
								tickInterval: 10,	
							},
	    					yAxis: [{
	        					title: {
	            					text: 'Stock Price',
	        					},
								tickAmount:4
							},
							{
								title:{
								text:'Volume'
								},
								opposite:true,
								tickAmount:4
							}],					
							tooltip: {
	        					  headerFormat: '{point.x:%m/%d}<br>',
							},
							plotOptions: {
	       						series: {
	           				 	pointWidth: 1
	       					 	}
	   					 	},
	    					series: [{
	       						name: 'Price',
	       						type: 'area',
								color: 'lightskyblue',
								lineColor:'blue',
	        					data: priceset,
								tooltip:{
									valueDecimals: 2,},
	  							}, {
	        					name: 'Volume',
	        					type: 'column',
								color:'red',
								yAxis: 1,
	        					data:  volumeset,
	    						}]
					});
					$scope.pricechart = true;


					//stock

					var stockdata=[];
					for (i=0; i<key3.length; i++){
						if(i==1000){
							break;
						}
						stockdata.push( [Date.parse(new Date(key3[i])),  parseFloat(respons[key1[1]][key3[i]][key4[3]])]   );; 
					}
					stockdata.reverse();
					$scope.stockc = Highcharts.stockChart('stock', {
	        			chart: {
	            			zoomType:'x',
	        			},

	        			title: {
	            			text: ticksymbol + ' Stock Value',
	            			style:{
									fontSize:'14px'	,
									fontWeight: 'bold'	
							},
	        			},

	       				subtitle: {
	        				text: '<a target="blank"   href="https://www.alphavantage.co/">' + 'Source:Alpha Vantage</a>',
	            			useHTML:true,	
							style:{
								color:'blue',
								fontSize:'10px'
							}
	   					},

	        			rangeSelector: {

	            				buttons: [ 
	      						{
	                				type: 'week',
	                				count: 1,
	                				text: '1w'
	            				}, {
	                				type: 'month',
	                				count: 1,
	                				text: '1m'
	            				}, {
	                				type: 'month',
	                				count: 3,
	                			text: '3m'
	            				},  {
	                				type: 'month',
	                				count: 6,
	                				text: '6m'
	            				}, {
	                				type: 'ytd',
	                				text: 'YTD'
	            				},
	            				{
	                				type: 'year',
	                				count: 1,
	                				text: '1y'
	           					}, {
	                				type: 'all',
	                				text: 'All'
	            				}],
	            				selected: 0
	        			},

	        			yAxis: {
	            			title: {
	                			text: 'Stock Value'
	            			},
	            			min:0,
	        			},
	        			tooltip:{
	        				split:false
	        			},


	        			series: [{
	            			name: ticksymbol,
	            			data: stockdata,
	            			type: 'area',
	            			threshold: null,
	            			tooltip: {
	                			valueDecimals: 2,
	            			}
	        			}],
	        		});
					$scope.stockchart=true;
				}
				catch(e){$scope.stocktableerr = true; $scope.pricecharterr = true; $scope.stockcharterr=true;};
    		},
    		function (failure){$scope.stocktableerr = true; $scope.pricecharterr = true; $scope.stockcharterr=true; }
    	);



		//SMA
		$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/SMA",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var ticksymbol = respons[key1[0]][key2[0]];
				var dataset=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["SMA"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dateset.reverse();
				$scope.SMAc = Highcharts.chart('SMA', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Simple Moving Average (SMA)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.SMAchart = true;
			}
			catch(e){$scope.SMAcharterr=true;}
			},
    		function (failure){}
    	);





    	//EMA
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/EMA",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var ticksymbol = respons[key1[0]][key2[0]];
				var dataset=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["EMA"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dateset.reverse();
				$scope.EMAc = Highcharts.chart('EMA', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Exponential Moving Average (EMA)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.EMAchart = true;
			}
			catch(e){$scope.EMAcharterr=true};
			},
    		function (failure){}
    	);





		//STOCH
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/STOCH",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dataset2=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["SlowK"])  )   );
					dataset2.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["SlowD"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dataset2.reverse();
				dateset.reverse();
				$scope.STOCHc = Highcharts.chart('STOCH', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Stochastic Oscillator (STOCH)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.STOCHchart = true;
			}
			catch(e){$scope.STOCHcharterr=true;}
			},
    		function (failure){}
    	);



		//RSI
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/RSI",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["RSI"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dateset.reverse();
				$scope.RSIc = Highcharts.chart('RSI', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Relative Strength Index (RSI)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.RSIchart = true;
			}
			catch(e){$scope.RSIcharterr=true;}
			},
    		function (failure){}
    	);



		//ADX
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/ADX",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["ADX"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dateset.reverse();
				$scope.ADXc = Highcharts.chart('ADX', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Average Directional Movement Index (ADX)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
	        				},
						},

						tickInterval: 5,
		
					},
	 				yAxis: {				
	        			title: {
	        				text: 'ADX',
	       		 		},
					},				
					tooltip: {
	        			headerFormat: '{point.x:%m/%d}<br>',
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
	
				$scope.ADXchart = true;
			}
			catch(e){$scope.ADXcharterr=true;}
			},
    		function (failure){}
    	);



    		//CCI

    		$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/CCI",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["CCI"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dateset.reverse();
				$scope.CCIc = Highcharts.chart('CCI', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Commodity Channel Index (CCI)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.CCIchart = true;
			}
			catch(e){$scope.CCIcharterr=true;}
			},
    		function (failure){}
    	);



		//BBANDS
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/BBANDS",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dataset2=[];
				var dataset3=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["Real Lower Band"])  )   );
					dataset2.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["Real Upper Band"])  )   );
					dataset3.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["Real Middle Band"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dataset2.reverse();
				dataset3.reverse();
				dateset.reverse();
				$scope.BBANDSc = Highcharts.chart('BBANDS', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Bollinger Bands (BBANDS)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.BBANDSchart = true;
			}
			catch(e){$scope.BBANDScharterr=true;}
			},
    		function (failure){}
    	);










    	//MACD
    	$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/MACD",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data;
    			var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var name1=respons[key1[0]][key2[0]];
				var dataset=[];
				var dataset2=[];
				var dataset3=[];
				var dateset=[];
				var enddate=new Date(key3[0]);
				var begindate = (new Date(key3[0])).setMonth(new Date(key3[0]).getMonth()-6);
				for (i=0; i<key3.length; i++){
					if(i==121){
						break;
					}
					dataset.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["MACD_Signal"])  )   );
					dataset2.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["MACD_Hist"])  )   );
					dataset3.push( parseFloat(  parseFloat(respons[key1[1]][key3[i]]["MACD"])  )   );
					dateset.push(Date.parse(new Date(key3[i]))); 
				}
				dataset.reverse();
				dataset2.reverse();
				dataset3.reverse();
				dateset.reverse();
				$scope.MACDc = Highcharts.chart('MACD', {
					chart: {
            			zoomType:'x',
        			},

    				title: {
        				text: 'Moving Average Convergence/Divergence (MACD)',
						style:{
							fontSize:'14px',
						}
    				},
	    			subtitle: {
	        			text: '<a target="blank" href="https://www.alphavantage.co/">' +'Source:Alpha Vantage</a>',
	        			useHTML:true,
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
	        				style:{
	        					fontSize:'10px',
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
	
				$scope.MACDchart = true;
			}
			catch(err){$scope.MACDcharterr=true;}
			},
    		function (failure){}
    	);




    		//NEWS
    		$http({
    		method:"GET",
    		url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/XML",
    		params:{symbol:$scope.input},
    		}).then(function (response){
    			try{
    			respons = response.data.rss.channel[0].item;
    			var key=Object.keys(respons[0]);
    			var html_text='';
    			var number =0;
    			for(i=0;;i++){
    				if(number==5) break;

    				title = respons[i][key[0]][0];
    				link = respons[i][key[1]][0];
    				pubDate = respons[i][key[3]][0];
    				author = respons[i][key[4]][0];


    				if(link.includes("article")){
	    				html_text +="<div style='background-color:rgb(237,237,237);margin:10px;padding:10px;border:2px solid rgb(214,214,214)'>  ";
	    				html_text +='<span style="font-size:16px">' + "<a target=blank href='"+ link + "'>" + title + '</a></span><br><br><br>' ;
	    				html_text +='<span>Auther: ' + author + '</span><br><br>' ;
	    				html_text +='<span>Date: ' + pubDate.substring(0,pubDate.length-6) + ' EST</span><br><br>' ;
	    				html_text +='</div>';
	    				number++;
    				}
    			}

    			$('#newstable').html(html_text);

    			/*
    			var html_text='';
    			for(i=0; ;i++){
    				if(i==5) break;
    				html_text+=JSON.stringify(respons.rss.channel[0].item[i].title);
    			}
    			
    			alert(html_text);

    			$('#newstable').html(html_text);
    			*/
    	


    			/*
    			alert(respons.rss.channel[0].item[1].title);
    			alert(respons.rss.channel[0].item[1].link);
    			alert(respons.rss.channel[0].item[1].pubDate);
				*/
				$scope.news=true;
			}
			catch(e){$scope.newserr=true;}
			},
			function (failure){$scope.newserr=true;}
		);








    }
});



/*
$(function() {
	$("#search").bind("click",function(){
		var $this = $(this);
		$.ajax({
			url:"http://csci571-nodejs.us-west-1.elasticbeanstalk.com/",
			data:{symbol:"AAPL"},
			type:'GET',
			dataType:'json',
			xhrFields:{withCredentials:false},
			success:function(respons,status,xhr){
				if(status != 200){

				}
				var key1=Object.keys(respons);
				var key2=Object.keys(respons[key1[0]]);
				var key3=Object.keys(respons[key1[1]]);
				var key4=Object.keys(respons[key1[1]][key3[0]]);
				var ticksymbol = respons[key1[0]][key2[1]];
				var lastprice = respons[key1[1]][key3[0]][key4[3]];
				var timestamp = respons[key1[0]][key2[2]];
				var open = respons[key1[1]][key3[0]][key4[0]];
				var preclose = respons[key1[1]][key3[1]][key4[3]];
				var low = respons[key1[1]][key3[0]][key4[2]];
				var high = respons[key1[1]][key3[0]][key4[1]];
				var volume = respons[key1[1]][key3[0]][key4[4]];
				var change = lastprice - preclose;
				$('#tickersymbol').html(ticksymbol);
				$('#lastprice').html(parseFloat(lastprice).toFixed(2));
				$('#change').html(parseFloat(change).toFixed(2)+'('+ parseFloat(change*100/preclose).toFixed(2) +'%)');
				$('#timestamp').html(timestamp);
				$('#open').html(parseFloat(open).toFixed(2));
				$('#close').html(parseFloat(preclose).toFixed(2));
				$('#dayrange').html(parseFloat(low).toFixed(2)+'-'+ parseFloat(high).toFixed(2));
				$('#volume').html(parseInt(volume).toLocaleString('en-US'));
			},
			error:function(xhr,status,error){
			}
		});
	})
});
*/

