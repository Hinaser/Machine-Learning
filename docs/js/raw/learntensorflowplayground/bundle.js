!function t(e,a,n){function i(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=a[s]={exports:{}};e[s][0].call(c.exports,function(t){var a=e[s][1][t];return i(a?a:t)},c,c.exports,t,e,a,n)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,a){"use strict";function n(){return s}function i(t){(!t||"en"!=t&&"ja"!=t)&&(t="en"),s=t,$(function(){var e=($("#playground-content"),$("#lang-selection button"));r(t),e.on("click",function(t){var e=$(this).data("lang");e!=s&&(s=e,r(e))})})}function r(t){if("ja"==t||"en"==t)if("en"==t)$("[data-i18n='toggleplaygroundvisibility']").text("Click this button to toggle playground visible/hidden."),$("[data-i18n='togglecolortheme']").text("You can switch theme color of this website"),$("[data-i18n='headertitle']").html('Tinker With a <b>Neural Network</b> <span class="optional">Right Here </span>in Your Browser.<br>Don’t Worry, You Can’t Break It. We Promise.'),$("[data-i18n='iterations']").text("Iterations"),$("[data-i18n='learnmingrate']").text("Learning rate"),$("[data-i18n='activation']").text("Activation"),$("[data-i18n='sigmoid']").text("Sigmoid"),$("[data-i18n='linear']").text("Linear"),$("[data-i18n='regularization']").text("Regularization"),$("[data-i18n='regularizationrate']").text("Regularization rate"),$("[data-i18n='problemtype']").text("Problem type"),$("[data-i18n='classification']").text("Classification"),$("[data-i18n='regression']").text("Regression"),$("[data-i18n='data']").text("Data"),$("[data-i18n='whichdataset']").text("Which dataset do you want to use?"),$("[data-i18n='circle']").attr("title","Circle"),$("[data-i18n='exclusiveor']").attr("title","Exclusive or"),$("[data-i18n='gaussian']").attr("title","Gaussian"),$("[data-i18n='spiral']").attr("title","Spiral"),$("[data-i18n='plane']").attr("title","Plane"),$("[data-i18n='multigaussian']").attr("title","Multi gaussian"),$("[data-i18n='rationoftrainingdata']").text("Ratio of training to test data:"),$("[data-i18n='noise']").text("Noise:"),$("[data-i18n='batchsize']").text("Batch size:"),$("[data-i18n='regen']").text("Regenerate"),$("[data-i18n='regen']").attr("title","Regenerate data"),$("[data-i18n='features']").text("Features"),$("[data-i18n='whichproperty']").text("Which properties do you want to feed in?"),$("[data-i18n='clickanywheretoedit']").text("Click anywhere to edit."),$("[data-i18n='thumbnaillabel']").html("This is the output from one <b>neuron</b>. Hover to see it larger."),$("[data-i18n='weightslabel']").html("The outputs are mixed with varying <b>weights</b>, shown by the thickness of the lines."),"1"==$("#num-layers").text()&&$("[data-i18n='layerslabel']").text("Hidden layer"),"1"!=$("#num-layers").text()&&$("[data-i18n='layerslabel']").text("Hidden layers"),$("[data-i18n='output']").text("Output"),$("[data-i18n='testloss']").text("Test loss"),$("[data-i18n='trainingloss']").text("Training loss"),$("[data-i18n='colorsshowsdata']").text(" Colors shows data, neuron and weight values."),$("[data-i18n='showtestdata']").text("Show test data"),$("[data-i18n='discretizeoutput']").text("Discretize output");else if("ja"==t){$("[data-i18n='toggleplaygroundvisibility']").text("デモの非表示/表示を切り替えられます。"),$("[data-i18n='togglecolortheme']").text("サイトのテーマカラーを切り替えられます。"),$("[data-i18n='headertitle']").html('<span class="optional">ブラウザ上で</span><b>ニューラルネットワーク</b>のメカニズムを検証してみよう。<br>何も壊れないから心配はいらない。'),$("[data-i18n='iterations']").text("エポック"),$("[data-i18n='learnmingrate']").text("学習率"),$("[data-i18n='activation']").text("活性化関数"),$("[data-i18n='sigmoid']").text("シグモイド関数"),$("[data-i18n='linear']").text("線形関数"),$("[data-i18n='regularization']").text("正則化"),$("[data-i18n='regularizationrate']").text("正則化項"),$("[data-i18n='problemtype']").text("統計モデルの種類"),$("[data-i18n='classification']").text("分類"),$("[data-i18n='regression']").text("回帰"),$("[data-i18n='data']").text("データ"),$("[data-i18n='whichdataset']").text("どのデータセットを使いますか?"),$("[data-i18n='circle']").attr("title","円"),$("[data-i18n='exclusiveor']").attr("title","排他OR"),$("[data-i18n='gaussian']").attr("title","ガウシアン"),$("[data-i18n='spiral']").attr("title","螺旋"),$("[data-i18n='plane']").attr("title","平面"),$("[data-i18n='multigaussian']").attr("title","マルチガウシアン"),$("[data-i18n='rationoftrainingdata']").text("トレーニングデータの割合:"),$("[data-i18n='noise']").text("ノイズ:"),$("[data-i18n='batchsize']").text("バッチサイズ:"),$("[data-i18n='regen']").text("再生成"),$("[data-i18n='regen']").attr("title","データを再生成する"),$("[data-i18n='features']").text("特徴"),$("[data-i18n='whichproperty']").text("入力するデータの特徴を選択してください"),$("[data-i18n='clickanywheretoedit']").text("クリックして値を編集"),$("[data-i18n='thumbnaillabel']").html("この<b>ニューロン</b>の出力です。マウスオーバーすると拡大して見れます。"),$("[data-i18n='weightslabel']").html("ニューロンの出力は<b>重み</b>の影響を受けます。重みは線の太さと色で表されます。");var e=+$("#num-layers").text();0==e||e>=10?$("[data-i18n='layerslabel']").text("個の隠し層"):$("[data-i18n='layerslabel']").text("つの隠し層"),$("[data-i18n='output']").text("出力"),$("[data-i18n='testloss']").text("誤差(テスト)"),$("[data-i18n='trainingloss']").text("誤差(トレーニング)"),$("[data-i18n='colorsshowsdata']").text("データやニューロン、重みの値は色で表現されます。"),$("[data-i18n='showtestdata']").text("テストデータを表示する"),$("[data-i18n='discretizeoutput']").text("出力を離散化する")}}var s="en";a.currentLang=n,a.init=i},{}],2:[function(t,e,a){"use strict";function n(t){for(var e=t.length,a=0,n=0;e>0;)n=Math.floor(Math.random()*e),e--,a=t[e],t[e]=t[n],t[n]=a}function i(t,e){function a(e,a,i){for(var s=0;s<t/2;s++){var o=d(e,r),l=d(a,r);n.push({x:o,y:l,label:i})}}var n=[],i=d3.scale.linear().domain([0,.5]).range([.5,4]),r=i(e);return a(2,2,1),a(-2,-2,-1),n}function r(t,e){for(var a=6,n=d3.scale.linear().domain([-10,10]).range([-1,1]),i=function(t,e){return n(t+e)},r=[],s=0;s<t;s++){var o=c(-a,a),l=c(-a,a),u=c(-a,a)*e,d=c(-a,a)*e,h=i(o+u,l+d);r.push({x:o,y:l,label:h})}return r}function s(t,e){function a(t,e){var a=0;return r.forEach(function(n){var r=n[0],s=n[1],o=n[2],l=o*i(h({x:t,y:e},{x:r,y:s}));Math.abs(l)>Math.abs(a)&&(a=l)}),a}for(var n=[],i=d3.scale.linear().domain([0,2]).range([1,0]).clamp(!0),r=[[-4,2.5,1],[0,2.5,-1],[4,2.5,1],[-4,-2.5,-1],[0,-2.5,1],[4,-2.5,-1]],s=6,o=0;o<t;o++){var l=c(-s,s),u=c(-s,s),d=c(-s,s)*e,p=c(-s,s)*e,f=a(l+d,u+p);n.push({x:l,y:u,label:f})}return n}function o(t,e){function a(t,a){for(var r=0;r<i;r++){var s=r/i*5,o=1.75*r/i*2*Math.PI+t,l=s*Math.sin(o)+c(-1,1)*e,u=s*Math.cos(o)+c(-1,1)*e;n.push({x:l,y:u,label:a})}}var n=[],i=t/2;return a(0,1),a(Math.PI,-1),n}function l(t,e){function a(t,e){return h(t,e)<.5*i?1:-1}for(var n=[],i=5,r=0;r<t/2;r++){var s=c(0,.5*i),o=c(0,2*Math.PI),l=s*Math.sin(o),u=s*Math.cos(o),d=c(-i,i)*e,p=c(-i,i)*e,f=a({x:l+d,y:u+p},{x:0,y:0});n.push({x:l,y:u,label:f})}for(var r=0;r<t/2;r++){var s=c(.7*i,i),o=c(0,2*Math.PI),l=s*Math.sin(o),u=s*Math.cos(o),d=c(-i,i)*e,p=c(-i,i)*e,f=a({x:l+d,y:u+p},{x:0,y:0});n.push({x:l,y:u,label:f})}return n}function u(t,e){function a(t){return t.x*t.y>=0?1:-1}for(var n=[],i=0;i<t;i++){var r=c(-5,5),s=.3;r+=r>0?s:-s;var o=c(-5,5);o+=o>0?s:-s;var l=c(-5,5)*e,u=c(-5,5)*e,d=a({x:r+l,y:o+u});n.push({x:r,y:o,label:d})}return n}function c(t,e){return Math.random()*(e-t)+t}function d(t,e){void 0===t&&(t=0),void 0===e&&(e=1);var a,n,i;do a=2*Math.random()-1,n=2*Math.random()-1,i=a*a+n*n;while(i>1);var r=Math.sqrt(-2*Math.log(i)/i)*a;return t+Math.sqrt(e)*r}function h(t,e){var a=t.x-e.x,n=t.y-e.y;return Math.sqrt(a*a+n*n)}a.shuffle=n,a.classifyTwoGaussData=i,a.regressPlane=r,a.regressGaussian=s,a.classifySpiralData=o,a.classifyCircleData=l,a.classifyXORData=u},{}],3:[function(t,e,a){"use strict";function n(t,e){if(t.length!==t[0].length)throw new Error("The provided matrix must be a square matrix");if(t.length%e!==0)throw new Error("The width/height of the matrix must be divisible by the reduction factor");for(var a=new Array(t.length/e),n=0;n<t.length;n+=e){a[n/e]=new Array(t.length/e);for(var i=0;i<t.length;i+=e){for(var r=0,s=0;s<e;s++)for(var o=0;o<e;o++)r+=t[n+s][i+o];r/=e*e,a[n/e][i/e]=r}}return a}var i=30,r=function(){function t(t,e,a,n,r,s){this.settings={showAxes:!1,noSvg:!1},this.numSamples=e;var o=t,l=s.showAxes?20:0;if(null!=s)for(var u in s)this.settings[u]=s[u];this.xScale=d3.scale.linear().domain(a).range([0,t-2*l]),this.yScale=d3.scale.linear().domain(n).range([o-2*l,0]);var c=d3.scale.linear().domain([0,.5,1]).range(["#f59322","#e8eaeb","#0877bd"]).clamp(!0),d=d3.range(0,1+1e-9,1/i).map(function(t){return c(t)});if(this.color=d3.scale.quantize().domain([-1,1]).range(d),r=r.append("div").style({width:t+"px",height:o+"px",position:"relative",top:"-"+l+"px",left:"-"+l+"px"}),this.canvas=r.append("canvas").attr("width",e).attr("height",e).style("width",t-2*l+"px").style("height",o-2*l+"px").style("position","absolute").style("top",l+"px").style("left",l+"px"),this.settings.noSvg||(this.svg=r.append("svg").attr({width:t,height:o}).style({position:"absolute",left:"0",top:"0"}).append("g").attr("transform","translate("+l+","+l+")"),this.svg.append("g").attr("class","train"),this.svg.append("g").attr("class","test")),this.settings.showAxes){var h=d3.svg.axis().scale(this.xScale).orient("bottom"),p=d3.svg.axis().scale(this.yScale).orient("right");this.svg.append("g").attr("class","x axis").attr("transform","translate(0,"+(o-2*l)+")").call(h),this.svg.append("g").attr("class","y axis").attr("transform","translate("+(t-2*l)+",0)").call(p)}}return t.prototype.updateTestPoints=function(t){if(this.settings.noSvg)throw Error("Can't add points since noSvg=true");this.updateCircles(this.svg.select("g.test"),t)},t.prototype.updatePoints=function(t){if(this.settings.noSvg)throw Error("Can't add points since noSvg=true");this.updateCircles(this.svg.select("g.train"),t)},t.prototype.updateBackground=function(t,e){var a=t[0].length,n=t.length;if(a!==this.numSamples||n!==this.numSamples)throw new Error("The provided data matrix must be of size numSamples X numSamples");for(var i=this.canvas.node().getContext("2d"),r=i.createImageData(a,n),s=0,o=-1;s<n;++s)for(var l=0;l<a;++l){var u=t[l][s];e&&(u=u>=0?1:-1);var c=d3.rgb(this.color(u));r.data[++o]=c.r,r.data[++o]=c.g,r.data[++o]=c.b,r.data[++o]=160}i.putImageData(r,0,0)},t.prototype.updateCircles=function(t,e){var a=this,n=this.xScale.domain(),i=this.yScale.domain();e=e.filter(function(t){return t.x>=n[0]&&t.x<=n[1]&&t.y>=i[0]&&t.y<=i[1]});var r=t.selectAll("circle").data(e);r.enter().append("circle").attr("r",3),r.attr({cx:function(t){return a.xScale(t.x)},cy:function(t){return a.yScale(t.y)}}).style("fill",function(t){return a.color(t.label)}),r.exit().remove()},t}();a.HeatMap=r,a.reduceMatrix=n},{}],4:[function(t,e,a){"use strict";var n=function(){function t(t,e){this.data=[],this.minY=Number.MAX_VALUE,this.maxY=Number.MIN_VALUE,this.lineColors=e,this.numLines=e.length;var a=t.node(),n=a.offsetWidth,i=a.offsetHeight,r={top:2,right:0,bottom:2,left:2},s=n-r.left-r.right,o=i-r.top-r.bottom;this.xScale=d3.scale.linear().domain([0,0]).range([0,s]),this.yScale=d3.scale.linear().domain([0,0]).range([o,0]),this.svg=t.append("svg").attr("width",s+r.left+r.right).attr("height",o+r.top+r.bottom).append("g").attr("transform","translate("+r.left+","+r.top+")"),this.paths=new Array(this.numLines);for(var l=0;l<this.numLines;l++)this.paths[l]=this.svg.append("path").attr("class","line").style({fill:"none",stroke:e[l],"stroke-width":"1.5px"})}return t.prototype.reset=function(){this.data=[],this.redraw(),this.minY=Number.MAX_VALUE,this.maxY=Number.MIN_VALUE},t.prototype.addDataPoint=function(t){var e=this;if(t.length!==this.numLines)throw Error("Length of dataPoint must equal number of lines");t.forEach(function(t){e.minY=Math.min(e.minY,t),e.maxY=Math.max(e.maxY,t)}),this.data.push({x:this.data.length+1,y:t}),this.redraw()},t.prototype.redraw=function(){var t=this;this.xScale.domain([1,this.data.length]),this.yScale.domain([this.minY,this.maxY]);for(var e=function(e){return d3.svg.line().x(function(e){return t.xScale(e.x)}).y(function(a){return t.yScale(a.y[e])})},a=0;a<this.numLines;a++)this.paths[a].datum(this.data).attr("d",e(a))},t}();a.AppendingLineChart=n},{}],5:[function(t,e,a){"use strict";function n(t,e,a,n,i,r){for(var s=t.length,o=1,l=[],c=0;c<s;c++){var d=c===s-1,h=0===c,f=[];l.push(f);for(var v=t[c],g=0;g<v;g++){var m=o.toString();h?m=i[g]:o++;var y=new u(m,d?a:e,r);if(f.push(y),c>=1)for(var x=0;x<l[c-1].length;x++){var b=l[c-1][x],w=new p(b,y,n,r);b.outputs.push(w),y.inputLinks.push(w)}}}return l}function i(t,e){var a=t[0];if(e.length!==a.length)throw new Error("The number of inputs must match the number of nodes in the input layer");for(var n=0;n<a.length;n++){var i=a[n];i.output=e[n]}for(var r=1;r<t.length;r++)for(var s=t[r],n=0;n<s.length;n++){var i=s[n];i.updateOutput()}return t[t.length-1][0].output}function r(t,e,a){var n=t[t.length-1][0];n.outputDer=a.der(n.output,e);for(var i=t.length-1;i>=1;i--){for(var r=t[i],s=0;s<r.length;s++){var o=r[s];o.inputDer=o.outputDer*o.activation.der(o.totalInput),o.accInputDer+=o.inputDer,o.numAccumulatedDers++}for(var s=0;s<r.length;s++)for(var o=r[s],l=0;l<o.inputLinks.length;l++){var u=o.inputLinks[l];u.errorDer=o.inputDer*u.source.output,u.accErrorDer+=u.errorDer,u.numAccumulatedDers++}if(1!==i)for(var c=t[i-1],s=0;s<c.length;s++){var o=c[s];o.outputDer=0;for(var l=0;l<o.outputs.length;l++){var d=o.outputs[l];o.outputDer+=d.weight*d.dest.inputDer}}}}function s(t,e,a){for(var n=1;n<t.length;n++)for(var i=t[n],r=0;r<i.length;r++){var s=i[r];s.numAccumulatedDers>0&&(s.bias-=e*s.accInputDer/s.numAccumulatedDers,s.accInputDer=0,s.numAccumulatedDers=0);for(var o=0;o<s.inputLinks.length;o++){var l=s.inputLinks[o],u=l.regularization?l.regularization.der(l.weight):0;l.numAccumulatedDers>0&&(l.weight-=e/l.numAccumulatedDers*(l.accErrorDer+a*u),l.accErrorDer=0,l.numAccumulatedDers=0)}}}function o(t,e,a){for(var n=e?1:0;n<t.length;n++)for(var i=t[n],r=0;r<i.length;r++){var s=i[r];a(s)}}function l(t){return t[t.length-1][0]}var u=function(){function t(t,e,a){this.inputLinks=[],this.bias=.1,this.outputs=[],this.outputDer=0,this.inputDer=0,this.accInputDer=0,this.numAccumulatedDers=0,this.id=t,this.activation=e,a&&(this.bias=0)}return t.prototype.updateOutput=function(){this.totalInput=this.bias;for(var t=0;t<this.inputLinks.length;t++){var e=this.inputLinks[t];this.totalInput+=e.weight*e.source.output}return this.output=this.activation.output(this.totalInput),this.output},t}();a.Node=u;var c=function(){function t(){}return t.SQUARE={error:function(t,e){return.5*Math.pow(t-e,2)},der:function(t,e){return t-e}},t}();a.Errors=c,Math.tanh=Math.tanh||function(t){if(t===1/0)return 1;if(t===-(1/0))return-1;var e=Math.exp(2*t);return(e-1)/(e+1)};var d=function(){function t(){}return t.TANH={output:function(t){return Math.tanh(t)},der:function(e){var a=t.TANH.output(e);return 1-a*a}},t.RELU={output:function(t){return Math.max(0,t)},der:function(t){return t<=0?0:1}},t.SIGMOID={output:function(t){return 1/(1+Math.exp(-t))},der:function(e){var a=t.SIGMOID.output(e);return a*(1-a)}},t.LINEAR={output:function(t){return t},der:function(t){return 1}},t}();a.Activations=d;var h=function(){function t(){}return t.L1={output:function(t){return Math.abs(t)},der:function(t){return t<0?-1:1}},t.L2={output:function(t){return.5*t*t},der:function(t){return t}},t}();a.RegularizationFunction=h;var p=function(){function t(t,e,a,n){this.weight=Math.random()-.5,this.errorDer=0,this.accErrorDer=0,this.numAccumulatedDers=0,this.id=t.id+"-"+e.id,this.source=t,this.dest=e,this.regularization=a,n&&(this.weight=0)}return t}();a.Link=p,a.buildNetwork=n,a.forwardProp=i,a.backProp=r,a.updateWeights=s,a.forEachNode=o,a.getOutputNode=l},{}],6:[function(t,e,a){"use strict";function n(t){return function(){var e=d3.interpolateNumber(window.pageYOffset||document.documentElement.scrollTop,t);return function(t){scrollTo(0,e(t))}}}function i(){d3.select("#reset-button").on("click",function(){b(),E(),d3.select("#play-pause-button")}),d3.select("#play-pause-button").on("click",function(){E(),at.playOrPause()}),at.onPlayPause(function(t){d3.select("#play-pause-button").classed("playing",t)}),d3.select("#next-step-button").on("click",function(){at.pause(),E(),0==J&&R(),y()}),d3.select("#data-regen-button").on("click",function(){A(),rt=!0});var t=d3.selectAll("canvas[data-dataset]");t.on("click",function(){var e=$.datasets[this.dataset.dataset];e!==U.dataset&&(U.dataset=e,t.classed("selected",!1),d3.select(this).classed("selected",!0),A(),rt=!0,b())});var e=$.getKeyFromValue($.datasets,U.dataset);d3.select("canvas[data-dataset="+e+"]").classed("selected",!0);var a=d3.selectAll("canvas[data-regDataset]");a.on("click",function(){var t=$.regDatasets[this.dataset.regdataset];t!==U.regDataset&&(U.regDataset=t,a.classed("selected",!1),d3.select(this).classed("selected",!0),A(),rt=!0,b())});var n=$.getKeyFromValue($.regDatasets,U.regDataset);d3.select("canvas[data-regDataset="+n+"]").classed("selected",!0),d3.select("#add-layers").on("click",function(){U.numHiddenLayers>=6||(U.networkShape[U.numHiddenLayers]=2,U.numHiddenLayers++,rt=!0,b())}),d3.select("#remove-layers").on("click",function(){U.numHiddenLayers<=0||(U.numHiddenLayers--,U.networkShape.splice(U.numHiddenLayers),rt=!0,b())});var i=d3.select("#show-test-data").on("change",function(){U.showTestData=this.checked,U.serialize(),E(),W.updateTestPoints(U.showTestData?Q:[])});i.property("checked",U.showTestData);var r=d3.select("#discretize").on("change",function(){U.discretize=this.checked,U.serialize(),E(),v()});r.property("checked",U.discretize);var s=d3.select("#percTrainData").on("input",function(){U.percTrainData=this.value,d3.select("label[for='percTrainData'] .value").text(this.value),A(),rt=!0,b()});s.property("value",U.percTrainData),d3.select("label[for='percTrainData'] .value").text(U.percTrainData);var o=d3.select("#noise").on("input",function(){U.noise=this.value,d3.select("label[for='noise'] .value").text(this.value),A(),rt=!0,b()});o.property("value",U.noise),d3.select("label[for='noise'] .value").text(U.noise);var u=d3.select("#batchSize").on("input",function(){U.batchSize=this.value,d3.select("label[for='batchSize'] .value").text(this.value),rt=!0,b()});u.property("value",U.batchSize),d3.select("label[for='batchSize'] .value").text(U.batchSize);var c=d3.select("#activations").on("change",function(){U.activation=$.activations[this.value],rt=!0,b()});c.property("value",$.getKeyFromValue($.activations,U.activation));var d=d3.select("#learningRate").on("change",function(){U.learningRate=+this.value,U.serialize(),E(),rt=!0});d.property("value",U.learningRate);var h=d3.select("#regularizations").on("change",function(){U.regularization=$.regularizations[this.value],rt=!0,b()});h.property("value",$.getKeyFromValue($.regularizations,U.regularization));var p=d3.select("#regularRate").on("change",function(){U.regularizationRate=+this.value,rt=!0,b()});p.property("value",U.regularizationRate);var f=d3.select("#problem").on("change",function(){U.problem=$.problems[this.value],A(),k(),rt=!0,b()});f.property("value",$.getKeyFromValue($.problems,U.problem));var g=(d3.select("#playground-toggler").on("click",function(){at.pause()}),d3.scale.linear().domain([-1,1]).range([0,144])),m=d3.svg.axis().scale(g).orient("bottom").tickValues([-1,0,1]).tickFormat(d3.format("d"));d3.select("#colormap g.core").append("g").attr("class","x axis").attr("transform","translate(0,10)").call(m),window.addEventListener("resize",function(){var t=document.querySelector("#main-part").getBoundingClientRect().width;t!==L&&(L=t,l(Z),v(!0))}),U.hideText&&(d3.select("#article-text").style("display","none"),d3.select("div.more").style("display","none"),d3.select("header").style("display","none"))}function r(t){N.forEachNode(t,!0,function(t){d3.select("rect#bias-"+t.id).style("fill",V(t.bias))})}function s(t,e){for(var a=1;a<t.length;a++)for(var n=t[a],i=0;i<n.length;i++)for(var r=n[i],s=0;s<r.inputLinks.length;s++){var o=r.inputLinks[s];e.select("#link"+o.source.id+"-"+o.dest.id).style({"stroke-dashoffset":-J/3,"stroke-width":j(Math.abs(o.weight)),stroke:V(o.weight)}).datum(o)}}function o(t,e,a,n,i,r){var s=t-z/2,o=e-z/2,l=i.append("g").attr({class:"node",id:"node"+a,transform:"translate("+s+","+o+")"});l.append("rect").attr({x:0,y:0,width:z,height:z});var u=U[a]?"active":"inactive";if(n){var c=null!=Y[a].label?Y[a].label:a,h=l.append("text").attr({class:"main-label",x:-10,y:z/2,"text-anchor":"end"});if(/[_^]/.test(c)){for(var f=/(.*?)([_^])(.)/g,v=void 0,g=void 0;null!==(v=f.exec(c));){g=f.lastIndex;var m=v[1],y=v[2],x=v[3];m&&h.append("tspan").text(m),h.append("tspan").attr("baseline-shift","_"==y?"sub":"super").style("font-size","9px").text(x)}c.substring(g)&&h.append("tspan").text(c.substring(g))}else h.append("tspan").text(c);l.classed(u,!0)}n||l.append("rect").attr({id:"bias-"+a,x:-P-2,y:z-P+3,width:P,height:P}).on("mouseenter",function(){d(I.BIAS,r,d3.mouse(i.node()))}).on("mouseleave",function(){d(null)});var w=d3.select("#network").insert("div",":first-child").attr({id:"canvas-"+a,class:"canvas"}).style({position:"absolute",left:s+3+"px",top:o+3+"px"}).on("mouseenter",function(){q=a,w.classed("hovered",!0),l.classed("hovered",!0),p(Z,!1),W.updateBackground(F[a],U.discretize)}).on("mouseleave",function(){q=null,w.classed("hovered",!1),l.classed("hovered",!1),p(Z,!1),W.updateBackground(F[N.getOutputNode(Z).id],U.discretize)});n&&(w.on("click",function(){U[a]=!U[a],rt=!0,b()}),w.style("cursor","pointer")),n&&w.classed(u,!0);var k=new D.HeatMap(z,H/10,X,X,w,{noSvg:!0});w.datum({heatmap:k,id:a})}function l(t){var e=d3.select("#svg");e.select("g.core").remove(),d3.select("#network").selectAll("div.canvas").remove(),d3.select("#network").selectAll("div.plus-minus-neurons").remove();var a=3,n=d3.select(".column.output").node(),i=d3.select(".column.features").node(),r=n.offsetLeft-i.offsetLeft;e.attr("width",r);var s={},l=e.append("g").classed("core",!0).attr("transform","translate("+a+","+a+")"),d=t.length,p=118,f=d3.scale.ordinal().domain(d3.range(1,d-1)).rangePoints([p,r-z],.7),v=function(t){return t*(z+25)},g=d3.select(".callout.thumbnail").style("display","none"),m=d3.select(".callout.weights").style("display","none"),y=null,x=null,b=z/2+50,w=Object.keys(Y),k=v(w.length);w.forEach(function(t,e){var a=v(e)+z/2;s[t]={cx:b,cy:a},o(b,a,t,!0,l)});for(var S=1;S<d-1;S++){var A=t[S].length,E=f(S)+z/2;k=Math.max(k,v(A)),c(f(S),S);for(var R=0;R<A;R++){var L=t[S][R],N=v(R)+z/2;s[L.id]={cx:E,cy:N},o(E,N,L.id,!1,l,L);var D=t[S].length,$=t[S+1].length;null==y&&R===D-1&&$<=D&&(g.style({display:null,top:23+N+"px",left:E+"px"}),y=L.id);for(var T=0;T<L.inputLinks.length;T++){var O=L.inputLinks[T],M=h(O,s,t,l,0===T,T,L.inputLinks.length).node(),I=t[S-1],P=I[I.length-1];if(null==x&&R===D-1&&O.source.id===P.id&&(O.source.id!==y||d<=5)&&O.dest.id!==y&&I.length>=D){var B=M.getPointAtLength(.7*M.getTotalLength());m.style({display:null,top:B.y+5+"px",left:B.x+3+"px"}),x=O.dest.id}}}}b=r+z/2;var C=t[d-1][0],H=v(0)+z/2;s[C.id]={cx:b,cy:H};for(var R=0;R<C.inputLinks.length;R++){var O=C.inputLinks[R];h(O,s,t,l,0===R,R,C.inputLinks.length)}e.attr("height",k);var _=Math.max(u(g),u(m),u(d3.select("#network")));d3.select(".column.features").style("height",_+"px")}function u(t){var e=t.node();return e.offsetHeight+e.offsetTop}function c(t,e){var a=d3.select("#network").append("div").classed("plus-minus-neurons",!0).style("left",t-10+"px"),n=e-1,i=a.append("div").attr("class","ui-numNodes"+e);i.append("button").attr("class","mdl-button mdl-js-button mdl-button--icon").on("click",function(){var t=U.networkShape[n];t>=8||(U.networkShape[n]++,rt=!0,b())}).append("i").attr("class","material-icons").text("add"),i.append("button").attr("class","mdl-button mdl-js-button mdl-button--icon").on("click",function(){var t=U.networkShape[n];t<=1||(U.networkShape[n]--,rt=!0,b())}).append("i").attr("class","material-icons").text("remove");var r=U.networkShape[n]>1?"s":"";a.append("div").text(U.networkShape[n]+" neuron"+r)}function d(t,e,a){var n=d3.select("#hovercard");if(null==t)return n.style("display","none"),void d3.select("#svg").on("click",null);d3.select("#svg").on("click",function(){n.select(".value").style("display","none");var i=n.select("input");i.style("display",null),i.on("input",function(){null!=this.value&&""!==this.value&&(t==I.WEIGHT?e.weight=+this.value:e.bias=+this.value,v())}),i.on("keypress",function(){13==d3.event.keyCode&&d(t,e,a)}),i.node().focus()});var i=t==I.WEIGHT?e.weight:e.bias,r=t==I.WEIGHT?"Weight":"Bias";n.style({left:a[0]+20+"px",top:a[1]+"px",display:"block"}),n.select(".type").text(r),n.select(".value").style("display",null).text(i.toPrecision(2)),n.select("input").property("value",i.toPrecision(2)).style("display","none")}function h(t,e,a,n,i,r,s){var o=n.insert("path",":first-child"),l=e[t.source.id],u=e[t.dest.id],c={source:{y:l.cx+z/2+2,x:l.cy},target:{y:u.cx-z/2,x:u.cy+(r-(s-1)/2)/s*12}},h=d3.svg.diagonal().projection(function(t){return[t.y,t.x]});return o.attr({"marker-start":"url(#markerArrow)",class:"link",id:"link"+t.source.id+"-"+t.dest.id,d:h(c,0)}),n.append("path").attr("d",h(c,0)).attr("class","link-hover").on("mouseenter",function(){d(I.WEIGHT,t,d3.mouse(this))}).on("mouseleave",function(){d(null)}),o}function p(t,e){if(e){F={},N.forEachNode(t,!0,function(t){F[t.id]=new Array(H)});for(var a in Y)F[a]=new Array(H)}var n=d3.scale.linear().domain([0,H-1]).range(X),i=d3.scale.linear().domain([H-1,0]).range(X),r=0,s=0;for(r=0;r<H;r++){if(e){N.forEachNode(t,!0,function(t){F[t.id][r]=new Array(H)});for(var a in Y)F[a][r]=new Array(H)}for(s=0;s<H;s++){var o=n(r),l=i(s),u=m(o,l);if(N.forwardProp(t,u),N.forEachNode(t,!0,function(t){F[t.id][r][s]=t.output}),e)for(var a in Y)F[a][r][s]=Y[a].f(o,l)}}}function f(t,e){for(var a=0,n=0;n<e.length;n++){var i=e[n],r=m(i.x,i.y),s=N.forwardProp(t,r);a+=N.Errors.SQUARE.error(s,i.label)}return a/e.length}function v(t){function e(t){var e="000000";return(e+t).slice(-e.length)}function a(t){return t.replace(/\B(?=(\d{3})+(?!\d))/g,",")}function n(t){return t.toFixed(3)}void 0===t&&(t=!1),s(Z,d3.select("g.core")),r(Z),p(Z,t);var i=null!=q?q:N.getOutputNode(Z).id;W.updateBackground(F[i],U.discretize),d3.select("#network").selectAll("div.canvas").each(function(t){t.heatmap.updateBackground(D.reduceMatrix(F[t.id],10),U.discretize)}),d3.select("#loss-train").text(n(tt)),d3.select("#loss-test").text(n(et)),d3.select("#iter-number").text(a(e(J))),nt.addDataPoint([tt,et])}function g(){var t=[];for(var e in Y)U[e]&&t.push(e);return t}function m(t,e){var a=[];for(var n in Y)U[n]&&a.push(Y[n].f(t,e));return a}function y(){J++,K.forEach(function(t,e){var a=m(t.x,t.y);N.forwardProp(Z,a),N.backProp(Z,t.label,N.Errors.SQUARE),(e+1)%U.batchSize===0&&N.updateWeights(Z,U.learningRate,U.regularizationRate)}),tt=f(Z,K),et=f(Z,Q),v()}function x(t){for(var e=[],a=0;a<t.length-1;a++)for(var n=t[a],i=0;i<n.length;i++)for(var r=n[i],s=0;s<r.outputs.length;s++){var o=r.outputs[s];e.push(o.weight)}return e}function b(t){if(void 0===t&&(t=!1),nt.reset(),U.serialize(),t||E(),at.pause(),d3.select("#num-layers").text(U.numHiddenLayers),"ja"==M.currentLang())0==U.numHiddenLayers||U.numHiddenLayers>=10?d3.select("#layers-label").text("個の隠し層"):d3.select("#layers-label").text("つの隠し層");else{var e=1!==U.numHiddenLayers?"s":"";d3.select("#layers-label").text("Hidden layer"+e)}J=0;var a=m(0,0).length,n=[a].concat(U.networkShape).concat([1]),i=U.problem==$.Problem.REGRESSION?N.Activations.LINEAR:N.Activations.TANH;Z=N.buildNetwork(n,U.activation,i,U.regularization,g(),U.initZero),tt=f(Z,K),et=f(Z,Q),l(Z),v(!0)}function w(){if(null!=U.tutorial&&""!=U.tutorial&&!U.hideText){d3.selectAll("article div.l--body").remove();var t=d3.select("article").append("div").attr("class","l--body");d3.html("tutorials/"+U.tutorial+".html",function(e,a){if(e)throw e;t.node().appendChild(a);var n=t.select("title");n.size()&&(d3.select("header h1").style({"margin-top":"20px","margin-bottom":"20px"}).text(n.text()),document.title=n.text())})}}function k(){function t(t,e){var a=100,n=100;t.setAttribute("width",a),t.setAttribute("height",n);var i=t.getContext("2d"),r=e(200,0);r.forEach(function(t){i.fillStyle=V(t.label),i.fillRect(a*(t.x+6)/12,n*(t.y+6)/12,4,4)}),d3.select(t.parentNode).style("display",null)}if(d3.selectAll(".dataset").style("display","none"),U.problem==$.Problem.CLASSIFICATION)for(var e in $.datasets){var a=document.querySelector("canvas[data-dataset="+e+"]"),n=$.datasets[e];t(a,n)}if(U.problem==$.Problem.REGRESSION)for(var i in $.regDatasets){var a=document.querySelector("canvas[data-regDataset="+i+"]"),n=$.regDatasets[i];t(a,n)}}function S(){var t=U.getHiddenProps();t.forEach(function(t){var e=d3.selectAll(".ui-"+t);0==e.size()&&console.warn("0 html elements found with class .ui-"+t),e.style("display","none")});var e=d3.select(".hide-controls");_.forEach(function(a){var n=a[0],i=a[1],r=e.append("label").attr("class","mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"),s=r.append("input").attr({type:"checkbox",class:"mdl-checkbox__input"});t.indexOf(i)==-1&&s.attr("checked","true"),s.on("change",function(){U.setHideProperty(i,!this.checked),U.serialize(),E(),d3.select(".hide-controls-link").attr("href",window.location.href)}),r.append("span").attr("class","mdl-checkbox__label label").text(n)}),d3.select(".hide-controls-link").attr("href",window.location.href)}function A(t){void 0===t&&(t=!1),t||(U.seed=Math.random().toFixed(5),U.serialize(),E()),Math.seedrandom(U.seed);var e=U.problem==$.Problem.REGRESSION?C:B,a=U.problem==$.Problem.CLASSIFICATION?U.dataset:U.regDataset,n=a(e,U.noise/100);T.shuffle(n);var i=Math.floor(n.length*U.percTrainData/100);K=n.slice(0,i),Q=n.slice(i),W.updatePoints(K),W.updateTestPoints(U.showTestData?Q:[])}function E(){if(it){it=!1;var t="index";null!=U.tutorial&&""!=U.tutorial&&(t="/v/tutorials/"+U.tutorial);try{ga("set","page",t),ga("send","pageview",{sessionControl:"start"})}catch(t){}}}function R(){try{ga("send",{hitType:"event",eventCategory:"Starting Simulation",eventAction:rt?"changed":"unchanged",eventLabel:null==U.tutorial?"":U.tutorial})}catch(t){}rt=!1}var L,N=t("./nn"),D=t("./heatmap"),$=t("./state"),T=t("./dataset"),O=t("./linechart"),M=t("./additionalcontent");d3.select(".more button").on("click",function(){var t=800;d3.transition().duration(1e3).tween("scroll",n(t))});var I,z=30,P=5,B=500,C=1200,H=100;!function(t){t[t.BIAS=0]="BIAS",t[t.WEIGHT=1]="WEIGHT"}(I||(I={}));var Y={x:{f:function(t,e){return t},label:"X_1"},y:{f:function(t,e){return e},label:"X_2"},xSquared:{f:function(t,e){return t*t},label:"X_1^2"},ySquared:{f:function(t,e){return e*e},label:"X_2^2"},xTimesY:{f:function(t,e){return t*e},label:"X_1X_2"},sinX:{f:function(t,e){return Math.sin(t)},label:"sin(X_1)"},sinY:{f:function(t,e){return Math.sin(e)},label:"sin(X_2)"}},_=[["Show test data","showTestData"],["Discretize output","discretize"],["Play button","playButton"],["Step button","stepButton"],["Reset button","resetButton"],["Learning rate","learningRate"],["Activation","activation"],["Regularization","regularization"],["Regularization rate","regularizationRate"],["Problem type","problem"],["Which dataset","dataset"],["Ratio train data","percTrainData"],["Noise level","noise"],["Batch size","batchSize"],["# of hidden layers","numHiddenLayers"]],G=function(){function t(){this.timerIndex=0,this.isPlaying=!1,this.callback=null}return t.prototype.playOrPause=function(){this.isPlaying?(this.isPlaying=!1,this.pause()):(this.isPlaying=!0,0==J&&R(),this.play())},t.prototype.onPlayPause=function(t){this.callback=t},t.prototype.play=function(){this.pause(),this.isPlaying=!0,this.callback&&this.callback(this.isPlaying),this.start(this.timerIndex)},t.prototype.pause=function(){this.timerIndex++,this.isPlaying=!1,this.callback&&this.callback(this.isPlaying)},t.prototype.start=function(t){var e=this;d3.timer(function(){return t<e.timerIndex||(y(),!1)},0)},t}(),U=$.State.deserializeState();
U.getHiddenProps().forEach(function(t){t in Y&&delete Y[t]});var F={},q=null,X=[-6,6],W=new D.HeatMap(300,H,X,X,d3.select("#heatmap"),{showAxes:!0}),j=d3.scale.linear().domain([0,5]).range([1,10]).clamp(!0),V=d3.scale.linear().domain([-1,0,1]).range(["#f59322","#e8eaeb","#0877bd"]).clamp(!0),J=0,K=[],Q=[],Z=null,tt=0,et=0,at=new G,nt=new O.AppendingLineChart(d3.select("#linechart"),["#777","black"]);a.getOutputWeights=x;var it=!0,rt=!1;k(),w(),i(),A(!0),b(!0),S(),M.init(U.lang)},{"./additionalcontent":1,"./dataset":2,"./heatmap":3,"./linechart":4,"./nn":5,"./state":7}],7:[function(t,e,a){"use strict";function n(t,e){for(var a in t)if(t[a]===e)return a}function i(t,e){return t.substr(-e.length)===e}function r(t){var e=[];for(var a in t)i(a,l)&&e.push(a);return e}var s=t("./nn"),o=t("./dataset"),l="_hide";a.activations={relu:s.Activations.RELU,tanh:s.Activations.TANH,sigmoid:s.Activations.SIGMOID,linear:s.Activations.LINEAR},a.regularizations={none:null,L1:s.RegularizationFunction.L1,L2:s.RegularizationFunction.L2},a.datasets={circle:o.classifyCircleData,xor:o.classifyXORData,gauss:o.classifyTwoGaussData,spiral:o.classifySpiralData},a.regDatasets={"reg-plane":o.regressPlane,"reg-gauss":o.regressGaussian},a.getKeyFromValue=n,function(t){t[t.STRING=0]="STRING",t[t.NUMBER=1]="NUMBER",t[t.ARRAY_NUMBER=2]="ARRAY_NUMBER",t[t.ARRAY_STRING=3]="ARRAY_STRING",t[t.BOOLEAN=4]="BOOLEAN",t[t.OBJECT=5]="OBJECT"}(a.Type||(a.Type={}));var u=a.Type;!function(t){t[t.CLASSIFICATION=0]="CLASSIFICATION",t[t.REGRESSION=1]="REGRESSION"}(a.Problem||(a.Problem={}));var c=a.Problem;a.problems={classification:c.CLASSIFICATION,regression:c.REGRESSION};var d=function(){function t(){this.learningRate=.03,this.regularizationRate=0,this.showTestData=!1,this.noise=0,this.batchSize=10,this.discretize=!1,this.tutorial=null,this.percTrainData=50,this.activation=s.Activations.TANH,this.regularization=null,this.problem=c.CLASSIFICATION,this.initZero=!1,this.hideText=!1,this.collectStats=!1,this.numHiddenLayers=1,this.hiddenLayerControls=[],this.networkShape=[4,2],this.x=!0,this.y=!0,this.xTimesY=!1,this.xSquared=!1,this.ySquared=!1,this.cosX=!1,this.sinX=!1,this.cosY=!1,this.sinY=!1,this.dataset=o.classifyCircleData,this.regDataset=o.regressPlane,this.lang="ja"}return t.deserializeState=function(){function e(t){return t in n&&null!=n[t]&&""!==n[t].trim()}function a(t){return""===t.trim()?[]:t.split(",")}for(var n={},i=0,s=window.location.hash.slice(1).split("&");i<s.length;i++){var o=s[i],l=o.split("="),c=l[0],d=l[1];n[c]=d}var h=new t;return t.PROPS.forEach(function(t){var i=t.name,r=t.type,s=t.keyMap;switch(r){case u.OBJECT:if(null==s)throw Error("A key-value map must be provided for state variables of type Object");e(i)&&n[i]in s&&(h[i]=s[n[i]]);break;case u.NUMBER:e(i)&&(h[i]=+n[i]);break;case u.STRING:e(i)&&(h[i]=n[i]);break;case u.BOOLEAN:e(i)&&(h[i]="false"!==n[i]);break;case u.ARRAY_NUMBER:i in n&&(h[i]=a(n[i]).map(Number));break;case u.ARRAY_STRING:i in n&&(h[i]=a(n[i]));break;default:throw Error("Encountered an unknown type for a state variable")}}),r(n).forEach(function(t){h[t]="true"===n[t]}),h.numHiddenLayers=h.networkShape.length,null==h.seed&&(h.seed=Math.random().toFixed(5)),Math.seedrandom(h.seed),h},t.prototype.serialize=function(){var e=this,a=[];t.PROPS.forEach(function(t){var i=t.name,r=t.type,s=t.keyMap,o=e[i];null!=o&&(r===u.OBJECT?o=n(s,o):r!==u.ARRAY_NUMBER&&r!==u.ARRAY_STRING||(o=o.join(",")),a.push(i+"="+o))}),r(this).forEach(function(t){a.push(t+"="+e[t])}),window.location.hash=a.join("&")},t.prototype.getHiddenProps=function(){var t=[];for(var e in this)i(e,l)&&this[e]===!0&&t.push(e.replace(l,""));return t},t.prototype.setHideProperty=function(t,e){this[t+l]=e},t.PROPS=[{name:"activation",type:u.OBJECT,keyMap:a.activations},{name:"regularization",type:u.OBJECT,keyMap:a.regularizations},{name:"batchSize",type:u.NUMBER},{name:"dataset",type:u.OBJECT,keyMap:a.datasets},{name:"regDataset",type:u.OBJECT,keyMap:a.regDatasets},{name:"learningRate",type:u.NUMBER},{name:"regularizationRate",type:u.NUMBER},{name:"noise",type:u.NUMBER},{name:"networkShape",type:u.ARRAY_NUMBER},{name:"seed",type:u.STRING},{name:"showTestData",type:u.BOOLEAN},{name:"discretize",type:u.BOOLEAN},{name:"percTrainData",type:u.NUMBER},{name:"x",type:u.BOOLEAN},{name:"y",type:u.BOOLEAN},{name:"xTimesY",type:u.BOOLEAN},{name:"xSquared",type:u.BOOLEAN},{name:"ySquared",type:u.BOOLEAN},{name:"cosX",type:u.BOOLEAN},{name:"sinX",type:u.BOOLEAN},{name:"cosY",type:u.BOOLEAN},{name:"sinY",type:u.BOOLEAN},{name:"collectStats",type:u.BOOLEAN},{name:"tutorial",type:u.STRING},{name:"problem",type:u.OBJECT,keyMap:a.problems},{name:"initZero",type:u.BOOLEAN},{name:"hideText",type:u.BOOLEAN},{name:"lang",type:u.STRING}],t}();a.State=d},{"./dataset":2,"./nn":5}]},{},[6]);