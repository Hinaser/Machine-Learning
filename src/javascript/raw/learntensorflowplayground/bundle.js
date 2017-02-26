(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var current_lang = "en";
function currentLang() {
    return current_lang;
}
exports.currentLang = currentLang;
function init(lang) {
    if (!lang || (lang != "en" && lang != "ja"))
        lang = "en";
    current_lang = lang;
    $(function () {
        var playground = $("#playground-content");
        var langButton = $("#lang-selection button");
        switchLanguage(lang);
        langButton.on("click", function (e) {
            var selected_lang = $(this).data("lang");
            if (selected_lang == current_lang)
                return;
            current_lang = selected_lang;
            switchLanguage(selected_lang);
        });
    });
}
exports.init = init;
function switchLanguage(lang) {
    if (lang != "ja" && lang != "en")
        return;
    if (lang == "en") {
        $("[data-i18n='toggleplaygroundvisibility']").text("Click this button to toggle playground visible/hidden.");
        $("[data-i18n='togglecolortheme']").text("You can switch theme color of this website");
        $("[data-i18n='headertitle']").html("Tinker With a <b>Neural Network</b> <span class=\"optional\">Right Here </span>in Your Browser.<br>Don’t Worry, You Can’t Break It. We Promise.");
        $("[data-i18n='iterations']").text("Iterations");
        $("[data-i18n='learnmingrate']").text("Learning rate");
        $("[data-i18n='activation']").text("Activation");
        $("[data-i18n='sigmoid']").text("Sigmoid");
        $("[data-i18n='linear']").text("Linear");
        $("[data-i18n='regularization']").text("Regularization");
        $("[data-i18n='regularizationrate']").text("Regularization rate");
        $("[data-i18n='problemtype']").text("Problem type");
        $("[data-i18n='classification']").text("Classification");
        $("[data-i18n='regression']").text("Regression");
        $("[data-i18n='data']").text("Data");
        $("[data-i18n='whichdataset']").text("Which dataset do you want to use?");
        $("[data-i18n='circle']").attr("title", "Circle");
        $("[data-i18n='exclusiveor']").attr("title", "Exclusive or");
        $("[data-i18n='gaussian']").attr("title", "Gaussian");
        $("[data-i18n='spiral']").attr("title", "Spiral");
        $("[data-i18n='plane']").attr("title", "Plane");
        $("[data-i18n='multigaussian']").attr("title", "Multi gaussian");
        $("[data-i18n='rationoftrainingdata']").text("Ratio of training to test data:");
        $("[data-i18n='noise']").text("Noise:");
        $("[data-i18n='batchsize']").text("Batch size:");
        $("[data-i18n='regen']").text("Regenerate");
        $("[data-i18n='regen']").attr("title", "Regenerate data");
        $("[data-i18n='features']").text("Features");
        $("[data-i18n='whichproperty']").text("Which properties do you want to feed in?");
        $("[data-i18n='clickanywheretoedit']").text("Click anywhere to edit.");
        $("[data-i18n='thumbnaillabel']").html("This is the output from one <b>neuron</b>. Hover to see it larger.");
        $("[data-i18n='weightslabel']").html("The outputs are mixed with varying <b>weights</b>, shown by the thickness of the lines.");
        if ($("#num-layers").text() == "1")
            $("[data-i18n='layerslabel']").text("Hidden layer");
        if ($("#num-layers").text() != "1")
            $("[data-i18n='layerslabel']").text("Hidden layers");
        $("[data-i18n='output']").text("Output");
        $("[data-i18n='testloss']").text("Test loss");
        $("[data-i18n='trainingloss']").text("Training loss");
        $("[data-i18n='colorsshowsdata']").text(" Colors shows data, neuron and weight values.");
        $("[data-i18n='showtestdata']").text("Show test data");
        $("[data-i18n='discretizeoutput']").text("Discretize output");
    }
    else if (lang == "ja") {
        $("[data-i18n='toggleplaygroundvisibility']").text("デモの非表示/表示を切り替えられます。");
        $("[data-i18n='togglecolortheme']").text("サイトのテーマカラーを切り替えられます。");
        $("[data-i18n='headertitle']").html("<span class=\"optional\">ブラウザ上で</span><b>ニューラルネットワーク</b>のメカニズムを検証してみよう。<br>何も壊れないから心配はいらない。");
        $("[data-i18n='iterations']").text("エポック");
        $("[data-i18n='learnmingrate']").text("学習率");
        $("[data-i18n='activation']").text("活性化関数");
        $("[data-i18n='sigmoid']").text("シグモイド関数");
        $("[data-i18n='linear']").text("線形関数");
        $("[data-i18n='regularization']").text("正則化");
        $("[data-i18n='regularizationrate']").text("正則化項");
        $("[data-i18n='problemtype']").text("統計モデルの種類");
        $("[data-i18n='classification']").text("分類");
        $("[data-i18n='regression']").text("回帰");
        $("[data-i18n='data']").text("データ");
        $("[data-i18n='whichdataset']").text("どのデータセットを使いますか?");
        $("[data-i18n='circle']").attr("title", "円");
        $("[data-i18n='exclusiveor']").attr("title", "排他OR");
        $("[data-i18n='gaussian']").attr("title", "ガウシアン");
        $("[data-i18n='spiral']").attr("title", "螺旋");
        $("[data-i18n='plane']").attr("title", "平面");
        $("[data-i18n='multigaussian']").attr("title", "マルチガウシアン");
        $("[data-i18n='rationoftrainingdata']").text("トレーニングデータの割合:");
        $("[data-i18n='noise']").text("ノイズ:");
        $("[data-i18n='batchsize']").text("バッチサイズ:");
        $("[data-i18n='regen']").text("再生成");
        $("[data-i18n='regen']").attr("title", "データを再生成する");
        $("[data-i18n='features']").text("特徴");
        $("[data-i18n='whichproperty']").text("入力するデータの特徴を選択してください");
        $("[data-i18n='clickanywheretoedit']").text("クリックして値を編集");
        $("[data-i18n='thumbnaillabel']").html("この<b>ニューロン</b>の出力です。マウスオーバーすると拡大して見れます。");
        $("[data-i18n='weightslabel']").html("ニューロンの出力は<b>重み</b>の影響を受けます。重みは線の太さと色で表されます。");
        var numLayers = +$("#num-layers").text();
        if (numLayers == 0 || numLayers >= 10) {
            $("[data-i18n='layerslabel']").text("個の隠し層");
        }
        else {
            $("[data-i18n='layerslabel']").text("つの隠し層");
        }
        $("[data-i18n='output']").text("出力");
        $("[data-i18n='testloss']").text("誤差(テスト)");
        $("[data-i18n='trainingloss']").text("誤差(トレーニング)");
        $("[data-i18n='colorsshowsdata']").text("データやニューロン、重みの値は色で表現されます。");
        $("[data-i18n='showtestdata']").text("テストデータを表示する");
        $("[data-i18n='discretizeoutput']").text("出力を離散化する");
    }
}

},{}],2:[function(require,module,exports){
"use strict";
function shuffle(array) {
    var counter = array.length;
    var temp = 0;
    var index = 0;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
}
exports.shuffle = shuffle;
function classifyTwoGaussData(numSamples, noise) {
    var points = [];
    var varianceScale = d3.scale.linear().domain([0, .5]).range([0.5, 4]);
    var variance = varianceScale(noise);
    function genGauss(cx, cy, label) {
        for (var i = 0; i < numSamples / 2; i++) {
            var x = normalRandom(cx, variance);
            var y = normalRandom(cy, variance);
            points.push({ x: x, y: y, label: label });
        }
    }
    genGauss(2, 2, 1);
    genGauss(-2, -2, -1);
    return points;
}
exports.classifyTwoGaussData = classifyTwoGaussData;
function regressPlane(numSamples, noise) {
    var radius = 6;
    var labelScale = d3.scale.linear()
        .domain([-10, 10])
        .range([-1, 1]);
    var getLabel = function (x, y) { return labelScale(x + y); };
    var points = [];
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-radius, radius);
        var y = randUniform(-radius, radius);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getLabel(x + noiseX, y + noiseY);
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.regressPlane = regressPlane;
function regressGaussian(numSamples, noise) {
    var points = [];
    var labelScale = d3.scale.linear()
        .domain([0, 2])
        .range([1, 0])
        .clamp(true);
    var gaussians = [
        [-4, 2.5, 1],
        [0, 2.5, -1],
        [4, 2.5, 1],
        [-4, -2.5, -1],
        [0, -2.5, 1],
        [4, -2.5, -1]
    ];
    function getLabel(x, y) {
        var label = 0;
        gaussians.forEach(function (_a) {
            var cx = _a[0], cy = _a[1], sign = _a[2];
            var newLabel = sign * labelScale(dist({ x: x, y: y }, { x: cx, y: cy }));
            if (Math.abs(newLabel) > Math.abs(label)) {
                label = newLabel;
            }
        });
        return label;
    }
    var radius = 6;
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-radius, radius);
        var y = randUniform(-radius, radius);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getLabel(x + noiseX, y + noiseY);
        points.push({ x: x, y: y, label: label });
    }
    ;
    return points;
}
exports.regressGaussian = regressGaussian;
function classifySpiralData(numSamples, noise) {
    var points = [];
    var n = numSamples / 2;
    function genSpiral(deltaT, label) {
        for (var i = 0; i < n; i++) {
            var r = i / n * 5;
            var t = 1.75 * i / n * 2 * Math.PI + deltaT;
            var x = r * Math.sin(t) + randUniform(-1, 1) * noise;
            var y = r * Math.cos(t) + randUniform(-1, 1) * noise;
            points.push({ x: x, y: y, label: label });
        }
    }
    genSpiral(0, 1);
    genSpiral(Math.PI, -1);
    return points;
}
exports.classifySpiralData = classifySpiralData;
function classifyCircleData(numSamples, noise) {
    var points = [];
    var radius = 5;
    function getCircleLabel(p, center) {
        return (dist(p, center) < (radius * 0.5)) ? 1 : -1;
    }
    for (var i = 0; i < numSamples / 2; i++) {
        var r = randUniform(0, radius * 0.5);
        var angle = randUniform(0, 2 * Math.PI);
        var x = r * Math.sin(angle);
        var y = r * Math.cos(angle);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getCircleLabel({ x: x + noiseX, y: y + noiseY }, { x: 0, y: 0 });
        points.push({ x: x, y: y, label: label });
    }
    for (var i = 0; i < numSamples / 2; i++) {
        var r = randUniform(radius * 0.7, radius);
        var angle = randUniform(0, 2 * Math.PI);
        var x = r * Math.sin(angle);
        var y = r * Math.cos(angle);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getCircleLabel({ x: x + noiseX, y: y + noiseY }, { x: 0, y: 0 });
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.classifyCircleData = classifyCircleData;
function classifyXORData(numSamples, noise) {
    function getXORLabel(p) { return p.x * p.y >= 0 ? 1 : -1; }
    var points = [];
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-5, 5);
        var padding = 0.3;
        x += x > 0 ? padding : -padding;
        var y = randUniform(-5, 5);
        y += y > 0 ? padding : -padding;
        var noiseX = randUniform(-5, 5) * noise;
        var noiseY = randUniform(-5, 5) * noise;
        var label = getXORLabel({ x: x + noiseX, y: y + noiseY });
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.classifyXORData = classifyXORData;
function randUniform(a, b) {
    return Math.random() * (b - a) + a;
}
function normalRandom(mean, variance) {
    if (mean === void 0) { mean = 0; }
    if (variance === void 0) { variance = 1; }
    var v1, v2, s;
    do {
        v1 = 2 * Math.random() - 1;
        v2 = 2 * Math.random() - 1;
        s = v1 * v1 + v2 * v2;
    } while (s > 1);
    var result = Math.sqrt(-2 * Math.log(s) / s) * v1;
    return mean + Math.sqrt(variance) * result;
}
function dist(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

},{}],3:[function(require,module,exports){
"use strict";
var NUM_SHADES = 30;
var HeatMap = (function () {
    function HeatMap(width, numSamples, xDomain, yDomain, container, userSettings) {
        this.settings = {
            showAxes: false,
            noSvg: false
        };
        this.numSamples = numSamples;
        var height = width;
        var padding = userSettings.showAxes ? 20 : 0;
        if (userSettings != null) {
            for (var prop in userSettings) {
                this.settings[prop] = userSettings[prop];
            }
        }
        this.xScale = d3.scale.linear()
            .domain(xDomain)
            .range([0, width - 2 * padding]);
        this.yScale = d3.scale.linear()
            .domain(yDomain)
            .range([height - 2 * padding, 0]);
        var tmpScale = d3.scale.linear()
            .domain([0, .5, 1])
            .range(["#f59322", "#e8eaeb", "#0877bd"])
            .clamp(true);
        var colors = d3.range(0, 1 + 1E-9, 1 / NUM_SHADES).map(function (a) {
            return tmpScale(a);
        });
        this.color = d3.scale.quantize()
            .domain([-1, 1])
            .range(colors);
        container = container.append("div")
            .style({
            width: width + "px",
            height: height + "px",
            position: "relative",
            top: "-" + padding + "px",
            left: "-" + padding + "px"
        });
        this.canvas = container.append("canvas")
            .attr("width", numSamples)
            .attr("height", numSamples)
            .style("width", (width - 2 * padding) + "px")
            .style("height", (height - 2 * padding) + "px")
            .style("position", "absolute")
            .style("top", padding + "px")
            .style("left", padding + "px");
        if (!this.settings.noSvg) {
            this.svg = container.append("svg").attr({
                "width": width,
                "height": height
            }).style({
                "position": "absolute",
                "left": "0",
                "top": "0"
            }).append("g")
                .attr("transform", "translate(" + padding + "," + padding + ")");
            this.svg.append("g").attr("class", "train");
            this.svg.append("g").attr("class", "test");
        }
        if (this.settings.showAxes) {
            var xAxis = d3.svg.axis()
                .scale(this.xScale)
                .orient("bottom");
            var yAxis = d3.svg.axis()
                .scale(this.yScale)
                .orient("right");
            this.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height - 2 * padding) + ")")
                .call(xAxis);
            this.svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (width - 2 * padding) + ",0)")
                .call(yAxis);
        }
    }
    HeatMap.prototype.updateTestPoints = function (points) {
        if (this.settings.noSvg) {
            throw Error("Can't add points since noSvg=true");
        }
        this.updateCircles(this.svg.select("g.test"), points);
    };
    HeatMap.prototype.updatePoints = function (points) {
        if (this.settings.noSvg) {
            throw Error("Can't add points since noSvg=true");
        }
        this.updateCircles(this.svg.select("g.train"), points);
    };
    HeatMap.prototype.updateBackground = function (data, discretize) {
        var dx = data[0].length;
        var dy = data.length;
        if (dx !== this.numSamples || dy !== this.numSamples) {
            throw new Error("The provided data matrix must be of size " +
                "numSamples X numSamples");
        }
        var context = this.canvas.node().getContext("2d");
        var image = context.createImageData(dx, dy);
        for (var y = 0, p = -1; y < dy; ++y) {
            for (var x = 0; x < dx; ++x) {
                var value = data[x][y];
                if (discretize) {
                    value = (value >= 0 ? 1 : -1);
                }
                var c = d3.rgb(this.color(value));
                image.data[++p] = c.r;
                image.data[++p] = c.g;
                image.data[++p] = c.b;
                image.data[++p] = 160;
            }
        }
        context.putImageData(image, 0, 0);
    };
    HeatMap.prototype.updateCircles = function (container, points) {
        var _this = this;
        var xDomain = this.xScale.domain();
        var yDomain = this.yScale.domain();
        points = points.filter(function (p) {
            return p.x >= xDomain[0] && p.x <= xDomain[1]
                && p.y >= yDomain[0] && p.y <= yDomain[1];
        });
        var selection = container.selectAll("circle").data(points);
        selection.enter().append("circle").attr("r", 3);
        selection
            .attr({
            cx: function (d) { return _this.xScale(d.x); },
            cy: function (d) { return _this.yScale(d.y); }
        })
            .style("fill", function (d) { return _this.color(d.label); });
        selection.exit().remove();
    };
    return HeatMap;
}());
exports.HeatMap = HeatMap;
function reduceMatrix(matrix, factor) {
    if (matrix.length !== matrix[0].length) {
        throw new Error("The provided matrix must be a square matrix");
    }
    if (matrix.length % factor !== 0) {
        throw new Error("The width/height of the matrix must be divisible by " +
            "the reduction factor");
    }
    var result = new Array(matrix.length / factor);
    for (var i = 0; i < matrix.length; i += factor) {
        result[i / factor] = new Array(matrix.length / factor);
        for (var j = 0; j < matrix.length; j += factor) {
            var avg = 0;
            for (var k = 0; k < factor; k++) {
                for (var l = 0; l < factor; l++) {
                    avg += matrix[i + k][j + l];
                }
            }
            avg /= (factor * factor);
            result[i / factor][j / factor] = avg;
        }
    }
    return result;
}
exports.reduceMatrix = reduceMatrix;

},{}],4:[function(require,module,exports){
"use strict";
var AppendingLineChart = (function () {
    function AppendingLineChart(container, lineColors) {
        this.data = [];
        this.minY = Number.MAX_VALUE;
        this.maxY = Number.MIN_VALUE;
        this.lineColors = lineColors;
        this.numLines = lineColors.length;
        var node = container.node();
        var totalWidth = node.offsetWidth;
        var totalHeight = node.offsetHeight;
        var margin = { top: 2, right: 0, bottom: 2, left: 2 };
        var width = totalWidth - margin.left - margin.right;
        var height = totalHeight - margin.top - margin.bottom;
        this.xScale = d3.scale.linear()
            .domain([0, 0])
            .range([0, width]);
        this.yScale = d3.scale.linear()
            .domain([0, 0])
            .range([height, 0]);
        this.svg = container.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        this.paths = new Array(this.numLines);
        for (var i = 0; i < this.numLines; i++) {
            this.paths[i] = this.svg.append("path")
                .attr("class", "line")
                .style({
                "fill": "none",
                "stroke": lineColors[i],
                "stroke-width": "1.5px"
            });
        }
    }
    AppendingLineChart.prototype.reset = function () {
        this.data = [];
        this.redraw();
        this.minY = Number.MAX_VALUE;
        this.maxY = Number.MIN_VALUE;
    };
    AppendingLineChart.prototype.addDataPoint = function (dataPoint) {
        var _this = this;
        if (dataPoint.length !== this.numLines) {
            throw Error("Length of dataPoint must equal number of lines");
        }
        dataPoint.forEach(function (y) {
            _this.minY = Math.min(_this.minY, y);
            _this.maxY = Math.max(_this.maxY, y);
        });
        this.data.push({ x: this.data.length + 1, y: dataPoint });
        this.redraw();
    };
    AppendingLineChart.prototype.redraw = function () {
        var _this = this;
        this.xScale.domain([1, this.data.length]);
        this.yScale.domain([this.minY, this.maxY]);
        var getPathMap = function (lineIndex) {
            return d3.svg.line()
                .x(function (d) { return _this.xScale(d.x); })
                .y(function (d) { return _this.yScale(d.y[lineIndex]); });
        };
        for (var i = 0; i < this.numLines; i++) {
            this.paths[i].datum(this.data).attr("d", getPathMap(i));
        }
    };
    return AppendingLineChart;
}());
exports.AppendingLineChart = AppendingLineChart;

},{}],5:[function(require,module,exports){
"use strict";
var Node = (function () {
    function Node(id, activation, initZero) {
        this.inputLinks = [];
        this.bias = 0.1;
        this.outputs = [];
        this.outputDer = 0;
        this.inputDer = 0;
        this.accInputDer = 0;
        this.numAccumulatedDers = 0;
        this.id = id;
        this.activation = activation;
        if (initZero) {
            this.bias = 0;
        }
    }
    Node.prototype.updateOutput = function () {
        this.totalInput = this.bias;
        for (var j = 0; j < this.inputLinks.length; j++) {
            var link = this.inputLinks[j];
            this.totalInput += link.weight * link.source.output;
        }
        this.output = this.activation.output(this.totalInput);
        return this.output;
    };
    return Node;
}());
exports.Node = Node;
var Errors = (function () {
    function Errors() {
    }
    Errors.SQUARE = {
        error: function (output, target) {
            return 0.5 * Math.pow(output - target, 2);
        },
        der: function (output, target) { return output - target; }
    };
    return Errors;
}());
exports.Errors = Errors;
Math.tanh = Math.tanh || function (x) {
    if (x === Infinity) {
        return 1;
    }
    else if (x === -Infinity) {
        return -1;
    }
    else {
        var e2x = Math.exp(2 * x);
        return (e2x - 1) / (e2x + 1);
    }
};
var Activations = (function () {
    function Activations() {
    }
    Activations.TANH = {
        output: function (x) { return Math.tanh(x); },
        der: function (x) {
            var output = Activations.TANH.output(x);
            return 1 - output * output;
        }
    };
    Activations.RELU = {
        output: function (x) { return Math.max(0, x); },
        der: function (x) { return x <= 0 ? 0 : 1; }
    };
    Activations.SIGMOID = {
        output: function (x) { return 1 / (1 + Math.exp(-x)); },
        der: function (x) {
            var output = Activations.SIGMOID.output(x);
            return output * (1 - output);
        }
    };
    Activations.LINEAR = {
        output: function (x) { return x; },
        der: function (x) { return 1; }
    };
    return Activations;
}());
exports.Activations = Activations;
var RegularizationFunction = (function () {
    function RegularizationFunction() {
    }
    RegularizationFunction.L1 = {
        output: function (w) { return Math.abs(w); },
        der: function (w) { return w < 0 ? -1 : 1; }
    };
    RegularizationFunction.L2 = {
        output: function (w) { return 0.5 * w * w; },
        der: function (w) { return w; }
    };
    return RegularizationFunction;
}());
exports.RegularizationFunction = RegularizationFunction;
var Link = (function () {
    function Link(source, dest, regularization, initZero) {
        this.weight = Math.random() - 0.5;
        this.errorDer = 0;
        this.accErrorDer = 0;
        this.numAccumulatedDers = 0;
        this.id = source.id + "-" + dest.id;
        this.source = source;
        this.dest = dest;
        this.regularization = regularization;
        if (initZero) {
            this.weight = 0;
        }
    }
    return Link;
}());
exports.Link = Link;
function buildNetwork(networkShape, activation, outputActivation, regularization, inputIds, initZero) {
    var numLayers = networkShape.length;
    var id = 1;
    var network = [];
    for (var layerIdx = 0; layerIdx < numLayers; layerIdx++) {
        var isOutputLayer = layerIdx === numLayers - 1;
        var isInputLayer = layerIdx === 0;
        var currentLayer = [];
        network.push(currentLayer);
        var numNodes = networkShape[layerIdx];
        for (var i = 0; i < numNodes; i++) {
            var nodeId = id.toString();
            if (isInputLayer) {
                nodeId = inputIds[i];
            }
            else {
                id++;
            }
            var node = new Node(nodeId, isOutputLayer ? outputActivation : activation, initZero);
            currentLayer.push(node);
            if (layerIdx >= 1) {
                for (var j = 0; j < network[layerIdx - 1].length; j++) {
                    var prevNode = network[layerIdx - 1][j];
                    var link = new Link(prevNode, node, regularization, initZero);
                    prevNode.outputs.push(link);
                    node.inputLinks.push(link);
                }
            }
        }
    }
    return network;
}
exports.buildNetwork = buildNetwork;
function forwardProp(network, inputs) {
    var inputLayer = network[0];
    if (inputs.length !== inputLayer.length) {
        throw new Error("The number of inputs must match the number of nodes in" +
            " the input layer");
    }
    for (var i = 0; i < inputLayer.length; i++) {
        var node = inputLayer[i];
        node.output = inputs[i];
    }
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.updateOutput();
        }
    }
    return network[network.length - 1][0].output;
}
exports.forwardProp = forwardProp;
function backProp(network, target, errorFunc) {
    var outputNode = network[network.length - 1][0];
    outputNode.outputDer = errorFunc.der(outputNode.output, target);
    for (var layerIdx = network.length - 1; layerIdx >= 1; layerIdx--) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.inputDer = node.outputDer * node.activation.der(node.totalInput);
            node.accInputDer += node.inputDer;
            node.numAccumulatedDers++;
        }
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                link.errorDer = node.inputDer * link.source.output;
                link.accErrorDer += link.errorDer;
                link.numAccumulatedDers++;
            }
        }
        if (layerIdx === 1) {
            continue;
        }
        var prevLayer = network[layerIdx - 1];
        for (var i = 0; i < prevLayer.length; i++) {
            var node = prevLayer[i];
            node.outputDer = 0;
            for (var j = 0; j < node.outputs.length; j++) {
                var output = node.outputs[j];
                node.outputDer += output.weight * output.dest.inputDer;
            }
        }
    }
}
exports.backProp = backProp;
function updateWeights(network, learningRate, regularizationRate) {
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            if (node.numAccumulatedDers > 0) {
                node.bias -= learningRate * node.accInputDer / node.numAccumulatedDers;
                node.accInputDer = 0;
                node.numAccumulatedDers = 0;
            }
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                var regulDer = link.regularization ?
                    link.regularization.der(link.weight) : 0;
                if (link.numAccumulatedDers > 0) {
                    link.weight -= (learningRate / link.numAccumulatedDers) *
                        (link.accErrorDer + regularizationRate * regulDer);
                    link.accErrorDer = 0;
                    link.numAccumulatedDers = 0;
                }
            }
        }
    }
}
exports.updateWeights = updateWeights;
function forEachNode(network, ignoreInputs, accessor) {
    for (var layerIdx = ignoreInputs ? 1 : 0; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            accessor(node);
        }
    }
}
exports.forEachNode = forEachNode;
function getOutputNode(network) {
    return network[network.length - 1][0];
}
exports.getOutputNode = getOutputNode;

},{}],6:[function(require,module,exports){
"use strict";
var nn = require("./nn");
var heatmap_1 = require("./heatmap");
var state_1 = require("./state");
var dataset_1 = require("./dataset");
var linechart_1 = require("./linechart");
var contents = require("./additionalcontent");
var mainWidth;
d3.select(".more button").on("click", function () {
    var position = 800;
    d3.transition()
        .duration(1000)
        .tween("scroll", scrollTween(position));
});
function scrollTween(offset) {
    return function () {
        var i = d3.interpolateNumber(window.pageYOffset ||
            document.documentElement.scrollTop, offset);
        return function (t) { scrollTo(0, i(t)); };
    };
}
var RECT_SIZE = 30;
var BIAS_SIZE = 5;
var NUM_SAMPLES_CLASSIFY = 500;
var NUM_SAMPLES_REGRESS = 1200;
var DENSITY = 100;
var HoverType;
(function (HoverType) {
    HoverType[HoverType["BIAS"] = 0] = "BIAS";
    HoverType[HoverType["WEIGHT"] = 1] = "WEIGHT";
})(HoverType || (HoverType = {}));
var INPUTS = {
    "x": { f: function (x, y) { return x; }, label: "X_1" },
    "y": { f: function (x, y) { return y; }, label: "X_2" },
    "xSquared": { f: function (x, y) { return x * x; }, label: "X_1^2" },
    "ySquared": { f: function (x, y) { return y * y; }, label: "X_2^2" },
    "xTimesY": { f: function (x, y) { return x * y; }, label: "X_1X_2" },
    "sinX": { f: function (x, y) { return Math.sin(x); }, label: "sin(X_1)" },
    "sinY": { f: function (x, y) { return Math.sin(y); }, label: "sin(X_2)" }
};
var HIDABLE_CONTROLS = [
    ["Show test data", "showTestData"],
    ["Discretize output", "discretize"],
    ["Play button", "playButton"],
    ["Step button", "stepButton"],
    ["Reset button", "resetButton"],
    ["Learning rate", "learningRate"],
    ["Activation", "activation"],
    ["Regularization", "regularization"],
    ["Regularization rate", "regularizationRate"],
    ["Problem type", "problem"],
    ["Which dataset", "dataset"],
    ["Ratio train data", "percTrainData"],
    ["Noise level", "noise"],
    ["Batch size", "batchSize"],
    ["# of hidden layers", "numHiddenLayers"],
];
var Player = (function () {
    function Player() {
        this.timerIndex = 0;
        this.isPlaying = false;
        this.callback = null;
    }
    Player.prototype.playOrPause = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            this.pause();
        }
        else {
            this.isPlaying = true;
            if (iter == 0) {
                simulationStarted();
            }
            this.play();
        }
    };
    Player.prototype.onPlayPause = function (callback) {
        this.callback = callback;
    };
    Player.prototype.play = function () {
        this.pause();
        this.isPlaying = true;
        if (this.callback) {
            this.callback(this.isPlaying);
        }
        this.start(this.timerIndex);
    };
    Player.prototype.pause = function () {
        this.timerIndex++;
        this.isPlaying = false;
        if (this.callback) {
            this.callback(this.isPlaying);
        }
    };
    Player.prototype.start = function (localTimerIndex) {
        var _this = this;
        d3.timer(function () {
            if (localTimerIndex < _this.timerIndex) {
                return true;
            }
            oneStep();
            return false;
        }, 0);
    };
    return Player;
}());
var state = state_1.State.deserializeState();
state.getHiddenProps().forEach(function (prop) {
    if (prop in INPUTS) {
        delete INPUTS[prop];
    }
});
var boundary = {};
var selectedNodeId = null;
var xDomain = [-6, 6];
var heatMap = new heatmap_1.HeatMap(300, DENSITY, xDomain, xDomain, d3.select("#heatmap"), { showAxes: true });
var linkWidthScale = d3.scale.linear()
    .domain([0, 5])
    .range([1, 10])
    .clamp(true);
var colorScale = d3.scale.linear()
    .domain([-1, 0, 1])
    .range(["#f59322", "#e8eaeb", "#0877bd"])
    .clamp(true);
var iter = 0;
var trainData = [];
var testData = [];
var network = null;
var lossTrain = 0;
var lossTest = 0;
var player = new Player();
var lineChart = new linechart_1.AppendingLineChart(d3.select("#linechart"), ["#777", "black"]);
function makeGUI() {
    d3.select("#reset-button").on("click", function () {
        reset();
        userHasInteracted();
        d3.select("#play-pause-button");
    });
    d3.select("#play-pause-button").on("click", function () {
        userHasInteracted();
        player.playOrPause();
    });
    player.onPlayPause(function (isPlaying) {
        d3.select("#play-pause-button").classed("playing", isPlaying);
    });
    d3.select("#next-step-button").on("click", function () {
        player.pause();
        userHasInteracted();
        if (iter == 0) {
            simulationStarted();
        }
        oneStep();
    });
    d3.select("#data-regen-button").on("click", function () {
        generateData();
        parametersChanged = true;
    });
    var dataThumbnails = d3.selectAll("canvas[data-dataset]");
    dataThumbnails.on("click", function () {
        var newDataset = state_1.datasets[this.dataset.dataset];
        if (newDataset === state.dataset) {
            return;
        }
        state.dataset = newDataset;
        dataThumbnails.classed("selected", false);
        d3.select(this).classed("selected", true);
        generateData();
        parametersChanged = true;
        reset();
    });
    var datasetKey = state_1.getKeyFromValue(state_1.datasets, state.dataset);
    d3.select("canvas[data-dataset=" + datasetKey + "]")
        .classed("selected", true);
    var regDataThumbnails = d3.selectAll("canvas[data-regDataset]");
    regDataThumbnails.on("click", function () {
        var newDataset = state_1.regDatasets[this.dataset.regdataset];
        if (newDataset === state.regDataset) {
            return;
        }
        state.regDataset = newDataset;
        regDataThumbnails.classed("selected", false);
        d3.select(this).classed("selected", true);
        generateData();
        parametersChanged = true;
        reset();
    });
    var regDatasetKey = state_1.getKeyFromValue(state_1.regDatasets, state.regDataset);
    d3.select("canvas[data-regDataset=" + regDatasetKey + "]")
        .classed("selected", true);
    d3.select("#add-layers").on("click", function () {
        if (state.numHiddenLayers >= 6) {
            return;
        }
        state.networkShape[state.numHiddenLayers] = 2;
        state.numHiddenLayers++;
        parametersChanged = true;
        reset();
    });
    d3.select("#remove-layers").on("click", function () {
        if (state.numHiddenLayers <= 0) {
            return;
        }
        state.numHiddenLayers--;
        state.networkShape.splice(state.numHiddenLayers);
        parametersChanged = true;
        reset();
    });
    var showTestData = d3.select("#show-test-data").on("change", function () {
        state.showTestData = this.checked;
        state.serialize();
        userHasInteracted();
        heatMap.updateTestPoints(state.showTestData ? testData : []);
    });
    showTestData.property("checked", state.showTestData);
    var discretize = d3.select("#discretize").on("change", function () {
        state.discretize = this.checked;
        state.serialize();
        userHasInteracted();
        updateUI();
    });
    discretize.property("checked", state.discretize);
    var percTrain = d3.select("#percTrainData").on("input", function () {
        state.percTrainData = this.value;
        d3.select("label[for='percTrainData'] .value").text(this.value);
        generateData();
        parametersChanged = true;
        reset();
    });
    percTrain.property("value", state.percTrainData);
    d3.select("label[for='percTrainData'] .value").text(state.percTrainData);
    var noise = d3.select("#noise").on("input", function () {
        state.noise = this.value;
        d3.select("label[for='noise'] .value").text(this.value);
        generateData();
        parametersChanged = true;
        reset();
    });
    noise.property("value", state.noise);
    d3.select("label[for='noise'] .value").text(state.noise);
    var batchSize = d3.select("#batchSize").on("input", function () {
        state.batchSize = this.value;
        d3.select("label[for='batchSize'] .value").text(this.value);
        parametersChanged = true;
        reset();
    });
    batchSize.property("value", state.batchSize);
    d3.select("label[for='batchSize'] .value").text(state.batchSize);
    var activationDropdown = d3.select("#activations").on("change", function () {
        state.activation = state_1.activations[this.value];
        parametersChanged = true;
        reset();
    });
    activationDropdown.property("value", state_1.getKeyFromValue(state_1.activations, state.activation));
    var learningRate = d3.select("#learningRate").on("change", function () {
        state.learningRate = +this.value;
        state.serialize();
        userHasInteracted();
        parametersChanged = true;
    });
    learningRate.property("value", state.learningRate);
    var regularDropdown = d3.select("#regularizations").on("change", function () {
        state.regularization = state_1.regularizations[this.value];
        parametersChanged = true;
        reset();
    });
    regularDropdown.property("value", state_1.getKeyFromValue(state_1.regularizations, state.regularization));
    var regularRate = d3.select("#regularRate").on("change", function () {
        state.regularizationRate = +this.value;
        parametersChanged = true;
        reset();
    });
    regularRate.property("value", state.regularizationRate);
    var problem = d3.select("#problem").on("change", function () {
        state.problem = state_1.problems[this.value];
        generateData();
        drawDatasetThumbnails();
        parametersChanged = true;
        reset();
    });
    problem.property("value", state_1.getKeyFromValue(state_1.problems, state.problem));
    var togglePlayground = d3.select("#playground-toggler").on("click", function () {
        player.pause();
    });
    var x = d3.scale.linear().domain([-1, 1]).range([0, 144]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickValues([-1, 0, 1])
        .tickFormat(d3.format("d"));
    d3.select("#colormap g.core").append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,10)")
        .call(xAxis);
    window.addEventListener("resize", function () {
        var newWidth = document.querySelector("#main-part")
            .getBoundingClientRect().width;
        if (newWidth !== mainWidth) {
            mainWidth = newWidth;
            drawNetwork(network);
            updateUI(true);
        }
    });
    if (state.hideText) {
        d3.select("#article-text").style("display", "none");
        d3.select("div.more").style("display", "none");
        d3.select("header").style("display", "none");
    }
}
function updateBiasesUI(network) {
    nn.forEachNode(network, true, function (node) {
        d3.select("rect#bias-" + node.id).style("fill", colorScale(node.bias));
    });
}
function updateWeightsUI(network, container) {
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                container.select("#link" + link.source.id + "-" + link.dest.id)
                    .style({
                    "stroke-dashoffset": -iter / 3,
                    "stroke-width": linkWidthScale(Math.abs(link.weight)),
                    "stroke": colorScale(link.weight)
                })
                    .datum(link);
            }
        }
    }
}
function drawNode(cx, cy, nodeId, isInput, container, node) {
    var x = cx - RECT_SIZE / 2;
    var y = cy - RECT_SIZE / 2;
    var nodeGroup = container.append("g")
        .attr({
        "class": "node",
        "id": "node" + nodeId,
        "transform": "translate(" + x + "," + y + ")"
    });
    nodeGroup.append("rect")
        .attr({
        x: 0,
        y: 0,
        width: RECT_SIZE,
        height: RECT_SIZE
    });
    var activeOrNotClass = state[nodeId] ? "active" : "inactive";
    if (isInput) {
        var label = INPUTS[nodeId].label != null ?
            INPUTS[nodeId].label : nodeId;
        var text = nodeGroup.append("text").attr({
            class: "main-label",
            x: -10,
            y: RECT_SIZE / 2, "text-anchor": "end"
        });
        if (/[_^]/.test(label)) {
            var myRe = /(.*?)([_^])(.)/g;
            var myArray = void 0;
            var lastIndex = void 0;
            while ((myArray = myRe.exec(label)) !== null) {
                lastIndex = myRe.lastIndex;
                var prefix = myArray[1];
                var sep = myArray[2];
                var suffix = myArray[3];
                if (prefix) {
                    text.append("tspan").text(prefix);
                }
                text.append("tspan")
                    .attr("baseline-shift", sep == "_" ? "sub" : "super")
                    .style("font-size", "9px")
                    .text(suffix);
            }
            if (label.substring(lastIndex)) {
                text.append("tspan").text(label.substring(lastIndex));
            }
        }
        else {
            text.append("tspan").text(label);
        }
        nodeGroup.classed(activeOrNotClass, true);
    }
    if (!isInput) {
        nodeGroup.append("rect")
            .attr({
            id: "bias-" + nodeId,
            x: -BIAS_SIZE - 2,
            y: RECT_SIZE - BIAS_SIZE + 3,
            width: BIAS_SIZE,
            height: BIAS_SIZE
        }).on("mouseenter", function () {
            updateHoverCard(HoverType.BIAS, node, d3.mouse(container.node()));
        }).on("mouseleave", function () {
            updateHoverCard(null);
        });
    }
    var div = d3.select("#network").insert("div", ":first-child")
        .attr({
        "id": "canvas-" + nodeId,
        "class": "canvas"
    })
        .style({
        position: "absolute",
        left: (x + 3) + "px",
        top: (y + 3) + "px"
    })
        .on("mouseenter", function () {
        selectedNodeId = nodeId;
        div.classed("hovered", true);
        nodeGroup.classed("hovered", true);
        updateDecisionBoundary(network, false);
        heatMap.updateBackground(boundary[nodeId], state.discretize);
    })
        .on("mouseleave", function () {
        selectedNodeId = null;
        div.classed("hovered", false);
        nodeGroup.classed("hovered", false);
        updateDecisionBoundary(network, false);
        heatMap.updateBackground(boundary[nn.getOutputNode(network).id], state.discretize);
    });
    if (isInput) {
        div.on("click", function () {
            state[nodeId] = !state[nodeId];
            parametersChanged = true;
            reset();
        });
        div.style("cursor", "pointer");
    }
    if (isInput) {
        div.classed(activeOrNotClass, true);
    }
    var nodeHeatMap = new heatmap_1.HeatMap(RECT_SIZE, DENSITY / 10, xDomain, xDomain, div, { noSvg: true });
    div.datum({ heatmap: nodeHeatMap, id: nodeId });
}
function drawNetwork(network) {
    var svg = d3.select("#svg");
    svg.select("g.core").remove();
    d3.select("#network").selectAll("div.canvas").remove();
    d3.select("#network").selectAll("div.plus-minus-neurons").remove();
    var padding = 3;
    var co = d3.select(".column.output").node();
    var cf = d3.select(".column.features").node();
    var width = co.offsetLeft - cf.offsetLeft;
    svg.attr("width", width);
    var node2coord = {};
    var container = svg.append("g")
        .classed("core", true)
        .attr("transform", "translate(" + padding + "," + padding + ")");
    var numLayers = network.length;
    var featureWidth = 118;
    var layerScale = d3.scale.ordinal()
        .domain(d3.range(1, numLayers - 1))
        .rangePoints([featureWidth, width - RECT_SIZE], 0.7);
    var nodeIndexScale = function (nodeIndex) { return nodeIndex * (RECT_SIZE + 25); };
    var calloutThumb = d3.select(".callout.thumbnail").style("display", "none");
    var calloutWeights = d3.select(".callout.weights").style("display", "none");
    var idWithCallout = null;
    var targetIdWithCallout = null;
    var cx = RECT_SIZE / 2 + 50;
    var nodeIds = Object.keys(INPUTS);
    var maxY = nodeIndexScale(nodeIds.length);
    nodeIds.forEach(function (nodeId, i) {
        var cy = nodeIndexScale(i) + RECT_SIZE / 2;
        node2coord[nodeId] = { cx: cx, cy: cy };
        drawNode(cx, cy, nodeId, true, container);
    });
    for (var layerIdx = 1; layerIdx < numLayers - 1; layerIdx++) {
        var numNodes = network[layerIdx].length;
        var cx_1 = layerScale(layerIdx) + RECT_SIZE / 2;
        maxY = Math.max(maxY, nodeIndexScale(numNodes));
        addPlusMinusControl(layerScale(layerIdx), layerIdx);
        for (var i = 0; i < numNodes; i++) {
            var node_1 = network[layerIdx][i];
            var cy_1 = nodeIndexScale(i) + RECT_SIZE / 2;
            node2coord[node_1.id] = { cx: cx_1, cy: cy_1 };
            drawNode(cx_1, cy_1, node_1.id, false, container, node_1);
            var numNodes_1 = network[layerIdx].length;
            var nextNumNodes = network[layerIdx + 1].length;
            if (idWithCallout == null &&
                i === numNodes_1 - 1 &&
                nextNumNodes <= numNodes_1) {
                calloutThumb.style({
                    display: null,
                    top: (20 + 3 + cy_1) + "px",
                    left: cx_1 + "px"
                });
                idWithCallout = node_1.id;
            }
            for (var j = 0; j < node_1.inputLinks.length; j++) {
                var link = node_1.inputLinks[j];
                var path = drawLink(link, node2coord, network, container, j === 0, j, node_1.inputLinks.length).node();
                var prevLayer = network[layerIdx - 1];
                var lastNodePrevLayer = prevLayer[prevLayer.length - 1];
                if (targetIdWithCallout == null &&
                    i === numNodes_1 - 1 &&
                    link.source.id === lastNodePrevLayer.id &&
                    (link.source.id !== idWithCallout || numLayers <= 5) &&
                    link.dest.id !== idWithCallout &&
                    prevLayer.length >= numNodes_1) {
                    var midPoint = path.getPointAtLength(path.getTotalLength() * 0.7);
                    calloutWeights.style({
                        display: null,
                        top: (midPoint.y + 5) + "px",
                        left: (midPoint.x + 3) + "px"
                    });
                    targetIdWithCallout = link.dest.id;
                }
            }
        }
    }
    cx = width + RECT_SIZE / 2;
    var node = network[numLayers - 1][0];
    var cy = nodeIndexScale(0) + RECT_SIZE / 2;
    node2coord[node.id] = { cx: cx, cy: cy };
    for (var i = 0; i < node.inputLinks.length; i++) {
        var link = node.inputLinks[i];
        drawLink(link, node2coord, network, container, i === 0, i, node.inputLinks.length);
    }
    svg.attr("height", maxY);
    var height = Math.max(getRelativeHeight(calloutThumb), getRelativeHeight(calloutWeights), getRelativeHeight(d3.select("#network")));
    d3.select(".column.features").style("height", height + "px");
}
function getRelativeHeight(selection) {
    var node = selection.node();
    return node.offsetHeight + node.offsetTop;
}
function addPlusMinusControl(x, layerIdx) {
    var div = d3.select("#network").append("div")
        .classed("plus-minus-neurons", true)
        .style("left", (x - 10) + "px");
    var i = layerIdx - 1;
    var firstRow = div.append("div").attr("class", "ui-numNodes" + layerIdx);
    firstRow.append("button")
        .attr("class", "mdl-button mdl-js-button mdl-button--icon")
        .on("click", function () {
        var numNeurons = state.networkShape[i];
        if (numNeurons >= 8) {
            return;
        }
        state.networkShape[i]++;
        parametersChanged = true;
        reset();
    })
        .append("i")
        .attr("class", "material-icons")
        .text("add");
    firstRow.append("button")
        .attr("class", "mdl-button mdl-js-button mdl-button--icon")
        .on("click", function () {
        var numNeurons = state.networkShape[i];
        if (numNeurons <= 1) {
            return;
        }
        state.networkShape[i]--;
        parametersChanged = true;
        reset();
    })
        .append("i")
        .attr("class", "material-icons")
        .text("remove");
    var suffix = state.networkShape[i] > 1 ? "s" : "";
    div.append("div").text(state.networkShape[i] + " neuron" + suffix);
}
function updateHoverCard(type, nodeOrLink, coordinates) {
    var hovercard = d3.select("#hovercard");
    if (type == null) {
        hovercard.style("display", "none");
        d3.select("#svg").on("click", null);
        return;
    }
    d3.select("#svg").on("click", function () {
        hovercard.select(".value").style("display", "none");
        var input = hovercard.select("input");
        input.style("display", null);
        input.on("input", function () {
            if (this.value != null && this.value !== "") {
                if (type == HoverType.WEIGHT) {
                    nodeOrLink.weight = +this.value;
                }
                else {
                    nodeOrLink.bias = +this.value;
                }
                updateUI();
            }
        });
        input.on("keypress", function () {
            if (d3.event.keyCode == 13) {
                updateHoverCard(type, nodeOrLink, coordinates);
            }
        });
        input.node().focus();
    });
    var value = type == HoverType.WEIGHT ?
        nodeOrLink.weight :
        nodeOrLink.bias;
    var name = type == HoverType.WEIGHT ? "Weight" : "Bias";
    hovercard.style({
        "left": (coordinates[0] + 20) + "px",
        "top": coordinates[1] + "px",
        "display": "block"
    });
    hovercard.select(".type").text(name);
    hovercard.select(".value")
        .style("display", null)
        .text(value.toPrecision(2));
    hovercard.select("input")
        .property("value", value.toPrecision(2))
        .style("display", "none");
}
function drawLink(input, node2coord, network, container, isFirst, index, length) {
    var line = container.insert("path", ":first-child");
    var source = node2coord[input.source.id];
    var dest = node2coord[input.dest.id];
    var datum = {
        source: {
            y: source.cx + RECT_SIZE / 2 + 2,
            x: source.cy
        },
        target: {
            y: dest.cx - RECT_SIZE / 2,
            x: dest.cy + ((index - (length - 1) / 2) / length) * 12
        }
    };
    var diagonal = d3.svg.diagonal().projection(function (d) { return [d.y, d.x]; });
    line.attr({
        "marker-start": "url(#markerArrow)",
        class: "link",
        id: "link" + input.source.id + "-" + input.dest.id,
        d: diagonal(datum, 0)
    });
    container.append("path")
        .attr("d", diagonal(datum, 0))
        .attr("class", "link-hover")
        .on("mouseenter", function () {
        updateHoverCard(HoverType.WEIGHT, input, d3.mouse(this));
    }).on("mouseleave", function () {
        updateHoverCard(null);
    });
    return line;
}
function updateDecisionBoundary(network, firstTime) {
    if (firstTime) {
        boundary = {};
        nn.forEachNode(network, true, function (node) {
            boundary[node.id] = new Array(DENSITY);
        });
        for (var nodeId in INPUTS) {
            boundary[nodeId] = new Array(DENSITY);
        }
    }
    var xScale = d3.scale.linear().domain([0, DENSITY - 1]).range(xDomain);
    var yScale = d3.scale.linear().domain([DENSITY - 1, 0]).range(xDomain);
    var i = 0, j = 0;
    for (i = 0; i < DENSITY; i++) {
        if (firstTime) {
            nn.forEachNode(network, true, function (node) {
                boundary[node.id][i] = new Array(DENSITY);
            });
            for (var nodeId in INPUTS) {
                boundary[nodeId][i] = new Array(DENSITY);
            }
        }
        for (j = 0; j < DENSITY; j++) {
            var x = xScale(i);
            var y = yScale(j);
            var input = constructInput(x, y);
            nn.forwardProp(network, input);
            nn.forEachNode(network, true, function (node) {
                boundary[node.id][i][j] = node.output;
            });
            if (firstTime) {
                for (var nodeId in INPUTS) {
                    boundary[nodeId][i][j] = INPUTS[nodeId].f(x, y);
                }
            }
        }
    }
}
function getLoss(network, dataPoints) {
    var loss = 0;
    for (var i = 0; i < dataPoints.length; i++) {
        var dataPoint = dataPoints[i];
        var input = constructInput(dataPoint.x, dataPoint.y);
        var output = nn.forwardProp(network, input);
        loss += nn.Errors.SQUARE.error(output, dataPoint.label);
    }
    return loss / dataPoints.length;
}
function updateUI(firstStep) {
    if (firstStep === void 0) { firstStep = false; }
    updateWeightsUI(network, d3.select("g.core"));
    updateBiasesUI(network);
    updateDecisionBoundary(network, firstStep);
    var selectedId = selectedNodeId != null ?
        selectedNodeId : nn.getOutputNode(network).id;
    heatMap.updateBackground(boundary[selectedId], state.discretize);
    d3.select("#network").selectAll("div.canvas")
        .each(function (data) {
        data.heatmap.updateBackground(heatmap_1.reduceMatrix(boundary[data.id], 10), state.discretize);
    });
    function zeroPad(n) {
        var pad = "000000";
        return (pad + n).slice(-pad.length);
    }
    function addCommas(s) {
        return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function humanReadable(n) {
        return n.toFixed(3);
    }
    d3.select("#loss-train").text(humanReadable(lossTrain));
    d3.select("#loss-test").text(humanReadable(lossTest));
    d3.select("#iter-number").text(addCommas(zeroPad(iter)));
    lineChart.addDataPoint([lossTrain, lossTest]);
}
function constructInputIds() {
    var result = [];
    for (var inputName in INPUTS) {
        if (state[inputName]) {
            result.push(inputName);
        }
    }
    return result;
}
function constructInput(x, y) {
    var input = [];
    for (var inputName in INPUTS) {
        if (state[inputName]) {
            input.push(INPUTS[inputName].f(x, y));
        }
    }
    return input;
}
function oneStep() {
    iter++;
    trainData.forEach(function (point, i) {
        var input = constructInput(point.x, point.y);
        nn.forwardProp(network, input);
        nn.backProp(network, point.label, nn.Errors.SQUARE);
        if ((i + 1) % state.batchSize === 0) {
            nn.updateWeights(network, state.learningRate, state.regularizationRate);
        }
    });
    lossTrain = getLoss(network, trainData);
    lossTest = getLoss(network, testData);
    updateUI();
}
function getOutputWeights(network) {
    var weights = [];
    for (var layerIdx = 0; layerIdx < network.length - 1; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.outputs.length; j++) {
                var output = node.outputs[j];
                weights.push(output.weight);
            }
        }
    }
    return weights;
}
exports.getOutputWeights = getOutputWeights;
function reset(onStartup) {
    if (onStartup === void 0) { onStartup = false; }
    lineChart.reset();
    state.serialize();
    if (!onStartup) {
        userHasInteracted();
    }
    player.pause();
    d3.select("#num-layers").text(state.numHiddenLayers);
    if (contents.currentLang() == "ja") {
        if (state.numHiddenLayers == 0 || state.numHiddenLayers >= 10) {
            d3.select("#layers-label").text("個の隠し層");
        }
        else {
            d3.select("#layers-label").text("つの隠し層");
        }
    }
    else {
        var suffix = state.numHiddenLayers !== 1 ? "s" : "";
        d3.select("#layers-label").text("Hidden layer" + suffix);
    }
    iter = 0;
    var numInputs = constructInput(0, 0).length;
    var shape = [numInputs].concat(state.networkShape).concat([1]);
    var outputActivation = (state.problem == state_1.Problem.REGRESSION) ?
        nn.Activations.LINEAR : nn.Activations.TANH;
    network = nn.buildNetwork(shape, state.activation, outputActivation, state.regularization, constructInputIds(), state.initZero);
    lossTrain = getLoss(network, trainData);
    lossTest = getLoss(network, testData);
    drawNetwork(network);
    updateUI(true);
}
;
function initTutorial() {
    if (state.tutorial == null || state.tutorial == '' || state.hideText) {
        return;
    }
    d3.selectAll("article div.l--body").remove();
    var tutorial = d3.select("article").append("div")
        .attr("class", "l--body");
    d3.html("tutorials/" + state.tutorial + ".html", function (err, htmlFragment) {
        if (err) {
            throw err;
        }
        tutorial.node().appendChild(htmlFragment);
        var title = tutorial.select("title");
        if (title.size()) {
            d3.select("header h1").style({
                "margin-top": "20px",
                "margin-bottom": "20px"
            })
                .text(title.text());
            document.title = title.text();
        }
    });
}
function drawDatasetThumbnails() {
    function renderThumbnail(canvas, dataGenerator) {
        var w = 100;
        var h = 100;
        canvas.setAttribute("width", w);
        canvas.setAttribute("height", h);
        var context = canvas.getContext("2d");
        var data = dataGenerator(200, 0);
        data.forEach(function (d) {
            context.fillStyle = colorScale(d.label);
            context.fillRect(w * (d.x + 6) / 12, h * (d.y + 6) / 12, 4, 4);
        });
        d3.select(canvas.parentNode).style("display", null);
    }
    d3.selectAll(".dataset").style("display", "none");
    if (state.problem == state_1.Problem.CLASSIFICATION) {
        for (var dataset in state_1.datasets) {
            var canvas = document.querySelector("canvas[data-dataset=" + dataset + "]");
            var dataGenerator = state_1.datasets[dataset];
            renderThumbnail(canvas, dataGenerator);
        }
    }
    if (state.problem == state_1.Problem.REGRESSION) {
        for (var regDataset in state_1.regDatasets) {
            var canvas = document.querySelector("canvas[data-regDataset=" + regDataset + "]");
            var dataGenerator = state_1.regDatasets[regDataset];
            renderThumbnail(canvas, dataGenerator);
        }
    }
}
function hideControls() {
    var hiddenProps = state.getHiddenProps();
    hiddenProps.forEach(function (prop) {
        var controls = d3.selectAll(".ui-" + prop);
        if (controls.size() == 0) {
            console.warn("0 html elements found with class .ui-" + prop);
        }
        controls.style("display", "none");
    });
    var hideControls = d3.select(".hide-controls");
    HIDABLE_CONTROLS.forEach(function (_a) {
        var text = _a[0], id = _a[1];
        var label = hideControls.append("label")
            .attr("class", "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect");
        var input = label.append("input")
            .attr({
            type: "checkbox",
            class: "mdl-checkbox__input"
        });
        if (hiddenProps.indexOf(id) == -1) {
            input.attr("checked", "true");
        }
        input.on("change", function () {
            state.setHideProperty(id, !this.checked);
            state.serialize();
            userHasInteracted();
            d3.select(".hide-controls-link")
                .attr("href", window.location.href);
        });
        label.append("span")
            .attr("class", "mdl-checkbox__label label")
            .text(text);
    });
    d3.select(".hide-controls-link")
        .attr("href", window.location.href);
}
function generateData(firstTime) {
    if (firstTime === void 0) { firstTime = false; }
    if (!firstTime) {
        state.seed = Math.random().toFixed(5);
        state.serialize();
        userHasInteracted();
    }
    Math.seedrandom(state.seed);
    var numSamples = (state.problem == state_1.Problem.REGRESSION) ?
        NUM_SAMPLES_REGRESS : NUM_SAMPLES_CLASSIFY;
    var generator = state.problem == state_1.Problem.CLASSIFICATION ?
        state.dataset : state.regDataset;
    var data = generator(numSamples, state.noise / 100);
    dataset_1.shuffle(data);
    var splitIndex = Math.floor(data.length * state.percTrainData / 100);
    trainData = data.slice(0, splitIndex);
    testData = data.slice(splitIndex);
    heatMap.updatePoints(trainData);
    heatMap.updateTestPoints(state.showTestData ? testData : []);
}
var firstInteraction = true;
var parametersChanged = false;
function userHasInteracted() {
    if (!firstInteraction) {
        return;
    }
    firstInteraction = false;
    var page = 'index';
    if (state.tutorial != null && state.tutorial != '') {
        page = "/v/tutorials/" + state.tutorial;
    }
    try {
        ga('set', 'page', page);
        ga('send', 'pageview', { 'sessionControl': 'start' });
    }
    catch (e) { }
}
function simulationStarted() {
    try {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Starting Simulation',
            eventAction: parametersChanged ? 'changed' : 'unchanged',
            eventLabel: state.tutorial == null ? '' : state.tutorial
        });
    }
    catch (e) { }
    parametersChanged = false;
}
drawDatasetThumbnails();
initTutorial();
makeGUI();
generateData(true);
reset(true);
hideControls();
contents.init(state.lang);

},{"./additionalcontent":1,"./dataset":2,"./heatmap":3,"./linechart":4,"./nn":5,"./state":7}],7:[function(require,module,exports){
"use strict";
var nn = require("./nn");
var dataset = require("./dataset");
var HIDE_STATE_SUFFIX = "_hide";
exports.activations = {
    "relu": nn.Activations.RELU,
    "tanh": nn.Activations.TANH,
    "sigmoid": nn.Activations.SIGMOID,
    "linear": nn.Activations.LINEAR
};
exports.regularizations = {
    "none": null,
    "L1": nn.RegularizationFunction.L1,
    "L2": nn.RegularizationFunction.L2
};
exports.datasets = {
    "circle": dataset.classifyCircleData,
    "xor": dataset.classifyXORData,
    "gauss": dataset.classifyTwoGaussData,
    "spiral": dataset.classifySpiralData
};
exports.regDatasets = {
    "reg-plane": dataset.regressPlane,
    "reg-gauss": dataset.regressGaussian
};
function getKeyFromValue(obj, value) {
    for (var key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}
exports.getKeyFromValue = getKeyFromValue;
function endsWith(s, suffix) {
    return s.substr(-suffix.length) === suffix;
}
function getHideProps(obj) {
    var result = [];
    for (var prop in obj) {
        if (endsWith(prop, HIDE_STATE_SUFFIX)) {
            result.push(prop);
        }
    }
    return result;
}
(function (Type) {
    Type[Type["STRING"] = 0] = "STRING";
    Type[Type["NUMBER"] = 1] = "NUMBER";
    Type[Type["ARRAY_NUMBER"] = 2] = "ARRAY_NUMBER";
    Type[Type["ARRAY_STRING"] = 3] = "ARRAY_STRING";
    Type[Type["BOOLEAN"] = 4] = "BOOLEAN";
    Type[Type["OBJECT"] = 5] = "OBJECT";
})(exports.Type || (exports.Type = {}));
var Type = exports.Type;
(function (Problem) {
    Problem[Problem["CLASSIFICATION"] = 0] = "CLASSIFICATION";
    Problem[Problem["REGRESSION"] = 1] = "REGRESSION";
})(exports.Problem || (exports.Problem = {}));
var Problem = exports.Problem;
exports.problems = {
    "classification": Problem.CLASSIFICATION,
    "regression": Problem.REGRESSION
};
;
var State = (function () {
    function State() {
        this.learningRate = 0.03;
        this.regularizationRate = 0;
        this.showTestData = false;
        this.noise = 0;
        this.batchSize = 10;
        this.discretize = false;
        this.tutorial = null;
        this.percTrainData = 50;
        this.activation = nn.Activations.TANH;
        this.regularization = null;
        this.problem = Problem.CLASSIFICATION;
        this.initZero = false;
        this.hideText = false;
        this.collectStats = false;
        this.numHiddenLayers = 1;
        this.hiddenLayerControls = [];
        this.networkShape = [4, 2];
        this.x = true;
        this.y = true;
        this.xTimesY = false;
        this.xSquared = false;
        this.ySquared = false;
        this.cosX = false;
        this.sinX = false;
        this.cosY = false;
        this.sinY = false;
        this.dataset = dataset.classifyCircleData;
        this.regDataset = dataset.regressPlane;
        this.lang = "ja";
    }
    State.deserializeState = function () {
        var map = {};
        for (var _i = 0, _a = window.location.hash.slice(1).split("&"); _i < _a.length; _i++) {
            var keyvalue = _a[_i];
            var _b = keyvalue.split("="), name_1 = _b[0], value = _b[1];
            map[name_1] = value;
        }
        var state = new State();
        function hasKey(name) {
            return name in map && map[name] != null && map[name].trim() !== "";
        }
        function parseArray(value) {
            return value.trim() === "" ? [] : value.split(",");
        }
        State.PROPS.forEach(function (_a) {
            var name = _a.name, type = _a.type, keyMap = _a.keyMap;
            switch (type) {
                case Type.OBJECT:
                    if (keyMap == null) {
                        throw Error("A key-value map must be provided for state " +
                            "variables of type Object");
                    }
                    if (hasKey(name) && map[name] in keyMap) {
                        state[name] = keyMap[map[name]];
                    }
                    break;
                case Type.NUMBER:
                    if (hasKey(name)) {
                        state[name] = +map[name];
                    }
                    break;
                case Type.STRING:
                    if (hasKey(name)) {
                        state[name] = map[name];
                    }
                    break;
                case Type.BOOLEAN:
                    if (hasKey(name)) {
                        state[name] = (map[name] === "false" ? false : true);
                    }
                    break;
                case Type.ARRAY_NUMBER:
                    if (name in map) {
                        state[name] = parseArray(map[name]).map(Number);
                    }
                    break;
                case Type.ARRAY_STRING:
                    if (name in map) {
                        state[name] = parseArray(map[name]);
                    }
                    break;
                default:
                    throw Error("Encountered an unknown type for a state variable");
            }
        });
        getHideProps(map).forEach(function (prop) {
            state[prop] = (map[prop] === "true") ? true : false;
        });
        state.numHiddenLayers = state.networkShape.length;
        if (state.seed == null) {
            state.seed = Math.random().toFixed(5);
        }
        Math.seedrandom(state.seed);
        return state;
    };
    State.prototype.serialize = function () {
        var _this = this;
        var props = [];
        State.PROPS.forEach(function (_a) {
            var name = _a.name, type = _a.type, keyMap = _a.keyMap;
            var value = _this[name];
            if (value == null) {
                return;
            }
            if (type === Type.OBJECT) {
                value = getKeyFromValue(keyMap, value);
            }
            else if (type === Type.ARRAY_NUMBER ||
                type === Type.ARRAY_STRING) {
                value = value.join(",");
            }
            props.push(name + "=" + value);
        });
        getHideProps(this).forEach(function (prop) {
            props.push(prop + "=" + _this[prop]);
        });
        window.location.hash = props.join("&");
    };
    State.prototype.getHiddenProps = function () {
        var result = [];
        for (var prop in this) {
            if (endsWith(prop, HIDE_STATE_SUFFIX) && this[prop] === true) {
                result.push(prop.replace(HIDE_STATE_SUFFIX, ""));
            }
        }
        return result;
    };
    State.prototype.setHideProperty = function (name, hidden) {
        this[name + HIDE_STATE_SUFFIX] = hidden;
    };
    State.PROPS = [
        { name: "activation", type: Type.OBJECT, keyMap: exports.activations },
        { name: "regularization", type: Type.OBJECT, keyMap: exports.regularizations },
        { name: "batchSize", type: Type.NUMBER },
        { name: "dataset", type: Type.OBJECT, keyMap: exports.datasets },
        { name: "regDataset", type: Type.OBJECT, keyMap: exports.regDatasets },
        { name: "learningRate", type: Type.NUMBER },
        { name: "regularizationRate", type: Type.NUMBER },
        { name: "noise", type: Type.NUMBER },
        { name: "networkShape", type: Type.ARRAY_NUMBER },
        { name: "seed", type: Type.STRING },
        { name: "showTestData", type: Type.BOOLEAN },
        { name: "discretize", type: Type.BOOLEAN },
        { name: "percTrainData", type: Type.NUMBER },
        { name: "x", type: Type.BOOLEAN },
        { name: "y", type: Type.BOOLEAN },
        { name: "xTimesY", type: Type.BOOLEAN },
        { name: "xSquared", type: Type.BOOLEAN },
        { name: "ySquared", type: Type.BOOLEAN },
        { name: "cosX", type: Type.BOOLEAN },
        { name: "sinX", type: Type.BOOLEAN },
        { name: "cosY", type: Type.BOOLEAN },
        { name: "sinY", type: Type.BOOLEAN },
        { name: "collectStats", type: Type.BOOLEAN },
        { name: "tutorial", type: Type.STRING },
        { name: "problem", type: Type.OBJECT, keyMap: exports.problems },
        { name: "initZero", type: Type.BOOLEAN },
        { name: "hideText", type: Type.BOOLEAN },
        { name: "lang", type: Type.STRING }
    ];
    return State;
}());
exports.State = State;

},{"./dataset":2,"./nn":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWRkaXRpb25hbGNvbnRlbnQudHMiLCJzcmMvZGF0YXNldC50cyIsInNyYy9oZWF0bWFwLnRzIiwic3JjL2xpbmVjaGFydC50cyIsInNyYy9ubi50cyIsInNyYy9wbGF5Z3JvdW5kLnRzIiwic3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0lBLElBQUksWUFBWSxHQUFXLElBQUksQ0FBQztBQUVoQztJQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQUZlLG1CQUFXLGNBRTFCLENBQUE7QUFFRCxjQUFxQixJQUFhO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7UUFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3pELFlBQVksR0FBRyxJQUFJLENBQUM7SUFFcEIsQ0FBQyxDQUFDO1FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFN0MsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3JCLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUNoQyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBRTFDLFlBQVksR0FBRyxhQUFhLENBQUM7WUFDN0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBR0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBckJlLFlB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TUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUks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LEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVyRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNKLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxlQUFlLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDcEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsSUFBSSxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFBQSxDQUFDO0FBRUY7SUFDRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUM7SUFDVCxDQUFDO0lBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBYSxLQUFLLENBQUMsUUFBUSxVQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsWUFBWTtRQUM1RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxHQUFHLENBQUM7UUFDWixDQUFDO1FBQ0ssUUFBUSxDQUFDLElBQUksRUFBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzNCLFlBQVksRUFBRSxNQUFNO2dCQUNwQixlQUFlLEVBQUUsTUFBTTthQUN4QixDQUFDO2lCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7SUFDRSx5QkFBeUIsTUFBTSxFQUFFLGFBQWE7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ1osTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLGVBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLGdCQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksTUFBTSxHQUNOLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXVCLE9BQU8sTUFBRyxDQUFDLENBQUM7WUFDOUQsSUFBSSxhQUFhLEdBQUcsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxlQUFlLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxlQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxtQkFBVyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLE1BQU0sR0FDTixRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUEwQixVQUFVLE1BQUcsQ0FBQyxDQUFDO1lBQ3BFLElBQUksYUFBYSxHQUFHLG1CQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRDtJQUVFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtRQUN0QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQU8sSUFBTSxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBd0MsSUFBTSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBSUgsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVU7WUFBVCxZQUFJLEVBQUUsVUFBRTtRQUNqQyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDOUIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLHFCQUFxQjtTQUM3QixDQUFDLENBQUM7UUFDTCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xCLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztpQkFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQzthQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1NBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsc0JBQXNCLFNBQWlCO0lBQWpCLHlCQUFpQixHQUFqQixpQkFBaUI7SUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWYsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTyxDQUFDLFVBQVUsQ0FBQztRQUNsRCxtQkFBbUIsR0FBRyxvQkFBb0IsQ0FBQztJQUMvQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGVBQU8sQ0FBQyxjQUFjO1FBQ25ELEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNyQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFcEQsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVkLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFFOUI7SUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ0QsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHLGtCQUFnQixLQUFLLENBQUMsUUFBVSxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFHLENBQUM7UUFDRixFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDdEQsQ0FDQTtJQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDO0FBQ1osQ0FBQztBQUVEO0lBQ0UsSUFBRyxDQUFDO1FBQ0YsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGFBQWEsRUFBRSxxQkFBcUI7WUFDcEMsV0FBVyxFQUFFLGlCQUFpQixHQUFHLFNBQVMsR0FBRyxXQUFXO1lBQ3hELFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVE7U0FDekQsQ0FBQyxDQUFDO0lBQ0wsQ0FDQTtJQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDO0lBQ1YsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQzVCLENBQUM7QUFFRCxxQkFBcUIsRUFBRSxDQUFDO0FBQ3hCLFlBQVksRUFBRSxDQUFDO0FBQ2YsT0FBTyxFQUFFLENBQUM7QUFDVixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1osWUFBWSxFQUFFLENBQUM7QUFHZixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztBQ3BtQzFCLElBQVksRUFBRSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzNCLElBQVksT0FBTyxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBR3JDLElBQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDO0FBR3ZCLG1CQUFXLEdBQTJDO0lBQy9ELE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUk7SUFDM0IsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSTtJQUMzQixTQUFTLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPO0lBQ2pDLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU07Q0FDaEMsQ0FBQztBQUdTLHVCQUFlLEdBQStDO0lBQ3ZFLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ2xDLElBQUksRUFBRSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRTtDQUNuQyxDQUFDO0FBR1MsZ0JBQVEsR0FBMkM7SUFDNUQsUUFBUSxFQUFFLE9BQU8sQ0FBQyxrQkFBa0I7SUFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlO0lBQzlCLE9BQU8sRUFBRSxPQUFPLENBQUMsb0JBQW9CO0lBQ3JDLFFBQVEsRUFBRSxPQUFPLENBQUMsa0JBQWtCO0NBQ3JDLENBQUM7QUFHUyxtQkFBVyxHQUEyQztJQUMvRCxXQUFXLEVBQUUsT0FBTyxDQUFDLFlBQVk7SUFDakMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxlQUFlO0NBQ3JDLENBQUM7QUFFRix5QkFBZ0MsR0FBUSxFQUFFLEtBQVU7SUFDbEQsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFQZSx1QkFBZSxrQkFPOUIsQ0FBQTtBQUVELGtCQUFrQixDQUFTLEVBQUUsTUFBYztJQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDN0MsQ0FBQztBQUVELHNCQUFzQixHQUFRO0lBQzVCLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQU1ELFdBQVksSUFBSTtJQUNkLG1DQUFNLENBQUE7SUFDTixtQ0FBTSxDQUFBO0lBQ04sK0NBQVksQ0FBQTtJQUNaLCtDQUFZLENBQUE7SUFDWixxQ0FBTyxDQUFBO0lBQ1AsbUNBQU0sQ0FBQTtBQUNSLENBQUMsRUFQVyxZQUFJLEtBQUosWUFBSSxRQU9mO0FBUEQsSUFBWSxJQUFJLEdBQUosWUFPWCxDQUFBO0FBRUQsV0FBWSxPQUFPO0lBQ2pCLHlEQUFjLENBQUE7SUFDZCxpREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUhXLGVBQU8sS0FBUCxlQUFPLFFBR2xCO0FBSEQsSUFBWSxPQUFPLEdBQVAsZUFHWCxDQUFBO0FBRVUsZ0JBQVEsR0FBRztJQUNwQixnQkFBZ0IsRUFBRSxPQUFPLENBQUMsY0FBYztJQUN4QyxZQUFZLEVBQUUsT0FBTyxDQUFDLFVBQVU7Q0FDakMsQ0FBQztBQU1ELENBQUM7QUFHRjtJQUFBO1FBa0NFLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBOEIsSUFBSSxDQUFDO1FBQ2pELFlBQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQix3QkFBbUIsR0FBVSxFQUFFLENBQUM7UUFDaEMsaUJBQVksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1QsTUFBQyxHQUFHLElBQUksQ0FBQztRQUNULFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQTBCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxlQUFVLEdBQTBCLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFekQsU0FBSSxHQUFXLElBQUksQ0FBQztJQXFIdEIsQ0FBQztJQWhIUSxzQkFBZ0IsR0FBdkI7UUFDRSxJQUFJLEdBQUcsR0FBNEIsRUFBRSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUFpQixVQUF3QyxFQUF4QyxLQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXhDLGNBQXdDLEVBQXhDLElBQXdDLENBQUM7WUFBekQsSUFBSSxRQUFRLFNBQUE7WUFDZixJQUFBLHdCQUF1QyxFQUFsQyxjQUFJLEVBQUUsYUFBSyxDQUF3QjtZQUN4QyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUV4QixnQkFBZ0IsSUFBWTtZQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDckUsQ0FBQztRQUVELG9CQUFvQixLQUFhO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFHRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQW9CO2dCQUFuQixjQUFJLEVBQUUsY0FBSSxFQUFFLGtCQUFNO1lBQ3RDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxLQUFLLENBQUMsNkNBQTZDOzRCQUNyRCwwQkFBMEIsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUNSLEtBQUssSUFBSSxDQUFDLE1BQU07b0JBQ2QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsT0FBTztvQkFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxJQUFJLENBQUMsWUFBWTtvQkFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsRCxDQUFDO29CQUNELEtBQUssQ0FBQztnQkFDUixLQUFLLElBQUksQ0FBQyxZQUFZO29CQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1I7b0JBQ0UsTUFBTSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUNwRSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFHSCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFLRCx5QkFBUyxHQUFUO1FBQUEsaUJBc0JDO1FBcEJDLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQW9CO2dCQUFuQixjQUFJLEVBQUUsY0FBSSxFQUFFLGtCQUFNO1lBQ3RDLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekIsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFlBQVk7Z0JBQ2pDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUNELEtBQUssQ0FBQyxJQUFJLENBQUksSUFBSSxTQUFJLEtBQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBSSxJQUFJLFNBQUksS0FBSSxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCw4QkFBYyxHQUFkO1FBQ0UsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELCtCQUFlLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLE1BQWU7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBakxjLFdBQUssR0FBZTtRQUNqQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLG1CQUFXLEVBQUM7UUFDNUQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLHVCQUFlLEVBQUM7UUFDcEUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ3RDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQVEsRUFBQztRQUN0RCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLG1CQUFXLEVBQUM7UUFDNUQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQy9DLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQztRQUNsQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUM7UUFDL0MsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUMxQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7UUFDeEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQzFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUMvQixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7UUFDL0IsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO1FBQ3JDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUN0QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7UUFDdEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO1FBQ2xDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUNsQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7UUFDbEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO1FBQ2xDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDckMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxnQkFBUSxFQUFDO1FBQ3RELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztRQUN0QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7UUFDdEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO0tBQ2xDLENBQUM7SUFxSkosWUFBQztBQUFELENBcExBLEFBb0xDLElBQUE7QUFwTFksYUFBSyxRQW9MakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZWNsYXJlIGxldCBqUXVlcnk6IGFueTtcbmRlY2xhcmUgbGV0ICQ6IGFueTtcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG5sZXQgY3VycmVudF9sYW5nOiBzdHJpbmcgPSBcImVuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuICByZXR1cm4gY3VycmVudF9sYW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChsYW5nPzogc3RyaW5nKSB7XG4gIGlmICghbGFuZyB8fCAobGFuZyAhPSBcImVuXCIgJiYgbGFuZyAhPSBcImphXCIpKSBsYW5nID0gXCJlblwiO1xuICBjdXJyZW50X2xhbmcgPSBsYW5nO1xuXG4gICQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwbGF5Z3JvdW5kID0gJChcIiNwbGF5Z3JvdW5kLWNvbnRlbnRcIik7XG4gICAgbGV0IGxhbmdCdXR0b24gPSAkKFwiI2xhbmctc2VsZWN0aW9uIGJ1dHRvblwiKTtcblxuICAgIHN3aXRjaExhbmd1YWdlKGxhbmcpO1xuICBcbiAgICAvLy8gQ2hhbmdlIGN1cnJlbnQgbGFuZ3VhZ2UgaW4gd2hvbGUgc2l0ZSBjb250ZW50XG4gICAgbGFuZ0J1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRfbGFuZyA9ICQodGhpcykuZGF0YShcImxhbmdcIik7XG4gICAgICBpZiAoc2VsZWN0ZWRfbGFuZyA9PSBjdXJyZW50X2xhbmcpIHJldHVybjtcblxuICAgICAgY3VycmVudF9sYW5nID0gc2VsZWN0ZWRfbGFuZztcbiAgICAgIHN3aXRjaExhbmd1YWdlKHNlbGVjdGVkX2xhbmcpO1xuICAgIH0pO1xuICBcblxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoTGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gIGlmIChsYW5nICE9IFwiamFcIiAmJiBsYW5nICE9IFwiZW5cIikgcmV0dXJuO1xuXG4gIGlmIChsYW5nID09IFwiZW5cIikge1xuICAgICQoXCJbZGF0YS1pMThuPSd0b2dnbGVwbGF5Z3JvdW5kdmlzaWJpbGl0eSddXCIpLnRleHQoXCJDbGljayB0aGlzIGJ1dHRvbiB0byB0b2dnbGUgcGxheWdyb3VuZCB2aXNpYmxlL2hpZGRlbi5cIik7XG4gICAgJChcIltkYXRhLWkxOG49J3RvZ2dsZWNvbG9ydGhlbWUnXVwiKS50ZXh0KFwiWW91IGNhbiBzd2l0Y2ggdGhlbWUgY29sb3Igb2YgdGhpcyB3ZWJzaXRlXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdoZWFkZXJ0aXRsZSddXCIpLmh0bWwoXCJUaW5rZXIgV2l0aCBhIDxiPk5ldXJhbCBOZXR3b3JrPC9iPiA8c3BhbiBjbGFzcz1cXFwib3B0aW9uYWxcXFwiPlJpZ2h0IEhlcmUgPC9zcGFuPmluIFlvdXIgQnJvd3Nlci48YnI+RG9u4oCZdCBXb3JyeSwgWW91IENhbuKAmXQgQnJlYWsgSXQuIFdlIFByb21pc2UuXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdpdGVyYXRpb25zJ11cIikudGV4dChcIkl0ZXJhdGlvbnNcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2xlYXJubWluZ3JhdGUnXVwiKS50ZXh0KFwiTGVhcm5pbmcgcmF0ZVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nYWN0aXZhdGlvbiddXCIpLnRleHQoXCJBY3RpdmF0aW9uXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdzaWdtb2lkJ11cIikudGV4dChcIlNpZ21vaWRcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2xpbmVhciddXCIpLnRleHQoXCJMaW5lYXJcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3JlZ3VsYXJpemF0aW9uJ11cIikudGV4dChcIlJlZ3VsYXJpemF0aW9uXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyZWd1bGFyaXphdGlvbnJhdGUnXVwiKS50ZXh0KFwiUmVndWxhcml6YXRpb24gcmF0ZVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncHJvYmxlbXR5cGUnXVwiKS50ZXh0KFwiUHJvYmxlbSB0eXBlXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdjbGFzc2lmaWNhdGlvbiddXCIpLnRleHQoXCJDbGFzc2lmaWNhdGlvblwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncmVncmVzc2lvbiddXCIpLnRleHQoXCJSZWdyZXNzaW9uXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdkYXRhJ11cIikudGV4dChcIkRhdGFcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3doaWNoZGF0YXNldCddXCIpLnRleHQoXCJXaGljaCBkYXRhc2V0IGRvIHlvdSB3YW50IHRvIHVzZT9cIik7XG4gICAgJChcIltkYXRhLWkxOG49J2NpcmNsZSddXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIkNpcmNsZVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nZXhjbHVzaXZlb3InXVwiKS5hdHRyKFwidGl0bGVcIiwgXCJFeGNsdXNpdmUgb3JcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2dhdXNzaWFuJ11cIikuYXR0cihcInRpdGxlXCIsIFwiR2F1c3NpYW5cIik7XG4gICAgJChcIltkYXRhLWkxOG49J3NwaXJhbCddXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIlNwaXJhbFwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncGxhbmUnXVwiKS5hdHRyKFwidGl0bGVcIiwgXCJQbGFuZVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nbXVsdGlnYXVzc2lhbiddXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIk11bHRpIGdhdXNzaWFuXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyYXRpb25vZnRyYWluaW5nZGF0YSddXCIpLnRleHQoXCJSYXRpbyBvZiB0cmFpbmluZyB0byB0ZXN0IGRhdGE6XCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdub2lzZSddXCIpLnRleHQoXCJOb2lzZTpcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2JhdGNoc2l6ZSddXCIpLnRleHQoXCJCYXRjaCBzaXplOlwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncmVnZW4nXVwiKS50ZXh0KFwiUmVnZW5lcmF0ZVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncmVnZW4nXVwiKS5hdHRyKFwidGl0bGVcIiwgXCJSZWdlbmVyYXRlIGRhdGFcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2ZlYXR1cmVzJ11cIikudGV4dChcIkZlYXR1cmVzXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSd3aGljaHByb3BlcnR5J11cIikudGV4dChcIldoaWNoIHByb3BlcnRpZXMgZG8geW91IHdhbnQgdG8gZmVlZCBpbj9cIik7XG4gICAgJChcIltkYXRhLWkxOG49J2NsaWNrYW55d2hlcmV0b2VkaXQnXVwiKS50ZXh0KFwiQ2xpY2sgYW55d2hlcmUgdG8gZWRpdC5cIik7XG4gICAgJChcIltkYXRhLWkxOG49J3RodW1ibmFpbGxhYmVsJ11cIikuaHRtbChcIlRoaXMgaXMgdGhlIG91dHB1dCBmcm9tIG9uZSA8Yj5uZXVyb248L2I+LiBIb3ZlciB0byBzZWUgaXQgbGFyZ2VyLlwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nd2VpZ2h0c2xhYmVsJ11cIikuaHRtbChcIlRoZSBvdXRwdXRzIGFyZSBtaXhlZCB3aXRoIHZhcnlpbmcgPGI+d2VpZ2h0czwvYj4sIHNob3duIGJ5IHRoZSB0aGlja25lc3Mgb2YgdGhlIGxpbmVzLlwiKTtcbiAgICBpZiAoJChcIiNudW0tbGF5ZXJzXCIpLnRleHQoKSA9PSBcIjFcIikgJChcIltkYXRhLWkxOG49J2xheWVyc2xhYmVsJ11cIikudGV4dChcIkhpZGRlbiBsYXllclwiKTtcbiAgICBpZiAoJChcIiNudW0tbGF5ZXJzXCIpLnRleHQoKSAhPSBcIjFcIikgJChcIltkYXRhLWkxOG49J2xheWVyc2xhYmVsJ11cIikudGV4dChcIkhpZGRlbiBsYXllcnNcIik7XG4gICAgJChcIltkYXRhLWkxOG49J291dHB1dCddXCIpLnRleHQoXCJPdXRwdXRcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3Rlc3Rsb3NzJ11cIikudGV4dChcIlRlc3QgbG9zc1wiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ndHJhaW5pbmdsb3NzJ11cIikudGV4dChcIlRyYWluaW5nIGxvc3NcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2NvbG9yc3Nob3dzZGF0YSddXCIpLnRleHQoXCIgQ29sb3JzIHNob3dzIGRhdGEsIG5ldXJvbiBhbmQgd2VpZ2h0IHZhbHVlcy5cIik7XG4gICAgJChcIltkYXRhLWkxOG49J3Nob3d0ZXN0ZGF0YSddXCIpLnRleHQoXCJTaG93IHRlc3QgZGF0YVwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nZGlzY3JldGl6ZW91dHB1dCddXCIpLnRleHQoXCJEaXNjcmV0aXplIG91dHB1dFwiKTtcbiAgfVxuICBlbHNlIGlmIChsYW5nID09IFwiamFcIikge1xuICAgICQoXCJbZGF0YS1pMThuPSd0b2dnbGVwbGF5Z3JvdW5kdmlzaWJpbGl0eSddXCIpLnRleHQoXCLjg4fjg6Ljga7pnZ7ooajnpLov6KGo56S644KS5YiH44KK5pu/44GI44KJ44KM44G+44GZ44CCXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSd0b2dnbGVjb2xvcnRoZW1lJ11cIikudGV4dChcIuOCteOCpOODiOOBruODhuODvOODnuOCq+ODqeODvOOCkuWIh+OCiuabv+OBiOOCieOCjOOBvuOBmeOAglwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0naGVhZGVydGl0bGUnXVwiKS5odG1sKFwiPHNwYW4gY2xhc3M9XFxcIm9wdGlvbmFsXFxcIj7jg5bjg6njgqbjgrbkuIrjgac8L3NwYW4+PGI+44OL44Ol44O844Op44Or44ON44OD44OI44Ov44O844KvPC9iPuOBruODoeOCq+ODi+OCuuODoOOCkuaknOiovOOBl+OBpuOBv+OCiOOBhuOAgjxicj7kvZXjgoLlo4rjgozjgarjgYTjgYvjgonlv4PphY3jga/jgYTjgonjgarjgYTjgIJcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2l0ZXJhdGlvbnMnXVwiKS50ZXh0KFwi44Ko44Od44OD44KvXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdsZWFybm1pbmdyYXRlJ11cIikudGV4dChcIuWtpue/kueOh1wiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nYWN0aXZhdGlvbiddXCIpLnRleHQoXCLmtLvmgKfljJbplqLmlbBcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3NpZ21vaWQnXVwiKS50ZXh0KFwi44K344Kw44Oi44Kk44OJ6Zai5pWwXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdsaW5lYXInXVwiKS50ZXh0KFwi57ea5b2i6Zai5pWwXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyZWd1bGFyaXphdGlvbiddXCIpLnRleHQoXCLmraPliYfljJZcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3JlZ3VsYXJpemF0aW9ucmF0ZSddXCIpLnRleHQoXCLmraPliYfljJbpoIVcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3Byb2JsZW10eXBlJ11cIikudGV4dChcIue1seioiOODouODh+ODq+OBrueorumhnlwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nY2xhc3NpZmljYXRpb24nXVwiKS50ZXh0KFwi5YiG6aGeXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyZWdyZXNzaW9uJ11cIikudGV4dChcIuWbnuW4sFwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nZGF0YSddXCIpLnRleHQoXCLjg4fjg7zjgr9cIik7XG4gICAgJChcIltkYXRhLWkxOG49J3doaWNoZGF0YXNldCddXCIpLnRleHQoXCLjganjga7jg4fjg7zjgr/jgrvjg4Pjg4jjgpLkvb/jgYTjgb7jgZnjgYs/XCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdjaXJjbGUnXVwiKS5hdHRyKFwidGl0bGVcIiwgXCLlhoZcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2V4Y2x1c2l2ZW9yJ11cIikuYXR0cihcInRpdGxlXCIsIFwi5o6S5LuWT1JcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2dhdXNzaWFuJ11cIikuYXR0cihcInRpdGxlXCIsIFwi44Ks44Km44K344Ki44OzXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdzcGlyYWwnXVwiKS5hdHRyKFwidGl0bGVcIiwgXCLonrrml4tcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3BsYW5lJ11cIikuYXR0cihcInRpdGxlXCIsIFwi5bmz6Z2iXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdtdWx0aWdhdXNzaWFuJ11cIikuYXR0cihcInRpdGxlXCIsIFwi44Oe44Or44OB44Ks44Km44K344Ki44OzXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyYXRpb25vZnRyYWluaW5nZGF0YSddXCIpLnRleHQoXCLjg4jjg6zjg7zjg4vjg7PjgrDjg4fjg7zjgr/jga7libLlkIg6XCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdub2lzZSddXCIpLnRleHQoXCLjg47jgqTjgro6XCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdiYXRjaHNpemUnXVwiKS50ZXh0KFwi44OQ44OD44OB44K144Kk44K6OlwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0ncmVnZW4nXVwiKS50ZXh0KFwi5YaN55Sf5oiQXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSdyZWdlbiddXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIuODh+ODvOOCv+OCkuWGjeeUn+aIkOOBmeOCi1wiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nZmVhdHVyZXMnXVwiKS50ZXh0KFwi54m55b60XCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSd3aGljaHByb3BlcnR5J11cIikudGV4dChcIuWFpeWKm+OBmeOCi+ODh+ODvOOCv+OBrueJueW+tOOCkumBuOaKnuOBl+OBpuOBj+OBoOOBleOBhFwiKTtcbiAgICAkKFwiW2RhdGEtaTE4bj0nY2xpY2thbnl3aGVyZXRvZWRpdCddXCIpLnRleHQoXCLjgq/jg6rjg4Pjgq/jgZfjgablgKTjgpLnt6jpm4ZcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3RodW1ibmFpbGxhYmVsJ11cIikuaHRtbChcIuOBk+OBrjxiPuODi+ODpeODvOODreODszwvYj7jga7lh7rlipvjgafjgZnjgILjg57jgqbjgrnjgqrjg7zjg5Djg7zjgZnjgovjgajmi6HlpKfjgZfjgabopovjgozjgb7jgZnjgIJcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3dlaWdodHNsYWJlbCddXCIpLmh0bWwoXCLjg4vjg6Xjg7zjg63jg7Pjga7lh7rlipvjga88Yj7ph43jgb88L2I+44Gu5b2x6Z+/44KS5Y+X44GR44G+44GZ44CC6YeN44G/44Gv57ea44Gu5aSq44GV44Go6Imy44Gn6KGo44GV44KM44G+44GZ44CCXCIpO1xuICAgIGxldCBudW1MYXllcnM6IG51bWJlciA9ICskKFwiI251bS1sYXllcnNcIikudGV4dCgpO1xuICAgIGlmIChudW1MYXllcnMgPT0gMCB8fCBudW1MYXllcnMgPj0gMTApIHtcbiAgICAgICQoXCJbZGF0YS1pMThuPSdsYXllcnNsYWJlbCddXCIpLnRleHQoXCLlgIvjga7pmqDjgZflsaRcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJChcIltkYXRhLWkxOG49J2xheWVyc2xhYmVsJ11cIikudGV4dChcIuOBpOOBrumaoOOBl+WxpFwiKTtcbiAgICB9XG4gICAgJChcIltkYXRhLWkxOG49J291dHB1dCddXCIpLnRleHQoXCLlh7rliptcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3Rlc3Rsb3NzJ11cIikudGV4dChcIuiqpOW3rijjg4bjgrnjg4gpXCIpO1xuICAgICQoXCJbZGF0YS1pMThuPSd0cmFpbmluZ2xvc3MnXVwiKS50ZXh0KFwi6Kqk5beuKOODiOODrOODvOODi+ODs+OCsClcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2NvbG9yc3Nob3dzZGF0YSddXCIpLnRleHQoXCLjg4fjg7zjgr/jgoTjg4vjg6Xjg7zjg63jg7PjgIHph43jgb/jga7lgKTjga/oibLjgafooajnj77jgZXjgozjgb7jgZnjgIJcIik7XG4gICAgJChcIltkYXRhLWkxOG49J3Nob3d0ZXN0ZGF0YSddXCIpLnRleHQoXCLjg4bjgrnjg4jjg4fjg7zjgr/jgpLooajnpLrjgZnjgotcIik7XG4gICAgJChcIltkYXRhLWkxOG49J2Rpc2NyZXRpemVvdXRwdXQnXVwiKS50ZXh0KFwi5Ye65Yqb44KS6Zui5pWj5YyW44GZ44KLXCIpO1xuICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qKlxuICogQSB0d28gZGltZW5zaW9uYWwgZXhhbXBsZTogeCBhbmQgeSBjb29yZGluYXRlcyB3aXRoIHRoZSBsYWJlbC5cbiAqL1xuZXhwb3J0IHR5cGUgRXhhbXBsZTJEID0ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgbGFiZWw6IG51bWJlclxufTtcblxudHlwZSBQb2ludCA9IHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXJcbn07XG5cbi8qKlxuICogU2h1ZmZsZXMgdGhlIGFycmF5IHVzaW5nIEZpc2hlci1ZYXRlcyBhbGdvcml0aG0uIFVzZXMgdGhlIHNlZWRyYW5kb21cbiAqIGxpYnJhcnkgYXMgdGhlIHJhbmRvbSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5OiBhbnlbXSk6IHZvaWQge1xuICBsZXQgY291bnRlciA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IHRlbXAgPSAwO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGlsZSB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gIHdoaWxlIChjb3VudGVyID4gMCkge1xuICAgIC8vIFBpY2sgYSByYW5kb20gaW5kZXhcbiAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvdW50ZXIpO1xuICAgIC8vIERlY3JlYXNlIGNvdW50ZXIgYnkgMVxuICAgIGNvdW50ZXItLTtcbiAgICAvLyBBbmQgc3dhcCB0aGUgbGFzdCBlbGVtZW50IHdpdGggaXRcbiAgICB0ZW1wID0gYXJyYXlbY291bnRlcl07XG4gICAgYXJyYXlbY291bnRlcl0gPSBhcnJheVtpbmRleF07XG4gICAgYXJyYXlbaW5kZXhdID0gdGVtcDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRhR2VuZXJhdG9yID0gKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcikgPT4gRXhhbXBsZTJEW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeVR3b0dhdXNzRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBsZXQgdmFyaWFuY2VTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbMCwgLjVdKS5yYW5nZShbMC41LCA0XSk7XG4gIGxldCB2YXJpYW5jZSA9IHZhcmlhbmNlU2NhbGUobm9pc2UpO1xuXG4gIGZ1bmN0aW9uIGdlbkdhdXNzKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGxhYmVsOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXMgLyAyOyBpKyspIHtcbiAgICAgIGxldCB4ID0gbm9ybWFsUmFuZG9tKGN4LCB2YXJpYW5jZSk7XG4gICAgICBsZXQgeSA9IG5vcm1hbFJhbmRvbShjeSwgdmFyaWFuY2UpO1xuICAgICAgcG9pbnRzLnB1c2goe3g6IHgsIHk6IHksIGxhYmVsOiBsYWJlbH0pO1xuICAgIH1cbiAgfVxuXG4gIGdlbkdhdXNzKDIsIDIsIDEpOyAvLyBHYXVzc2lhbiB3aXRoIHBvc2l0aXZlIGV4YW1wbGVzLlxuICBnZW5HYXVzcygtMiwgLTIsIC0xKTsgLy8gR2F1c3NpYW4gd2l0aCBuZWdhdGl2ZSBleGFtcGxlcy5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NQbGFuZShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICBFeGFtcGxlMkRbXSB7XG4gIGxldCByYWRpdXMgPSA2O1xuICBsZXQgbGFiZWxTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbLTEwLCAxMF0pXG4gICAgLnJhbmdlKFstMSwgMV0pO1xuICBsZXQgZ2V0TGFiZWwgPSAoeCwgeSkgPT4gbGFiZWxTY2FsZSh4ICsgeSk7XG5cbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRMYWJlbCh4ICsgbm9pc2VYLCB5ICsgbm9pc2VZKTtcbiAgICBwb2ludHMucHVzaCh7eDogeCwgeTogeSwgbGFiZWw6IGxhYmVsfSk7XG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NHYXVzc2lhbihudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgbGV0IGxhYmVsU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC5kb21haW4oWzAsIDJdKVxuICAgIC5yYW5nZShbMSwgMF0pXG4gICAgLmNsYW1wKHRydWUpO1xuXG4gIGxldCBnYXVzc2lhbnMgPSBbXG4gICAgWy00LCAyLjUsIDFdLFxuICAgIFswLCAyLjUsIC0xXSxcbiAgICBbNCwgMi41LCAxXSxcbiAgICBbLTQsIC0yLjUsIC0xXSxcbiAgICBbMCwgLTIuNSwgMV0sXG4gICAgWzQsIC0yLjUsIC0xXVxuICBdO1xuXG4gIGZ1bmN0aW9uIGdldExhYmVsKHgsIHkpIHtcbiAgICAvLyBDaG9vc2UgdGhlIG9uZSB0aGF0IGlzIG1heGltdW0gaW4gYWJzIHZhbHVlLlxuICAgIGxldCBsYWJlbCA9IDA7XG4gICAgZ2F1c3NpYW5zLmZvckVhY2goKFtjeCwgY3ksIHNpZ25dKSA9PiB7XG4gICAgICBsZXQgbmV3TGFiZWwgPSBzaWduICogbGFiZWxTY2FsZShkaXN0KHt4OiB4LCB5OiB5fSwge3g6IGN4LCB5OiBjeX0pKTtcbiAgICAgIGlmIChNYXRoLmFicyhuZXdMYWJlbCkgPiBNYXRoLmFicyhsYWJlbCkpIHtcbiAgICAgICAgbGFiZWwgPSBuZXdMYWJlbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbiAgbGV0IHJhZGl1cyA9IDY7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlczsgaSsrKSB7XG4gICAgbGV0IHggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCB5ID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0TGFiZWwoeCArIG5vaXNlWCwgeSArIG5vaXNlWSk7XG4gICAgcG9pbnRzLnB1c2goe3g6IHgsIHk6IHksIGxhYmVsOiBsYWJlbH0pO1xuICB9O1xuICByZXR1cm4gcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlTcGlyYWxEYXRhKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBsZXQgbiA9IG51bVNhbXBsZXMgLyAyO1xuXG4gIGZ1bmN0aW9uIGdlblNwaXJhbChkZWx0YVQ6IG51bWJlciwgbGFiZWw6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBsZXQgciA9IGkgLyBuICogNTtcbiAgICAgIGxldCB0ID0gMS43NSAqIGkgLyBuICogMiAqIE1hdGguUEkgKyBkZWx0YVQ7XG4gICAgICBsZXQgeCA9IHIgKiBNYXRoLnNpbih0KSArIHJhbmRVbmlmb3JtKC0xLCAxKSAqIG5vaXNlO1xuICAgICAgbGV0IHkgPSByICogTWF0aC5jb3ModCkgKyByYW5kVW5pZm9ybSgtMSwgMSkgKiBub2lzZTtcbiAgICAgIHBvaW50cy5wdXNoKHt4OiB4LCB5OiB5LCBsYWJlbDogbGFiZWx9KTtcbiAgICB9XG4gIH1cblxuICBnZW5TcGlyYWwoMCwgMSk7IC8vIFBvc2l0aXZlIGV4YW1wbGVzLlxuICBnZW5TcGlyYWwoTWF0aC5QSSwgLTEpOyAvLyBOZWdhdGl2ZSBleGFtcGxlcy5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Q2lyY2xlRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgbGV0IHJhZGl1cyA9IDU7XG4gIGZ1bmN0aW9uIGdldENpcmNsZUxhYmVsKHA6IFBvaW50LCBjZW50ZXI6IFBvaW50KSB7XG4gICAgcmV0dXJuIChkaXN0KHAsIGNlbnRlcikgPCAocmFkaXVzICogMC41KSkgPyAxIDogLTE7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBwb3NpdGl2ZSBwb2ludHMgaW5zaWRlIHRoZSBjaXJjbGUuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlcyAvIDI7IGkrKykge1xuICAgIGxldCByID0gcmFuZFVuaWZvcm0oMCwgcmFkaXVzICogMC41KTtcbiAgICBsZXQgYW5nbGUgPSByYW5kVW5pZm9ybSgwLCAyICogTWF0aC5QSSk7XG4gICAgbGV0IHggPSByICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCB5ID0gciAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0Q2lyY2xlTGFiZWwoe3g6IHggKyBub2lzZVgsIHk6IHkgKyBub2lzZVl9LCB7eDogMCwgeTogMH0pO1xuICAgIHBvaW50cy5wdXNoKHt4OiB4LCB5OiB5LCBsYWJlbDogbGFiZWx9KTtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIG5lZ2F0aXZlIHBvaW50cyBvdXRzaWRlIHRoZSBjaXJjbGUuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlcyAvIDI7IGkrKykge1xuICAgIGxldCByID0gcmFuZFVuaWZvcm0ocmFkaXVzICogMC43LCByYWRpdXMpO1xuICAgIGxldCBhbmdsZSA9IHJhbmRVbmlmb3JtKDAsIDIgKiBNYXRoLlBJKTtcbiAgICBsZXQgeCA9IHIgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgbGV0IHkgPSByICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRDaXJjbGVMYWJlbCh7eDogeCArIG5vaXNlWCwgeTogeSArIG5vaXNlWX0sIHt4OiAwLCB5OiAwfSk7XG4gICAgcG9pbnRzLnB1c2goe3g6IHgsIHk6IHksIGxhYmVsOiBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeVhPUkRhdGEobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGZ1bmN0aW9uIGdldFhPUkxhYmVsKHA6IFBvaW50KSB7IHJldHVybiBwLnggKiBwLnkgPj0gMCA/IDEgOiAtMTsgfVxuXG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlczsgaSsrKSB7XG4gICAgbGV0IHggPSByYW5kVW5pZm9ybSgtNSwgNSk7XG4gICAgbGV0IHBhZGRpbmcgPSAwLjM7XG4gICAgeCArPSB4ID4gMCA/IHBhZGRpbmcgOiAtcGFkZGluZzsgIC8vIFBhZGRpbmcuXG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtNSwgNSk7XG4gICAgeSArPSB5ID4gMCA/IHBhZGRpbmcgOiAtcGFkZGluZztcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLTUsIDUpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC01LCA1KSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldFhPUkxhYmVsKHt4OiB4ICsgbm9pc2VYLCB5OiB5ICsgbm9pc2VZfSk7XG4gICAgcG9pbnRzLnB1c2goe3g6IHgsIHk6IHksIGxhYmVsOiBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNhbXBsZSBmcm9tIGEgdW5pZm9ybSBbYSwgYl0gZGlzdHJpYnV0aW9uLlxuICogVXNlcyB0aGUgc2VlZHJhbmRvbSBsaWJyYXJ5IGFzIHRoZSByYW5kb20gZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiByYW5kVW5pZm9ybShhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChiIC0gYSkgKyBhO1xufVxuXG4vKipcbiAqIFNhbXBsZXMgZnJvbSBhIG5vcm1hbCBkaXN0cmlidXRpb24uIFVzZXMgdGhlIHNlZWRyYW5kb20gbGlicmFyeSBhcyB0aGVcbiAqIHJhbmRvbSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIG1lYW4gVGhlIG1lYW4uIERlZmF1bHQgaXMgMC5cbiAqIEBwYXJhbSB2YXJpYW5jZSBUaGUgdmFyaWFuY2UuIERlZmF1bHQgaXMgMS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsUmFuZG9tKG1lYW4gPSAwLCB2YXJpYW5jZSA9IDEpOiBudW1iZXIge1xuICBsZXQgdjE6IG51bWJlciwgdjI6IG51bWJlciwgczogbnVtYmVyO1xuICBkbyB7XG4gICAgdjEgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgdjIgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgcyA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzID4gMSk7XG5cbiAgbGV0IHJlc3VsdCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB2MTtcbiAgcmV0dXJuIG1lYW4gKyBNYXRoLnNxcnQodmFyaWFuY2UpICogcmVzdWx0O1xufVxuXG4vKiogUmV0dXJucyB0aGUgZXVjbGVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cyBpbiBzcGFjZS4gKi9cbmZ1bmN0aW9uIGRpc3QoYTogUG9pbnQsIGI6IFBvaW50KTogbnVtYmVyIHtcbiAgbGV0IGR4ID0gYS54IC0gYi54O1xuICBsZXQgZHkgPSBhLnkgLSBiLnk7XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQge0V4YW1wbGUyRH0gZnJvbSBcIi4vZGF0YXNldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRNYXBTZXR0aW5ncyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgc2hvd0F4ZXM/OiBib29sZWFuO1xuICBub1N2Zz86IGJvb2xlYW47XG59XG5cbi8qKiBOdW1iZXIgb2YgZGlmZmVyZW50IHNoYWRlcyAoY29sb3JzKSB3aGVuIGRyYXdpbmcgYSBncmFkaWVudCBoZWF0bWFwICovXG5jb25zdCBOVU1fU0hBREVTID0gMzA7XG5cbi8qKlxuICogRHJhd3MgYSBoZWF0bWFwIHVzaW5nIGNhbnZhcy4gVXNlZCBmb3Igc2hvd2luZyB0aGUgbGVhcm5lZCBkZWNpc2lvblxuICogYm91bmRhcnkgb2YgdGhlIGNsYXNzaWZpY2F0aW9uIGFsZ29yaXRobS4gQ2FuIGFsc28gZHJhdyBkYXRhIHBvaW50c1xuICogdXNpbmcgYW4gc3ZnIG92ZXJsYXllZCBvbiB0b3Agb2YgdGhlIGNhbnZhcyBoZWF0bWFwLlxuICovXG5leHBvcnQgY2xhc3MgSGVhdE1hcCB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IEhlYXRNYXBTZXR0aW5ncyA9IHtcbiAgICBzaG93QXhlczogZmFsc2UsXG4gICAgbm9Tdmc6IGZhbHNlXG4gIH07XG4gIHByaXZhdGUgeFNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHlTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSBudW1TYW1wbGVzOiBudW1iZXI7XG4gIHByaXZhdGUgY29sb3I6IGQzLnNjYWxlLlF1YW50aXplPHN0cmluZz47XG4gIHByaXZhdGUgY2FudmFzOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSBzdmc6IGQzLlNlbGVjdGlvbjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgd2lkdGg6IG51bWJlciwgbnVtU2FtcGxlczogbnVtYmVyLCB4RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgeURvbWFpbjogW251bWJlciwgbnVtYmVyXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICAgIHVzZXJTZXR0aW5ncz86IEhlYXRNYXBTZXR0aW5ncykge1xuICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoO1xuICAgIGxldCBwYWRkaW5nID0gdXNlclNldHRpbmdzLnNob3dBeGVzID8gMjAgOiAwO1xuXG4gICAgaWYgKHVzZXJTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHRzIHdpdGggdGhlIHVzZXItc3BlY2lmaWVkIHNldHRpbmdzLlxuICAgICAgZm9yIChsZXQgcHJvcCBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1twcm9wXSA9IHVzZXJTZXR0aW5nc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKHhEb21haW4pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gMiAqIHBhZGRpbmddKTtcblxuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oeURvbWFpbilcbiAgICAgIC5yYW5nZShbaGVpZ2h0IC0gMiAqIHBhZGRpbmcsIDBdKTtcblxuICAgIC8vIEdldCBhIHJhbmdlIG9mIGNvbG9ycy5cbiAgICBsZXQgdG1wU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nLCBzdHJpbmc+KClcbiAgICAgICAgLmRvbWFpbihbMCwgLjUsIDFdKVxuICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAuY2xhbXAodHJ1ZSk7XG4gICAgLy8gRHVlIHRvIG51bWVyaWNhbCBlcnJvciwgd2UgbmVlZCB0byBzcGVjaWZ5XG4gICAgLy8gZDMucmFuZ2UoMCwgZW5kICsgc21hbGxfZXBzaWxvbiwgc3RlcClcbiAgICAvLyBpbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB3ZSB3aWxsIGhhdmUgZW5kL3N0ZXAgZW50cmllcyB3aXRoXG4gICAgLy8gdGhlIGxhc3QgZWxlbWVudCBiZWluZyBlcXVhbCB0byBlbmQuXG4gICAgbGV0IGNvbG9ycyA9IGQzLnJhbmdlKDAsIDEgKyAxRS05LCAxIC8gTlVNX1NIQURFUykubWFwKGEgPT4ge1xuICAgICAgcmV0dXJuIHRtcFNjYWxlKGEpO1xuICAgIH0pO1xuICAgIHRoaXMuY29sb3IgPSBkMy5zY2FsZS5xdWFudGl6ZTxzdHJpbmc+KClcbiAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWy0xLCAxXSlcbiAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShjb2xvcnMpO1xuXG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB0b3A6IGAtJHtwYWRkaW5nfXB4YCxcbiAgICAgICAgbGVmdDogYC0ke3BhZGRpbmd9cHhgXG4gICAgICB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IGNvbnRhaW5lci5hcHBlbmQoXCJjYW52YXNcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgbnVtU2FtcGxlcylcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG51bVNhbXBsZXMpXG4gICAgICAuc3R5bGUoXCJ3aWR0aFwiLCAod2lkdGggLSAyICogcGFkZGluZykgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgKGhlaWdodCAtIDIgKiBwYWRkaW5nKSArIFwicHhcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtwYWRkaW5nfXB4YClcbiAgICAgIC5zdHlsZShcImxlZnRcIiwgYCR7cGFkZGluZ31weGApO1xuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm5vU3ZnKSB7XG4gICAgICB0aGlzLnN2ZyA9IGNvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cih7XG4gICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgICBcImhlaWdodFwiOiBoZWlnaHRcbiAgICAgIH0pLnN0eWxlKHtcbiAgICAgICAgLy8gT3ZlcmxheSB0aGUgc3ZnIG9uIHRvcCBvZiB0aGUgY2FudmFzLlxuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgICAgICBcInRvcFwiOiBcIjBcIlxuICAgICAgfSkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcblxuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmFpblwiKTtcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93QXhlcykge1xuICAgICAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUodGhpcy54U2NhbGUpXG4gICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICAgIGxldCB5QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAgICAgLnNjYWxlKHRoaXMueVNjYWxlKVxuICAgICAgICAub3JpZW50KFwicmlnaHRcIik7XG5cbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSAyICogcGFkZGluZ30pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAod2lkdGggLSAyICogcGFkZGluZykgKyBcIiwwKVwiKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVzdFBvaW50cyhwb2ludHM6IEV4YW1wbGUyRFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mubm9TdmcpIHtcbiAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgYWRkIHBvaW50cyBzaW5jZSBub1N2Zz10cnVlXCIpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNpcmNsZXModGhpcy5zdmcuc2VsZWN0KFwiZy50ZXN0XCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlUG9pbnRzKHBvaW50czogRXhhbXBsZTJEW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5ub1N2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBhZGQgcG9pbnRzIHNpbmNlIG5vU3ZnPXRydWVcIik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2lyY2xlcyh0aGlzLnN2Zy5zZWxlY3QoXCJnLnRyYWluXCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlQmFja2dyb3VuZChkYXRhOiBudW1iZXJbXVtdLCBkaXNjcmV0aXplOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGR4ID0gZGF0YVswXS5sZW5ndGg7XG4gICAgbGV0IGR5ID0gZGF0YS5sZW5ndGg7XG5cbiAgICBpZiAoZHggIT09IHRoaXMubnVtU2FtcGxlcyB8fCBkeSAhPT0gdGhpcy5udW1TYW1wbGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgcHJvdmlkZWQgZGF0YSBtYXRyaXggbXVzdCBiZSBvZiBzaXplIFwiICtcbiAgICAgICAgICBcIm51bVNhbXBsZXMgWCBudW1TYW1wbGVzXCIpO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgdGhlIHBpeGVsIGNvbG9yczsgc2NhbGVkIGJ5IENTUy5cbiAgICBsZXQgY29udGV4dCA9ICg8SFRNTENhbnZhc0VsZW1lbnQ+dGhpcy5jYW52YXMubm9kZSgpKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGltYWdlID0gY29udGV4dC5jcmVhdGVJbWFnZURhdGEoZHgsIGR5KTtcblxuICAgIGZvciAobGV0IHkgPSAwLCBwID0gLTE7IHkgPCBkeTsgKyt5KSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGR4OyArK3gpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVt4XVt5XTtcbiAgICAgICAgaWYgKGRpc2NyZXRpemUpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA+PSAwID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYyA9IGQzLnJnYih0aGlzLmNvbG9yKHZhbHVlKSk7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IGMucjtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gYy5nO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSBjLmI7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IDE2MDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2UsIDAsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaXJjbGVzKGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4sIHBvaW50czogRXhhbXBsZTJEW10pIHtcbiAgICAvLyBLZWVwIG9ubHkgcG9pbnRzIHRoYXQgYXJlIGluc2lkZSB0aGUgYm91bmRzLlxuICAgIGxldCB4RG9tYWluID0gdGhpcy54U2NhbGUuZG9tYWluKCk7XG4gICAgbGV0IHlEb21haW4gPSB0aGlzLnlTY2FsZS5kb21haW4oKTtcbiAgICBwb2ludHMgPSBwb2ludHMuZmlsdGVyKHAgPT4ge1xuICAgICAgcmV0dXJuIHAueCA+PSB4RG9tYWluWzBdICYmIHAueCA8PSB4RG9tYWluWzFdXG4gICAgICAgICYmIHAueSA+PSB5RG9tYWluWzBdICYmIHAueSA8PSB5RG9tYWluWzFdO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGRhdGEgdG8gaW5pdGlhbGx5IGVtcHR5IHNlbGVjdGlvbi5cbiAgICBsZXQgc2VsZWN0aW9uID0gY29udGFpbmVyLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKHBvaW50cyk7XG5cbiAgICAvLyBJbnNlcnQgZWxlbWVudHMgdG8gbWF0Y2ggbGVuZ3RoIG9mIHBvaW50cyBhcnJheS5cbiAgICBzZWxlY3Rpb24uZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgMyk7XG5cbiAgICAvLyBVcGRhdGUgcG9pbnRzIHRvIGJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLlxuICAgIHNlbGVjdGlvblxuICAgICAgLmF0dHIoe1xuICAgICAgICBjeDogKGQ6IEV4YW1wbGUyRCkgPT4gdGhpcy54U2NhbGUoZC54KSxcbiAgICAgICAgY3k6IChkOiBFeGFtcGxlMkQpID0+IHRoaXMueVNjYWxlKGQueSksXG4gICAgICB9KVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHRoaXMuY29sb3IoZC5sYWJlbCkpO1xuXG4gICAgLy8gUmVtb3ZlIHBvaW50cyBpZiB0aGUgbGVuZ3RoIGhhcyBnb25lIGRvd24uXG4gICAgc2VsZWN0aW9uLmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufSAgLy8gQ2xvc2UgY2xhc3MgSGVhdE1hcC5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZU1hdHJpeChtYXRyaXg6IG51bWJlcltdW10sIGZhY3RvcjogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGlmIChtYXRyaXgubGVuZ3RoICE9PSBtYXRyaXhbMF0ubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3ZpZGVkIG1hdHJpeCBtdXN0IGJlIGEgc3F1YXJlIG1hdHJpeFwiKTtcbiAgfVxuICBpZiAobWF0cml4Lmxlbmd0aCAlIGZhY3RvciAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB3aWR0aC9oZWlnaHQgb2YgdGhlIG1hdHJpeCBtdXN0IGJlIGRpdmlzaWJsZSBieSBcIiArXG4gICAgICAgIFwidGhlIHJlZHVjdGlvbiBmYWN0b3JcIik7XG4gIH1cbiAgbGV0IHJlc3VsdDogbnVtYmVyW11bXSA9IG5ldyBBcnJheShtYXRyaXgubGVuZ3RoIC8gZmFjdG9yKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpICs9IGZhY3Rvcikge1xuICAgIHJlc3VsdFtpIC8gZmFjdG9yXSA9IG5ldyBBcnJheShtYXRyaXgubGVuZ3RoIC8gZmFjdG9yKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5sZW5ndGg7IGogKz0gZmFjdG9yKSB7XG4gICAgICBsZXQgYXZnID0gMDtcbiAgICAgIC8vIFN1bSBhbGwgdGhlIHZhbHVlcyBpbiB0aGUgbmVpZ2hib3Job29kLlxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBmYWN0b3I7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGZhY3RvcjsgbCsrKSB7XG4gICAgICAgICAgYXZnICs9IG1hdHJpeFtpICsga11baiArIGxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdmcgLz0gKGZhY3RvciAqIGZhY3Rvcik7XG4gICAgICByZXN1bHRbaSAvIGZhY3Rvcl1baiAvIGZhY3Rvcl0gPSBhdmc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG50eXBlIERhdGFQb2ludCA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXJbXTtcbn1cblxuLyoqXG4gKiBBIG11bHRpLXNlcmllcyBsaW5lIGNoYXJ0IHRoYXQgYWxsb3dzIHlvdSB0byBhcHBlbmQgbmV3IGRhdGEgcG9pbnRzXG4gKiBhcyBkYXRhIGJlY29tZXMgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQXBwZW5kaW5nTGluZUNoYXJ0IHtcbiAgcHJpdmF0ZSBudW1MaW5lczogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFQb2ludFtdID0gW107XG4gIHByaXZhdGUgc3ZnOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSB4U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgeVNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHBhdGhzOiBkMy5TZWxlY3Rpb248YW55PltdO1xuICBwcml2YXRlIGxpbmVDb2xvcnM6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgbWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gIHByaXZhdGUgbWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PiwgbGluZUNvbG9yczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmxpbmVDb2xvcnMgPSBsaW5lQ29sb3JzO1xuICAgIHRoaXMubnVtTGluZXMgPSBsaW5lQ29sb3JzLmxlbmd0aDtcbiAgICBsZXQgbm9kZSA9IDxIVE1MRWxlbWVudD5jb250YWluZXIubm9kZSgpO1xuICAgIGxldCB0b3RhbFdpZHRoID0gbm9kZS5vZmZzZXRXaWR0aDtcbiAgICBsZXQgdG90YWxIZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBsZXQgbWFyZ2luID0ge3RvcDogMiwgcmlnaHQ6IDAsIGJvdHRvbTogMiwgbGVmdDogMn07XG4gICAgbGV0IHdpZHRoID0gdG90YWxXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGxldCBoZWlnaHQgPSB0b3RhbEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMF0pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAwXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICB0aGlzLnN2ZyA9IGNvbnRhaW5lci5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgdGhpcy5wYXRocyA9IG5ldyBBcnJheSh0aGlzLm51bUxpbmVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtTGluZXM7IGkrKykge1xuICAgICAgdGhpcy5wYXRoc1tpXSA9IHRoaXMuc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgLnN0eWxlKHtcbiAgICAgICAgICBcImZpbGxcIjogXCJub25lXCIsXG4gICAgICAgICAgXCJzdHJva2VcIjogbGluZUNvbG9yc1tpXSxcbiAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjEuNXB4XCJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgICB0aGlzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gIH1cblxuICBhZGREYXRhUG9pbnQoZGF0YVBvaW50OiBudW1iZXJbXSkge1xuICAgIGlmIChkYXRhUG9pbnQubGVuZ3RoICE9PSB0aGlzLm51bUxpbmVzKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBkYXRhUG9pbnQgbXVzdCBlcXVhbCBudW1iZXIgb2YgbGluZXNcIik7XG4gICAgfVxuICAgIGRhdGFQb2ludC5mb3JFYWNoKHkgPT4ge1xuICAgICAgdGhpcy5taW5ZID0gTWF0aC5taW4odGhpcy5taW5ZLCB5KTtcbiAgICAgIHRoaXMubWF4WSA9IE1hdGgubWF4KHRoaXMubWF4WSwgeSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGEucHVzaCh7eDogdGhpcy5kYXRhLmxlbmd0aCArIDEsIHk6IGRhdGFQb2ludH0pO1xuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIHJlZHJhdygpIHtcbiAgICAvLyBBZGp1c3QgdGhlIHggYW5kIHkgZG9tYWluLlxuICAgIHRoaXMueFNjYWxlLmRvbWFpbihbMSwgdGhpcy5kYXRhLmxlbmd0aF0pO1xuICAgIHRoaXMueVNjYWxlLmRvbWFpbihbdGhpcy5taW5ZLCB0aGlzLm1heFldKTtcbiAgICAvLyBBZGp1c3QgYWxsIHRoZSA8cGF0aD4gZWxlbWVudHMgKGxpbmVzKS5cbiAgICBsZXQgZ2V0UGF0aE1hcCA9IChsaW5lSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIGQzLnN2Zy5saW5lPERhdGFQb2ludD4oKVxuICAgICAgLngoZCA9PiB0aGlzLnhTY2FsZShkLngpKVxuICAgICAgLnkoZCA9PiB0aGlzLnlTY2FsZShkLnlbbGluZUluZGV4XSkpO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpbmVzOyBpKyspIHtcbiAgICAgIHRoaXMucGF0aHNbaV0uZGF0dW0odGhpcy5kYXRhKS5hdHRyKFwiZFwiLCBnZXRQYXRoTWFwKGkpKTtcbiAgICB9XG4gIH1cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qKlxuICogQSBub2RlIGluIGEgbmV1cmFsIG5ldHdvcmsuIEVhY2ggbm9kZSBoYXMgYSBzdGF0ZVxuICogKHRvdGFsIGlucHV0LCBvdXRwdXQsIGFuZCB0aGVpciByZXNwZWN0aXZlbHkgZGVyaXZhdGl2ZXMpIHdoaWNoIGNoYW5nZXNcbiAqIGFmdGVyIGV2ZXJ5IGZvcndhcmQgYW5kIGJhY2sgcHJvcGFnYXRpb24gcnVuLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBMaXN0IG9mIGlucHV0IGxpbmtzLiAqL1xuICBpbnB1dExpbmtzOiBMaW5rW10gPSBbXTtcbiAgYmlhcyA9IDAuMTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IGxpbmtzLiAqL1xuICBvdXRwdXRzOiBMaW5rW10gPSBbXTtcbiAgdG90YWxJbnB1dDogbnVtYmVyO1xuICBvdXRwdXQ6IG51bWJlcjtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIG91dHB1dC4gKi9cbiAgb3V0cHV0RGVyID0gMDtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIHRvdGFsIGlucHV0LiAqL1xuICBpbnB1dERlciA9IDA7XG4gIC8qKlxuICAgKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIG5vZGUncyB0b3RhbCBpbnB1dCBzaW5jZVxuICAgKiB0aGUgbGFzdCB1cGRhdGUuIFRoaXMgZGVyaXZhdGl2ZSBlcXVhbHMgZEUvZGIgd2hlcmUgYiBpcyB0aGUgbm9kZSdzXG4gICAqIGJpYXMgdGVybS5cbiAgICovXG4gIGFjY0lucHV0RGVyID0gMDtcbiAgLyoqXG4gICAqIE51bWJlciBvZiBhY2N1bXVsYXRlZCBlcnIuIGRlcml2YXRpdmVzIHdpdGggcmVzcGVjdCB0byB0aGUgdG90YWwgaW5wdXRcbiAgICogc2luY2UgdGhlIGxhc3QgdXBkYXRlLlxuICAgKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgLyoqIEFjdGl2YXRpb24gZnVuY3Rpb24gdGhhdCB0YWtlcyB0b3RhbCBpbnB1dCBhbmQgcmV0dXJucyBub2RlJ3Mgb3V0cHV0ICovXG4gIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIGlkIGFuZCBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uLCBpbml0WmVybz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMuYmlhcyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlY29tcHV0ZXMgdGhlIG5vZGUncyBvdXRwdXQgYW5kIHJldHVybnMgaXQuICovXG4gIHVwZGF0ZU91dHB1dCgpOiBudW1iZXIge1xuICAgIC8vIFN0b3JlcyB0b3RhbCBpbnB1dCBpbnRvIHRoZSBub2RlLlxuICAgIHRoaXMudG90YWxJbnB1dCA9IHRoaXMuYmlhcztcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmsgPSB0aGlzLmlucHV0TGlua3Nbal07XG4gICAgICB0aGlzLnRvdGFsSW5wdXQgKz0gbGluay53ZWlnaHQgKiBsaW5rLnNvdXJjZS5vdXRwdXQ7XG4gICAgfVxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5hY3RpdmF0aW9uLm91dHB1dCh0aGlzLnRvdGFsSW5wdXQpO1xuICAgIHJldHVybiB0aGlzLm91dHB1dDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcnJvckZ1bmN0aW9uIHtcbiAgZXJyb3I6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+IG51bWJlcjtcbiAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBBIG5vZGUncyBhY3RpdmF0aW9uIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZhdGlvbkZ1bmN0aW9uIHtcbiAgb3V0cHV0OiAoaW5wdXQ6IG51bWJlcikgPT4gbnVtYmVyO1xuICBkZXI6IChpbnB1dDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBGdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGEgcGVuYWx0eSBjb3N0IGZvciBhIGdpdmVuIHdlaWdodCBpbiB0aGUgbmV0d29yay4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVndWxhcml6YXRpb25GdW5jdGlvbiB7XG4gIG91dHB1dDogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGRlcjogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBCdWlsdC1pbiBlcnJvciBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBFcnJvcnMge1xuICBwdWJsaWMgc3RhdGljIFNRVUFSRTogRXJyb3JGdW5jdGlvbiA9IHtcbiAgICBlcnJvcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgIDAuNSAqIE1hdGgucG93KG91dHB1dCAtIHRhcmdldCwgMiksXG4gICAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBvdXRwdXQgLSB0YXJnZXRcbiAgfTtcbn1cblxuLyoqIFBvbHlmaWxsIGZvciBUQU5IICovXG4oPGFueT5NYXRoKS50YW5oID0gKDxhbnk+TWF0aCkudGFuaCB8fCBmdW5jdGlvbih4KSB7XG4gIGlmICh4ID09PSBJbmZpbml0eSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHggPT09IC1JbmZpbml0eSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZTJ4ID0gTWF0aC5leHAoMiAqIHgpO1xuICAgIHJldHVybiAoZTJ4IC0gMSkgLyAoZTJ4ICsgMSk7XG4gIH1cbn07XG5cbi8qKiBCdWlsdC1pbiBhY3RpdmF0aW9uIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIEFjdGl2YXRpb25zIHtcbiAgcHVibGljIHN0YXRpYyBUQU5IOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+ICg8YW55Pk1hdGgpLnRhbmgoeCksXG4gICAgZGVyOiB4ID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBBY3RpdmF0aW9ucy5UQU5ILm91dHB1dCh4KTtcbiAgICAgIHJldHVybiAxIC0gb3V0cHV0ICogb3V0cHV0O1xuICAgIH1cbiAgfTtcbiAgcHVibGljIHN0YXRpYyBSRUxVOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IE1hdGgubWF4KDAsIHgpLFxuICAgIGRlcjogeCA9PiB4IDw9IDAgPyAwIDogMVxuICB9O1xuICBwdWJsaWMgc3RhdGljIFNJR01PSUQ6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4gMSAvICgxICsgTWF0aC5leHAoLXgpKSxcbiAgICBkZXI6IHggPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IEFjdGl2YXRpb25zLlNJR01PSUQub3V0cHV0KHgpO1xuICAgICAgcmV0dXJuIG91dHB1dCAqICgxIC0gb3V0cHV0KTtcbiAgICB9XG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgTElORUFSOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IHgsXG4gICAgZGVyOiB4ID0+IDFcbiAgfTtcbn1cblxuLyoqIEJ1aWxkLWluIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIEwxOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogdyA9PiBNYXRoLmFicyh3KSxcbiAgICBkZXI6IHcgPT4gdyA8IDAgPyAtMSA6IDFcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBMMjogUmVndWxhcml6YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHcgPT4gMC41ICogdyAqIHcsXG4gICAgZGVyOiB3ID0+IHdcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGxpbmsgaW4gYSBuZXVyYWwgbmV0d29yay4gRWFjaCBsaW5rIGhhcyBhIHdlaWdodCBhbmQgYSBzb3VyY2UgYW5kXG4gKiBkZXN0aW5hdGlvbiBub2RlLiBBbHNvIGl0IGhhcyBhbiBpbnRlcm5hbCBzdGF0ZSAoZXJyb3IgZGVyaXZhdGl2ZVxuICogd2l0aCByZXNwZWN0IHRvIGEgcGFydGljdWxhciBpbnB1dCkgd2hpY2ggZ2V0cyB1cGRhdGVkIGFmdGVyXG4gKiBhIHJ1biBvZiBiYWNrIHByb3BhZ2F0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgTGluayB7XG4gIGlkOiBzdHJpbmc7XG4gIHNvdXJjZTogTm9kZTtcbiAgZGVzdDogTm9kZTtcbiAgd2VpZ2h0ID0gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgd2VpZ2h0LiAqL1xuICBlcnJvckRlciA9IDA7XG4gIC8qKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgYWNjRXJyb3JEZXIgPSAwO1xuICAvKiogTnVtYmVyIG9mIGFjY3VtdWxhdGVkIGRlcml2YXRpdmVzIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBsaW5rIGluIHRoZSBuZXVyYWwgbmV0d29yayBpbml0aWFsaXplZCB3aXRoIHJhbmRvbSB3ZWlnaHQuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBub2RlLlxuICAgKiBAcGFyYW0gZGVzdCBUaGUgZGVzdGluYXRpb24gbm9kZS5cbiAgICogQHBhcmFtIHJlZ3VsYXJpemF0aW9uIFRoZSByZWd1bGFyaXphdGlvbiBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZVxuICAgKiAgICAgcGVuYWx0eSBmb3IgdGhpcyB3ZWlnaHQuIElmIG51bGwsIHRoZXJlIHdpbGwgYmUgbm8gcmVndWxhcml6YXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE5vZGUsIGRlc3Q6IE5vZGUsXG4gICAgICByZWd1bGFyaXphdGlvbjogUmVndWxhcml6YXRpb25GdW5jdGlvbiwgaW5pdFplcm8/OiBib29sZWFuKSB7XG4gICAgdGhpcy5pZCA9IHNvdXJjZS5pZCArIFwiLVwiICsgZGVzdC5pZDtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmRlc3QgPSBkZXN0O1xuICAgIHRoaXMucmVndWxhcml6YXRpb24gPSByZWd1bGFyaXphdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMud2VpZ2h0ID0gMDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBuZXVyYWwgbmV0d29yay5cbiAqXG4gKiBAcGFyYW0gbmV0d29ya1NoYXBlIFRoZSBzaGFwZSBvZiB0aGUgbmV0d29yay4gRS5nLiBbMSwgMiwgMywgMV0gbWVhbnNcbiAqICAgdGhlIG5ldHdvcmsgd2lsbCBoYXZlIG9uZSBpbnB1dCBub2RlLCAyIG5vZGVzIGluIGZpcnN0IGhpZGRlbiBsYXllcixcbiAqICAgMyBub2RlcyBpbiBzZWNvbmQgaGlkZGVuIGxheWVyIGFuZCAxIG91dHB1dCBub2RlLlxuICogQHBhcmFtIGFjdGl2YXRpb24gVGhlIGFjdGl2YXRpb24gZnVuY3Rpb24gb2YgZXZlcnkgaGlkZGVuIG5vZGUuXG4gKiBAcGFyYW0gb3V0cHV0QWN0aXZhdGlvbiBUaGUgYWN0aXZhdGlvbiBmdW5jdGlvbiBmb3IgdGhlIG91dHB1dCBub2Rlcy5cbiAqIEBwYXJhbSByZWd1bGFyaXphdGlvbiBUaGUgcmVndWxhcml6YXRpb24gZnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhIHBlbmFsdHlcbiAqICAgICBmb3IgYSBnaXZlbiB3ZWlnaHQgKHBhcmFtZXRlcikgaW4gdGhlIG5ldHdvcmsuIElmIG51bGwsIHRoZXJlIHdpbGwgYmVcbiAqICAgICBubyByZWd1bGFyaXphdGlvbi5cbiAqIEBwYXJhbSBpbnB1dElkcyBMaXN0IG9mIGlkcyBmb3IgdGhlIGlucHV0IG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROZXR3b3JrKFxuICAgIG5ldHdvcmtTaGFwZTogbnVtYmVyW10sIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbixcbiAgICBvdXRwdXRBY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb24sXG4gICAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24sXG4gICAgaW5wdXRJZHM6IHN0cmluZ1tdLCBpbml0WmVybz86IGJvb2xlYW4pOiBOb2RlW11bXSB7XG4gIGxldCBudW1MYXllcnMgPSBuZXR3b3JrU2hhcGUubGVuZ3RoO1xuICBsZXQgaWQgPSAxO1xuICAvKiogTGlzdCBvZiBsYXllcnMsIHdpdGggZWFjaCBsYXllciBiZWluZyBhIGxpc3Qgb2Ygbm9kZXMuICovXG4gIGxldCBuZXR3b3JrOiBOb2RlW11bXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbnVtTGF5ZXJzOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGlzT3V0cHV0TGF5ZXIgPSBsYXllcklkeCA9PT0gbnVtTGF5ZXJzIC0gMTtcbiAgICBsZXQgaXNJbnB1dExheWVyID0gbGF5ZXJJZHggPT09IDA7XG4gICAgbGV0IGN1cnJlbnRMYXllcjogTm9kZVtdID0gW107XG4gICAgbmV0d29yay5wdXNoKGN1cnJlbnRMYXllcik7XG4gICAgbGV0IG51bU5vZGVzID0gbmV0d29ya1NoYXBlW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgIGxldCBub2RlSWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgaWYgKGlzSW5wdXRMYXllcikge1xuICAgICAgICBub2RlSWQgPSBpbnB1dElkc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkKys7XG4gICAgICB9XG4gICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKG5vZGVJZCxcbiAgICAgICAgICBpc091dHB1dExheWVyID8gb3V0cHV0QWN0aXZhdGlvbiA6IGFjdGl2YXRpb24sIGluaXRaZXJvKTtcbiAgICAgIGN1cnJlbnRMYXllci5wdXNoKG5vZGUpO1xuICAgICAgaWYgKGxheWVySWR4ID49IDEpIHtcbiAgICAgICAgLy8gQWRkIGxpbmtzIGZyb20gbm9kZXMgaW4gdGhlIHByZXZpb3VzIGxheWVyIHRvIHRoaXMgbm9kZS5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXR3b3JrW2xheWVySWR4IC0gMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcHJldk5vZGUgPSBuZXR3b3JrW2xheWVySWR4IC0gMV1bal07XG4gICAgICAgICAgbGV0IGxpbmsgPSBuZXcgTGluayhwcmV2Tm9kZSwgbm9kZSwgcmVndWxhcml6YXRpb24sIGluaXRaZXJvKTtcbiAgICAgICAgICBwcmV2Tm9kZS5vdXRwdXRzLnB1c2gobGluayk7XG4gICAgICAgICAgbm9kZS5pbnB1dExpbmtzLnB1c2gobGluayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldHdvcms7XG59XG5cbi8qKlxuICogUnVucyBhIGZvcndhcmQgcHJvcGFnYXRpb24gb2YgdGhlIHByb3ZpZGVkIGlucHV0IHRocm91Z2ggdGhlIHByb3ZpZGVkXG4gKiBuZXR3b3JrLiBUaGlzIG1ldGhvZCBtb2RpZmllcyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIG5ldHdvcmsgLSB0aGVcbiAqIHRvdGFsIGlucHV0IGFuZCBvdXRwdXQgb2YgZWFjaCBub2RlIGluIHRoZSBuZXR3b3JrLlxuICpcbiAqIEBwYXJhbSBuZXR3b3JrIFRoZSBuZXVyYWwgbmV0d29yay5cbiAqIEBwYXJhbSBpbnB1dHMgVGhlIGlucHV0IGFycmF5LiBJdHMgbGVuZ3RoIHNob3VsZCBtYXRjaCB0aGUgbnVtYmVyIG9mIGlucHV0XG4gKiAgICAgbm9kZXMgaW4gdGhlIG5ldHdvcmsuXG4gKiBAcmV0dXJuIFRoZSBmaW5hbCBvdXRwdXQgb2YgdGhlIG5ldHdvcmsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUHJvcChuZXR3b3JrOiBOb2RlW11bXSwgaW5wdXRzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGxldCBpbnB1dExheWVyID0gbmV0d29ya1swXTtcbiAgaWYgKGlucHV0cy5sZW5ndGggIT09IGlucHV0TGF5ZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG51bWJlciBvZiBpbnB1dHMgbXVzdCBtYXRjaCB0aGUgbnVtYmVyIG9mIG5vZGVzIGluXCIgK1xuICAgICAgICBcIiB0aGUgaW5wdXQgbGF5ZXJcIik7XG4gIH1cbiAgLy8gVXBkYXRlIHRoZSBpbnB1dCBsYXllci5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBpbnB1dExheWVyW2ldO1xuICAgIG5vZGUub3V0cHV0ID0gaW5wdXRzW2ldO1xuICB9XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBVcGRhdGUgYWxsIHRoZSBub2RlcyBpbiB0aGlzIGxheWVyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIG5vZGUudXBkYXRlT3V0cHV0KCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF0ub3V0cHV0O1xufVxuXG4vKipcbiAqIFJ1bnMgYSBiYWNrd2FyZCBwcm9wYWdhdGlvbiB1c2luZyB0aGUgcHJvdmlkZWQgdGFyZ2V0IGFuZCB0aGVcbiAqIGNvbXB1dGVkIG91dHB1dCBvZiB0aGUgcHJldmlvdXMgY2FsbCB0byBmb3J3YXJkIHByb3BhZ2F0aW9uLlxuICogVGhpcyBtZXRob2QgbW9kaWZpZXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBuZXR3b3JrIC0gdGhlIGVycm9yXG4gKiBkZXJpdmF0aXZlcyB3aXRoIHJlc3BlY3QgdG8gZWFjaCBub2RlLCBhbmQgZWFjaCB3ZWlnaHRcbiAqIGluIHRoZSBuZXR3b3JrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja1Byb3AobmV0d29yazogTm9kZVtdW10sIHRhcmdldDogbnVtYmVyLFxuICAgIGVycm9yRnVuYzogRXJyb3JGdW5jdGlvbik6IHZvaWQge1xuICAvLyBUaGUgb3V0cHV0IG5vZGUgaXMgYSBzcGVjaWFsIGNhc2UuIFdlIHVzZSB0aGUgdXNlci1kZWZpbmVkIGVycm9yXG4gIC8vIGZ1bmN0aW9uIGZvciB0aGUgZGVyaXZhdGl2ZS5cbiAgbGV0IG91dHB1dE5vZGUgPSBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF07XG4gIG91dHB1dE5vZGUub3V0cHV0RGVyID0gZXJyb3JGdW5jLmRlcihvdXRwdXROb2RlLm91dHB1dCwgdGFyZ2V0KTtcblxuICAvLyBHbyB0aHJvdWdoIHRoZSBsYXllcnMgYmFja3dhcmRzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IG5ldHdvcmsubGVuZ3RoIC0gMTsgbGF5ZXJJZHggPj0gMTsgbGF5ZXJJZHgtLSkge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBDb21wdXRlIHRoZSBlcnJvciBkZXJpdmF0aXZlIG9mIGVhY2ggbm9kZSB3aXRoIHJlc3BlY3QgdG86XG4gICAgLy8gMSkgaXRzIHRvdGFsIGlucHV0XG4gICAgLy8gMikgZWFjaCBvZiBpdHMgaW5wdXQgd2VpZ2h0cy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBub2RlLmlucHV0RGVyID0gbm9kZS5vdXRwdXREZXIgKiBub2RlLmFjdGl2YXRpb24uZGVyKG5vZGUudG90YWxJbnB1dCk7XG4gICAgICBub2RlLmFjY0lucHV0RGVyICs9IG5vZGUuaW5wdXREZXI7XG4gICAgICBub2RlLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgIH1cblxuICAgIC8vIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggd2VpZ2h0IGNvbWluZyBpbnRvIHRoZSBub2RlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBsaW5rLmVycm9yRGVyID0gbm9kZS5pbnB1dERlciAqIGxpbmsuc291cmNlLm91dHB1dDtcbiAgICAgICAgbGluay5hY2NFcnJvckRlciArPSBsaW5rLmVycm9yRGVyO1xuICAgICAgICBsaW5rLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5ZXJJZHggPT09IDEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgcHJldkxheWVyID0gbmV0d29ya1tsYXllcklkeCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldkxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHByZXZMYXllcltpXTtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggbm9kZSdzIG91dHB1dC5cbiAgICAgIG5vZGUub3V0cHV0RGVyID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIG5vZGUub3V0cHV0RGVyICs9IG91dHB1dC53ZWlnaHQgKiBvdXRwdXQuZGVzdC5pbnB1dERlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSB3ZWlnaHRzIG9mIHRoZSBuZXR3b3JrIHVzaW5nIHRoZSBwcmV2aW91c2x5IGFjY3VtdWxhdGVkIGVycm9yXG4gKiBkZXJpdmF0aXZlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdlaWdodHMobmV0d29yazogTm9kZVtdW10sIGxlYXJuaW5nUmF0ZTogbnVtYmVyLFxuICAgIHJlZ3VsYXJpemF0aW9uUmF0ZTogbnVtYmVyKSB7XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGUncyBiaWFzLlxuICAgICAgaWYgKG5vZGUubnVtQWNjdW11bGF0ZWREZXJzID4gMCkge1xuICAgICAgICBub2RlLmJpYXMgLT0gbGVhcm5pbmdSYXRlICogbm9kZS5hY2NJbnB1dERlciAvIG5vZGUubnVtQWNjdW11bGF0ZWREZXJzO1xuICAgICAgICBub2RlLmFjY0lucHV0RGVyID0gMDtcbiAgICAgICAgbm9kZS5udW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSB3ZWlnaHRzIGNvbWluZyBpbnRvIHRoaXMgbm9kZS5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBsZXQgcmVndWxEZXIgPSBsaW5rLnJlZ3VsYXJpemF0aW9uID9cbiAgICAgICAgICAgIGxpbmsucmVndWxhcml6YXRpb24uZGVyKGxpbmsud2VpZ2h0KSA6IDA7XG4gICAgICAgIGlmIChsaW5rLm51bUFjY3VtdWxhdGVkRGVycyA+IDApIHtcbiAgICAgICAgICBsaW5rLndlaWdodCAtPSAobGVhcm5pbmdSYXRlIC8gbGluay5udW1BY2N1bXVsYXRlZERlcnMpICpcbiAgICAgICAgICAgIChsaW5rLmFjY0Vycm9yRGVyICsgcmVndWxhcml6YXRpb25SYXRlICogcmVndWxEZXIpO1xuICAgICAgICAgIGxpbmsuYWNjRXJyb3JEZXIgPSAwO1xuICAgICAgICAgIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiogSXRlcmF0ZXMgb3ZlciBldmVyeSBub2RlIGluIHRoZSBuZXR3b3JrLyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hOb2RlKG5ldHdvcms6IE5vZGVbXVtdLCBpZ25vcmVJbnB1dHM6IGJvb2xlYW4sXG4gICAgYWNjZXNzb3I6IChub2RlOiBOb2RlKSA9PiBhbnkpIHtcbiAgZm9yIChsZXQgbGF5ZXJJZHggPSBpZ25vcmVJbnB1dHMgPyAxIDogMDtcbiAgICAgIGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7XG4gICAgICBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGFjY2Vzc29yKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogUmV0dXJucyB0aGUgb3V0cHV0IG5vZGUgaW4gdGhlIG5ldHdvcmsuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0Tm9kZShuZXR3b3JrOiBOb2RlW11bXSkge1xuICByZXR1cm4gbmV0d29ya1tuZXR3b3JrLmxlbmd0aCAtIDFdWzBdO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInNlZWRyYW5kb20uZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzIG5uIGZyb20gXCIuL25uXCI7XG5pbXBvcnQge0hlYXRNYXAsIHJlZHVjZU1hdHJpeH0gZnJvbSBcIi4vaGVhdG1hcFwiO1xuaW1wb3J0IHtcbiAgU3RhdGUsXG4gIGRhdGFzZXRzLFxuICByZWdEYXRhc2V0cyxcbiAgYWN0aXZhdGlvbnMsXG4gIHByb2JsZW1zLFxuICByZWd1bGFyaXphdGlvbnMsXG4gIGdldEtleUZyb21WYWx1ZSxcbiAgUHJvYmxlbVxufSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHtFeGFtcGxlMkQsIHNodWZmbGV9IGZyb20gXCIuL2RhdGFzZXRcIjtcbmltcG9ydCB7QXBwZW5kaW5nTGluZUNoYXJ0fSBmcm9tIFwiLi9saW5lY2hhcnRcIjtcblxuaW1wb3J0ICogYXMgY29udGVudHMgZnJvbSBcIi4vYWRkaXRpb25hbGNvbnRlbnRcIjtcblxubGV0IG1haW5XaWR0aDtcblxuLy8gTW9yZSBzY3JvbGxpbmdcbmQzLnNlbGVjdChcIi5tb3JlIGJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgcG9zaXRpb24gPSA4MDA7XG4gIGQzLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC50d2VlbihcInNjcm9sbFwiLCBzY3JvbGxUd2Vlbihwb3NpdGlvbikpO1xufSk7XG5cbmZ1bmN0aW9uIHNjcm9sbFR3ZWVuKG9mZnNldCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZU51bWJlcih3aW5kb3cucGFnZVlPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkgeyBzY3JvbGxUbygwLCBpKHQpKTsgfTtcbiAgfTtcbn1cblxuY29uc3QgUkVDVF9TSVpFID0gMzA7XG5jb25zdCBCSUFTX1NJWkUgPSA1O1xuY29uc3QgTlVNX1NBTVBMRVNfQ0xBU1NJRlkgPSA1MDA7XG5jb25zdCBOVU1fU0FNUExFU19SRUdSRVNTID0gMTIwMDtcbmNvbnN0IERFTlNJVFkgPSAxMDA7XG5cbmVudW0gSG92ZXJUeXBlIHtcbiAgQklBUywgV0VJR0hUXG59XG5cbmludGVyZmFjZSBJbnB1dEZlYXR1cmUge1xuICBmOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcjtcbiAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbmxldCBJTlBVVFM6IHtbbmFtZTogc3RyaW5nXTogSW5wdXRGZWF0dXJlfSA9IHtcbiAgXCJ4XCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiWF8xXCJ9LFxuICBcInlcIjoge2Y6ICh4LCB5KSA9PiB5LCBsYWJlbDogXCJYXzJcIn0sXG4gIFwieFNxdWFyZWRcIjoge2Y6ICh4LCB5KSA9PiB4ICogeCwgbGFiZWw6IFwiWF8xXjJcIn0sXG4gIFwieVNxdWFyZWRcIjoge2Y6ICh4LCB5KSA9PiB5ICogeSwgIGxhYmVsOiBcIlhfMl4yXCJ9LFxuICBcInhUaW1lc1lcIjoge2Y6ICh4LCB5KSA9PiB4ICogeSwgbGFiZWw6IFwiWF8xWF8yXCJ9LFxuICBcInNpblhcIjoge2Y6ICh4LCB5KSA9PiBNYXRoLnNpbih4KSwgbGFiZWw6IFwic2luKFhfMSlcIn0sXG4gIFwic2luWVwiOiB7ZjogKHgsIHkpID0+IE1hdGguc2luKHkpLCBsYWJlbDogXCJzaW4oWF8yKVwifSxcbn07XG5cbmxldCBISURBQkxFX0NPTlRST0xTID0gW1xuICBbXCJTaG93IHRlc3QgZGF0YVwiLCBcInNob3dUZXN0RGF0YVwiXSxcbiAgW1wiRGlzY3JldGl6ZSBvdXRwdXRcIiwgXCJkaXNjcmV0aXplXCJdLFxuICBbXCJQbGF5IGJ1dHRvblwiLCBcInBsYXlCdXR0b25cIl0sXG4gIFtcIlN0ZXAgYnV0dG9uXCIsIFwic3RlcEJ1dHRvblwiXSxcbiAgW1wiUmVzZXQgYnV0dG9uXCIsIFwicmVzZXRCdXR0b25cIl0sXG4gIFtcIkxlYXJuaW5nIHJhdGVcIiwgXCJsZWFybmluZ1JhdGVcIl0sXG4gIFtcIkFjdGl2YXRpb25cIiwgXCJhY3RpdmF0aW9uXCJdLFxuICBbXCJSZWd1bGFyaXphdGlvblwiLCBcInJlZ3VsYXJpemF0aW9uXCJdLFxuICBbXCJSZWd1bGFyaXphdGlvbiByYXRlXCIsIFwicmVndWxhcml6YXRpb25SYXRlXCJdLFxuICBbXCJQcm9ibGVtIHR5cGVcIiwgXCJwcm9ibGVtXCJdLFxuICBbXCJXaGljaCBkYXRhc2V0XCIsIFwiZGF0YXNldFwiXSxcbiAgW1wiUmF0aW8gdHJhaW4gZGF0YVwiLCBcInBlcmNUcmFpbkRhdGFcIl0sXG4gIFtcIk5vaXNlIGxldmVsXCIsIFwibm9pc2VcIl0sXG4gIFtcIkJhdGNoIHNpemVcIiwgXCJiYXRjaFNpemVcIl0sXG4gIFtcIiMgb2YgaGlkZGVuIGxheWVyc1wiLCBcIm51bUhpZGRlbkxheWVyc1wiXSxcbl07XG5cbmNsYXNzIFBsYXllciB7XG4gIHByaXZhdGUgdGltZXJJbmRleCA9IDA7XG4gIHByaXZhdGUgaXNQbGF5aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgY2FsbGJhY2s6IChpc1BsYXlpbmc6IGJvb2xlYW4pID0+IHZvaWQgPSBudWxsO1xuXG4gIC8qKiBQbGF5cy9wYXVzZXMgdGhlIHBsYXllci4gKi9cbiAgcGxheU9yUGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgIHNpbXVsYXRpb25TdGFydGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvblBsYXlQYXVzZShjYWxsYmFjazogKGlzUGxheWluZzogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmlzUGxheWluZyk7XG4gICAgfVxuICAgIHRoaXMuc3RhcnQodGhpcy50aW1lckluZGV4KTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMudGltZXJJbmRleCsrO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5pc1BsYXlpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQobG9jYWxUaW1lckluZGV4OiBudW1iZXIpIHtcbiAgICBkMy50aW1lcigoKSA9PiB7XG4gICAgICBpZiAobG9jYWxUaW1lckluZGV4IDwgdGhpcy50aW1lckluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgLy8gRG9uZS5cbiAgICAgIH1cbiAgICAgIG9uZVN0ZXAoKTtcbiAgICAgIHJldHVybiBmYWxzZTsgIC8vIE5vdCBkb25lLlxuICAgIH0sIDApO1xuICB9XG59XG5cbmxldCBzdGF0ZSA9IFN0YXRlLmRlc2VyaWFsaXplU3RhdGUoKTtcblxuLy8gRmlsdGVyIG91dCBpbnB1dHMgdGhhdCBhcmUgaGlkZGVuLlxuc3RhdGUuZ2V0SGlkZGVuUHJvcHMoKS5mb3JFYWNoKHByb3AgPT4ge1xuICBpZiAocHJvcCBpbiBJTlBVVFMpIHtcbiAgICBkZWxldGUgSU5QVVRTW3Byb3BdO1xuICB9XG59KTtcblxubGV0IGJvdW5kYXJ5OiB7W2lkOiBzdHJpbmddOiBudW1iZXJbXVtdfSA9IHt9O1xubGV0IHNlbGVjdGVkTm9kZUlkOiBzdHJpbmcgPSBudWxsO1xuLy8gUGxvdCB0aGUgaGVhdG1hcC5cbmxldCB4RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdID0gWy02LCA2XTtcbmxldCBoZWF0TWFwID1cbiAgICBuZXcgSGVhdE1hcCgzMDAsIERFTlNJVFksIHhEb21haW4sIHhEb21haW4sIGQzLnNlbGVjdChcIiNoZWF0bWFwXCIpLFxuICAgICAgICB7c2hvd0F4ZXM6IHRydWV9KTtcbmxldCBsaW5rV2lkdGhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gIC5kb21haW4oWzAsIDVdKVxuICAucmFuZ2UoWzEsIDEwXSlcbiAgLmNsYW1wKHRydWUpO1xubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nPigpXG4gICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFstMSwgMCwgMV0pXG4gICAgICAgICAgICAgICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgLmNsYW1wKHRydWUpO1xubGV0IGl0ZXIgPSAwO1xubGV0IHRyYWluRGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCB0ZXN0RGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCBuZXR3b3JrOiBubi5Ob2RlW11bXSA9IG51bGw7XG5sZXQgbG9zc1RyYWluID0gMDtcbmxldCBsb3NzVGVzdCA9IDA7XG5sZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xubGV0IGxpbmVDaGFydCA9IG5ldyBBcHBlbmRpbmdMaW5lQ2hhcnQoZDMuc2VsZWN0KFwiI2xpbmVjaGFydFwiKSxcbiAgICBbXCIjNzc3XCIsIFwiYmxhY2tcIl0pO1xuXG5mdW5jdGlvbiBtYWtlR1VJKCkge1xuICBkMy5zZWxlY3QoXCIjcmVzZXQtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0KCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBkMy5zZWxlY3QoXCIjcGxheS1wYXVzZS1idXR0b25cIik7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaGFuZ2UgdGhlIGJ1dHRvbidzIGNvbnRlbnQuXG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBwbGF5ZXIucGxheU9yUGF1c2UoKTtcbiAgfSk7XG5cbiAgcGxheWVyLm9uUGxheVBhdXNlKGlzUGxheWluZyA9PiB7XG4gICAgZDMuc2VsZWN0KFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpLmNsYXNzZWQoXCJwbGF5aW5nXCIsIGlzUGxheWluZyk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNuZXh0LXN0ZXAtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllci5wYXVzZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgc2ltdWxhdGlvblN0YXJ0ZWQoKTtcbiAgICB9XG4gICAgb25lU3RlcCgpO1xuICB9KTtcblxuICBkMy5zZWxlY3QoXCIjZGF0YS1yZWdlbi1idXR0b25cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICB9KTtcblxuICBsZXQgZGF0YVRodW1ibmFpbHMgPSBkMy5zZWxlY3RBbGwoXCJjYW52YXNbZGF0YS1kYXRhc2V0XVwiKTtcbiAgZGF0YVRodW1ibmFpbHMub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmV3RGF0YXNldCA9IGRhdGFzZXRzW3RoaXMuZGF0YXNldC5kYXRhc2V0XTtcbiAgICBpZiAobmV3RGF0YXNldCA9PT0gc3RhdGUuZGF0YXNldCkge1xuICAgICAgcmV0dXJuOyAvLyBOby1vcC5cbiAgICB9XG4gICAgc3RhdGUuZGF0YXNldCA9ICBuZXdEYXRhc2V0O1xuICAgIGRhdGFUaHVtYm5haWxzLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFzZXRLZXkgPSBnZXRLZXlGcm9tVmFsdWUoZGF0YXNldHMsIHN0YXRlLmRhdGFzZXQpO1xuICAvLyBTZWxlY3QgdGhlIGRhdGFzZXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkMy5zZWxlY3QoYGNhbnZhc1tkYXRhLWRhdGFzZXQ9JHtkYXRhc2V0S2V5fV1gKVxuICAgIC5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG5cbiAgbGV0IHJlZ0RhdGFUaHVtYm5haWxzID0gZDMuc2VsZWN0QWxsKFwiY2FudmFzW2RhdGEtcmVnRGF0YXNldF1cIik7XG4gIHJlZ0RhdGFUaHVtYm5haWxzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5ld0RhdGFzZXQgPSByZWdEYXRhc2V0c1t0aGlzLmRhdGFzZXQucmVnZGF0YXNldF07XG4gICAgaWYgKG5ld0RhdGFzZXQgPT09IHN0YXRlLnJlZ0RhdGFzZXQpIHtcbiAgICAgIHJldHVybjsgLy8gTm8tb3AuXG4gICAgfVxuICAgIHN0YXRlLnJlZ0RhdGFzZXQgPSAgbmV3RGF0YXNldDtcbiAgICByZWdEYXRhVGh1bWJuYWlscy5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCByZWdEYXRhc2V0S2V5ID0gZ2V0S2V5RnJvbVZhbHVlKHJlZ0RhdGFzZXRzLCBzdGF0ZS5yZWdEYXRhc2V0KTtcbiAgLy8gU2VsZWN0IHRoZSBkYXRhc2V0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgZDMuc2VsZWN0KGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldEtleX1dYClcbiAgICAuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuXG4gIGQzLnNlbGVjdChcIiNhZGQtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPj0gNikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbc3RhdGUubnVtSGlkZGVuTGF5ZXJzXSA9IDI7XG4gICAgc3RhdGUubnVtSGlkZGVuTGF5ZXJzKys7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNyZW1vdmUtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMtLTtcbiAgICBzdGF0ZS5uZXR3b3JrU2hhcGUuc3BsaWNlKHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCBzaG93VGVzdERhdGEgPSBkMy5zZWxlY3QoXCIjc2hvdy10ZXN0LWRhdGFcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuc2hvd1Rlc3REYXRhID0gdGhpcy5jaGVja2VkO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgaGVhdE1hcC51cGRhdGVUZXN0UG9pbnRzKHN0YXRlLnNob3dUZXN0RGF0YSA/IHRlc3REYXRhIDogW10pO1xuICB9KTtcbiAgLy8gQ2hlY2svdW5jaGVjayB0aGUgY2hlY2tib3ggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBzaG93VGVzdERhdGEucHJvcGVydHkoXCJjaGVja2VkXCIsIHN0YXRlLnNob3dUZXN0RGF0YSk7XG5cbiAgbGV0IGRpc2NyZXRpemUgPSBkMy5zZWxlY3QoXCIjZGlzY3JldGl6ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5kaXNjcmV0aXplID0gdGhpcy5jaGVja2VkO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgdXBkYXRlVUkoKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNib3ggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkaXNjcmV0aXplLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5kaXNjcmV0aXplKTtcblxuICBsZXQgcGVyY1RyYWluID0gZDMuc2VsZWN0KFwiI3BlcmNUcmFpbkRhdGFcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wZXJjVHJhaW5EYXRhID0gdGhpcy52YWx1ZTtcbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J3BlcmNUcmFpbkRhdGEnXSAudmFsdWVcIikudGV4dCh0aGlzLnZhbHVlKTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHBlcmNUcmFpbi5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLnBlcmNUcmFpbkRhdGEpO1xuICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J3BlcmNUcmFpbkRhdGEnXSAudmFsdWVcIikudGV4dChzdGF0ZS5wZXJjVHJhaW5EYXRhKTtcblxuICBsZXQgbm9pc2UgPSBkMy5zZWxlY3QoXCIjbm9pc2VcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5ub2lzZSA9IHRoaXMudmFsdWU7XG4gICAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdub2lzZSddIC52YWx1ZVwiKS50ZXh0KHRoaXMudmFsdWUpO1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgbm9pc2UucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5ub2lzZSk7XG4gIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nbm9pc2UnXSAudmFsdWVcIikudGV4dChzdGF0ZS5ub2lzZSk7XG5cbiAgbGV0IGJhdGNoU2l6ZSA9IGQzLnNlbGVjdChcIiNiYXRjaFNpemVcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5iYXRjaFNpemUgPSB0aGlzLnZhbHVlO1xuICAgIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nYmF0Y2hTaXplJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBiYXRjaFNpemUucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5iYXRjaFNpemUpO1xuICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J2JhdGNoU2l6ZSddIC52YWx1ZVwiKS50ZXh0KHN0YXRlLmJhdGNoU2l6ZSk7XG5cbiAgbGV0IGFjdGl2YXRpb25Ecm9wZG93biA9IGQzLnNlbGVjdChcIiNhY3RpdmF0aW9uc1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbnNbdGhpcy52YWx1ZV07XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBhY3RpdmF0aW9uRHJvcGRvd24ucHJvcGVydHkoXCJ2YWx1ZVwiLFxuICAgICAgZ2V0S2V5RnJvbVZhbHVlKGFjdGl2YXRpb25zLCBzdGF0ZS5hY3RpdmF0aW9uKSk7XG5cbiAgbGV0IGxlYXJuaW5nUmF0ZSA9IGQzLnNlbGVjdChcIiNsZWFybmluZ1JhdGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUubGVhcm5pbmdSYXRlID0gK3RoaXMudmFsdWU7XG4gICAgc3RhdGUuc2VyaWFsaXplKCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gIH0pO1xuICBsZWFybmluZ1JhdGUucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5sZWFybmluZ1JhdGUpO1xuXG4gIGxldCByZWd1bGFyRHJvcGRvd24gPSBkMy5zZWxlY3QoXCIjcmVndWxhcml6YXRpb25zXCIpLm9uKFwiY2hhbmdlXCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5yZWd1bGFyaXphdGlvbiA9IHJlZ3VsYXJpemF0aW9uc1t0aGlzLnZhbHVlXTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHJlZ3VsYXJEcm9wZG93bi5wcm9wZXJ0eShcInZhbHVlXCIsXG4gICAgICBnZXRLZXlGcm9tVmFsdWUocmVndWxhcml6YXRpb25zLCBzdGF0ZS5yZWd1bGFyaXphdGlvbikpO1xuXG4gIGxldCByZWd1bGFyUmF0ZSA9IGQzLnNlbGVjdChcIiNyZWd1bGFyUmF0ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUgPSArdGhpcy52YWx1ZTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHJlZ3VsYXJSYXRlLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUucmVndWxhcml6YXRpb25SYXRlKTtcblxuICBsZXQgcHJvYmxlbSA9IGQzLnNlbGVjdChcIiNwcm9ibGVtXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnByb2JsZW0gPSBwcm9ibGVtc1t0aGlzLnZhbHVlXTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBkcmF3RGF0YXNldFRodW1ibmFpbHMoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHByb2JsZW0ucHJvcGVydHkoXCJ2YWx1ZVwiLCBnZXRLZXlGcm9tVmFsdWUocHJvYmxlbXMsIHN0YXRlLnByb2JsZW0pKTtcblxuICAvLyBQYXVzZSBwbGF5ZXIgd2hlbiB0b2dnbGluZyBwbGF5Z3JvdW5kXG4gIGxldCB0b2dnbGVQbGF5Z3JvdW5kID0gZDMuc2VsZWN0KFwiI3BsYXlncm91bmQtdG9nZ2xlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgfSk7XG5cbiAgLy8gQWRkIHNjYWxlIHRvIHRoZSBncmFkaWVudCBjb2xvciBtYXAuXG4gIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFstMSwgMV0pLnJhbmdlKFswLCAxNDRdKTtcbiAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgIC5zY2FsZSh4KVxuICAgIC5vcmllbnQoXCJib3R0b21cIilcbiAgICAudGlja1ZhbHVlcyhbLTEsIDAsIDFdKVxuICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuICBkMy5zZWxlY3QoXCIjY29sb3JtYXAgZy5jb3JlXCIpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwxMClcIilcbiAgICAuY2FsbCh4QXhpcyk7XG5cbiAgLy8gTGlzdGVuIGZvciBjc3MtcmVzcG9uc2l2ZSBjaGFuZ2VzIGFuZCByZWRyYXcgdGhlIHN2ZyBuZXR3b3JrLlxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBsZXQgbmV3V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tcGFydFwiKVxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKG5ld1dpZHRoICE9PSBtYWluV2lkdGgpIHtcbiAgICAgIG1haW5XaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gICAgICB1cGRhdGVVSSh0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgdGhlIHRleHQgYmVsb3cgdGhlIHZpc3VhbGl6YXRpb24gZGVwZW5kaW5nIG9uIHRoZSBVUkwuXG4gIGlmIChzdGF0ZS5oaWRlVGV4dCkge1xuICAgIGQzLnNlbGVjdChcIiNhcnRpY2xlLXRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBkMy5zZWxlY3QoXCJkaXYubW9yZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcImhlYWRlclwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcms6IG5uLk5vZGVbXVtdKSB7XG4gIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgIGQzLnNlbGVjdChgcmVjdCNiaWFzLSR7bm9kZS5pZH1gKS5zdHlsZShcImZpbGxcIiwgY29sb3JTY2FsZShub2RlLmJpYXMpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55Pikge1xuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgLy8gVXBkYXRlIGFsbCB0aGUgbm9kZXMgaW4gdGhpcyBsYXllci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tqXTtcbiAgICAgICAgY29udGFpbmVyLnNlbGVjdChgI2xpbmske2xpbmsuc291cmNlLmlkfS0ke2xpbmsuZGVzdC5pZH1gKVxuICAgICAgICAgICAgLnN0eWxlKHtcbiAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldFwiOiAtaXRlciAvIDMsXG4gICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGxpbmtXaWR0aFNjYWxlKE1hdGguYWJzKGxpbmsud2VpZ2h0KSksXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCI6IGNvbG9yU2NhbGUobGluay53ZWlnaHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRhdHVtKGxpbmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3Tm9kZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBub2RlSWQ6IHN0cmluZywgaXNJbnB1dDogYm9vbGVhbixcbiAgICBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBub2RlPzogbm4uTm9kZSkge1xuICBsZXQgeCA9IGN4IC0gUkVDVF9TSVpFIC8gMjtcbiAgbGV0IHkgPSBjeSAtIFJFQ1RfU0laRSAvIDI7XG5cbiAgbGV0IG5vZGVHcm91cCA9IGNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoe1xuICAgICAgXCJjbGFzc1wiOiBcIm5vZGVcIixcbiAgICAgIFwiaWRcIjogYG5vZGUke25vZGVJZH1gLFxuICAgICAgXCJ0cmFuc2Zvcm1cIjogYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgIH0pO1xuXG4gIC8vIERyYXcgdGhlIG1haW4gcmVjdGFuZ2xlLlxuICBub2RlR3JvdXAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IFJFQ1RfU0laRSxcbiAgICAgIGhlaWdodDogUkVDVF9TSVpFLFxuICAgIH0pO1xuICBsZXQgYWN0aXZlT3JOb3RDbGFzcyA9IHN0YXRlW25vZGVJZF0gPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiO1xuICBpZiAoaXNJbnB1dCkge1xuICAgIGxldCBsYWJlbCA9IElOUFVUU1tub2RlSWRdLmxhYmVsICE9IG51bGwgP1xuICAgICAgICBJTlBVVFNbbm9kZUlkXS5sYWJlbCA6IG5vZGVJZDtcbiAgICAvLyBEcmF3IHRoZSBpbnB1dCBsYWJlbC5cbiAgICBsZXQgdGV4dCA9IG5vZGVHcm91cC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoe1xuICAgICAgY2xhc3M6IFwibWFpbi1sYWJlbFwiLFxuICAgICAgeDogLTEwLFxuICAgICAgeTogUkVDVF9TSVpFIC8gMiwgXCJ0ZXh0LWFuY2hvclwiOiBcImVuZFwiXG4gICAgfSk7XG4gICAgaWYgKC9bX15dLy50ZXN0KGxhYmVsKSkge1xuICAgICAgbGV0IG15UmUgPSAvKC4qPykoW19eXSkoLikvZztcbiAgICAgIGxldCBteUFycmF5O1xuICAgICAgbGV0IGxhc3RJbmRleDtcbiAgICAgIHdoaWxlICgobXlBcnJheSA9IG15UmUuZXhlYyhsYWJlbCkpICE9PSBudWxsKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IG15UmUubGFzdEluZGV4O1xuICAgICAgICBsZXQgcHJlZml4ID0gbXlBcnJheVsxXTtcbiAgICAgICAgbGV0IHNlcCA9IG15QXJyYXlbMl07XG4gICAgICAgIGxldCBzdWZmaXggPSBteUFycmF5WzNdO1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS50ZXh0KHByZWZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcImJhc2VsaW5lLXNoaWZ0XCIsIHNlcCA9PSBcIl9cIiA/IFwic3ViXCIgOiBcInN1cGVyXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjlweFwiKVxuICAgICAgICAudGV4dChzdWZmaXgpO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsLnN1YnN0cmluZyhsYXN0SW5kZXgpKSB7XG4gICAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbCk7XG4gICAgfVxuICAgIG5vZGVHcm91cC5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGlmICghaXNJbnB1dCkge1xuICAgIC8vIERyYXcgdGhlIG5vZGUncyBiaWFzLlxuICAgIG5vZGVHcm91cC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIGlkOiBgYmlhcy0ke25vZGVJZH1gLFxuICAgICAgICB4OiAtQklBU19TSVpFIC0gMixcbiAgICAgICAgeTogUkVDVF9TSVpFIC0gQklBU19TSVpFICsgMyxcbiAgICAgICAgd2lkdGg6IEJJQVNfU0laRSxcbiAgICAgICAgaGVpZ2h0OiBCSUFTX1NJWkUsXG4gICAgICB9KS5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuQklBUywgbm9kZSwgZDMubW91c2UoY29udGFpbmVyLm5vZGUoKSkpO1xuICAgICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQobnVsbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIERyYXcgdGhlIG5vZGUncyBjYW52YXMuXG4gIGxldCBkaXYgPSBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5pbnNlcnQoXCJkaXZcIiwgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAuYXR0cih7XG4gICAgICBcImlkXCI6IGBjYW52YXMtJHtub2RlSWR9YCxcbiAgICAgIFwiY2xhc3NcIjogXCJjYW52YXNcIlxuICAgIH0pXG4gICAgLnN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBgJHt4ICsgM31weGAsXG4gICAgICB0b3A6IGAke3kgKyAzfXB4YFxuICAgIH0pXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGVjdGVkTm9kZUlkID0gbm9kZUlkO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgbm9kZUdyb3VwLmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmYWxzZSk7XG4gICAgICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbbm9kZUlkXSwgc3RhdGUuZGlzY3JldGl6ZSk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZWN0ZWROb2RlSWQgPSBudWxsO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIGZhbHNlKTtcbiAgICAgIG5vZGVHcm91cC5jbGFzc2VkKFwiaG92ZXJlZFwiLCBmYWxzZSk7XG4gICAgICB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcmssIGZhbHNlKTtcbiAgICAgIGhlYXRNYXAudXBkYXRlQmFja2dyb3VuZChib3VuZGFyeVtubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkXSxcbiAgICAgICAgICBzdGF0ZS5kaXNjcmV0aXplKTtcbiAgICB9KTtcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlW25vZGVJZF0gPSAhc3RhdGVbbm9kZUlkXTtcbiAgICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfSk7XG4gICAgZGl2LnN0eWxlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgfVxuICBpZiAoaXNJbnB1dCkge1xuICAgIGRpdi5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGxldCBub2RlSGVhdE1hcCA9IG5ldyBIZWF0TWFwKFJFQ1RfU0laRSwgREVOU0lUWSAvIDEwLCB4RG9tYWluLFxuICAgICAgeERvbWFpbiwgZGl2LCB7bm9Tdmc6IHRydWV9KTtcbiAgZGl2LmRhdHVtKHtoZWF0bWFwOiBub2RlSGVhdE1hcCwgaWQ6IG5vZGVJZH0pO1xuXG59XG5cbi8vIERyYXcgbmV0d29ya1xuZnVuY3Rpb24gZHJhd05ldHdvcmsobmV0d29yazogbm4uTm9kZVtdW10pOiB2b2lkIHtcbiAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdmdcIik7XG4gIC8vIFJlbW92ZSBhbGwgc3ZnIGVsZW1lbnRzLlxuICBzdmcuc2VsZWN0KFwiZy5jb3JlXCIpLnJlbW92ZSgpO1xuICAvLyBSZW1vdmUgYWxsIGRpdiBlbGVtZW50cy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LnBsdXMtbWludXMtbmV1cm9uc1wiKS5yZW1vdmUoKTtcblxuICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdmcgY29udGFpbmVyLlxuICBsZXQgcGFkZGluZyA9IDM7XG4gIGxldCBjbyA9IDxIVE1MRGl2RWxlbWVudD4gZDMuc2VsZWN0KFwiLmNvbHVtbi5vdXRwdXRcIikubm9kZSgpO1xuICBsZXQgY2YgPSA8SFRNTERpdkVsZW1lbnQ+IGQzLnNlbGVjdChcIi5jb2x1bW4uZmVhdHVyZXNcIikubm9kZSgpO1xuICBsZXQgd2lkdGggPSBjby5vZmZzZXRMZWZ0IC0gY2Yub2Zmc2V0TGVmdDtcbiAgc3ZnLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCk7XG5cbiAgLy8gTWFwIG9mIGFsbCBub2RlIGNvb3JkaW5hdGVzLlxuICBsZXQgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSA9IHt9O1xuICBsZXQgY29udGFpbmVyID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAuY2xhc3NlZChcImNvcmVcIiwgdHJ1ZSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcbiAgLy8gRHJhdyB0aGUgbmV0d29yayBsYXllciBieSBsYXllci5cbiAgbGV0IG51bUxheWVycyA9IG5ldHdvcmsubGVuZ3RoO1xuICBsZXQgZmVhdHVyZVdpZHRoID0gMTE4O1xuICBsZXQgbGF5ZXJTY2FsZSA9IGQzLnNjYWxlLm9yZGluYWw8bnVtYmVyLCBudW1iZXI+KClcbiAgICAgIC5kb21haW4oZDMucmFuZ2UoMSwgbnVtTGF5ZXJzIC0gMSkpXG4gICAgICAucmFuZ2VQb2ludHMoW2ZlYXR1cmVXaWR0aCwgd2lkdGggLSBSRUNUX1NJWkVdLCAwLjcpO1xuICBsZXQgbm9kZUluZGV4U2NhbGUgPSAobm9kZUluZGV4OiBudW1iZXIpID0+IG5vZGVJbmRleCAqIChSRUNUX1NJWkUgKyAyNSk7XG5cblxuICBsZXQgY2FsbG91dFRodW1iID0gZDMuc2VsZWN0KFwiLmNhbGxvdXQudGh1bWJuYWlsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxldCBjYWxsb3V0V2VpZ2h0cyA9IGQzLnNlbGVjdChcIi5jYWxsb3V0LndlaWdodHNcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGV0IGlkV2l0aENhbGxvdXQgPSBudWxsO1xuICBsZXQgdGFyZ2V0SWRXaXRoQ2FsbG91dCA9IG51bGw7XG5cbiAgLy8gRHJhdyB0aGUgaW5wdXQgbGF5ZXIgc2VwYXJhdGVseS5cbiAgbGV0IGN4ID0gUkVDVF9TSVpFIC8gMiArIDUwO1xuICBsZXQgbm9kZUlkcyA9IE9iamVjdC5rZXlzKElOUFVUUyk7XG4gIGxldCBtYXhZID0gbm9kZUluZGV4U2NhbGUobm9kZUlkcy5sZW5ndGgpO1xuICBub2RlSWRzLmZvckVhY2goKG5vZGVJZCwgaSkgPT4ge1xuICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICBub2RlMmNvb3JkW25vZGVJZF0gPSB7Y3g6IGN4LCBjeTogY3l9O1xuICAgIGRyYXdOb2RlKGN4LCBjeSwgbm9kZUlkLCB0cnVlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBEcmF3IHRoZSBpbnRlcm1lZGlhdGUgbGF5ZXJzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbnVtTGF5ZXJzIC0gMTsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHhdLmxlbmd0aDtcbiAgICBsZXQgY3ggPSBsYXllclNjYWxlKGxheWVySWR4KSArIFJFQ1RfU0laRSAvIDI7XG4gICAgbWF4WSA9IE1hdGgubWF4KG1heFksIG5vZGVJbmRleFNjYWxlKG51bU5vZGVzKSk7XG4gICAgYWRkUGx1c01pbnVzQ29udHJvbChsYXllclNjYWxlKGxheWVySWR4KSwgbGF5ZXJJZHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXM7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBuZXR3b3JrW2xheWVySWR4XVtpXTtcbiAgICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICAgIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3g6IGN4LCBjeTogY3l9O1xuICAgICAgZHJhd05vZGUoY3gsIGN5LCBub2RlLmlkLCBmYWxzZSwgY29udGFpbmVyLCBub2RlKTtcblxuICAgICAgLy8gU2hvdyBjYWxsb3V0IHRvIHRodW1ibmFpbHMuXG4gICAgICBsZXQgbnVtTm9kZXMgPSBuZXR3b3JrW2xheWVySWR4XS5sZW5ndGg7XG4gICAgICBsZXQgbmV4dE51bU5vZGVzID0gbmV0d29ya1tsYXllcklkeCArIDFdLmxlbmd0aDtcbiAgICAgIGlmIChpZFdpdGhDYWxsb3V0ID09IG51bGwgJiZcbiAgICAgICAgICBpID09PSBudW1Ob2RlcyAtIDEgJiZcbiAgICAgICAgICBuZXh0TnVtTm9kZXMgPD0gbnVtTm9kZXMpIHtcbiAgICAgICAgY2FsbG91dFRodW1iLnN0eWxlKHtcbiAgICAgICAgICBkaXNwbGF5OiBudWxsLFxuICAgICAgICAgIHRvcDogYCR7MjAgKyAzICsgY3l9cHhgLFxuICAgICAgICAgIGxlZnQ6IGAke2N4fXB4YFxuICAgICAgICB9KTtcbiAgICAgICAgaWRXaXRoQ2FsbG91dCA9IG5vZGUuaWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIERyYXcgbGlua3MuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tqXTtcbiAgICAgICAgbGV0IHBhdGg6IFNWR1BhdGhFbGVtZW50ID0gPGFueT4gZHJhd0xpbmsobGluaywgbm9kZTJjb29yZCwgbmV0d29yayxcbiAgICAgICAgICAgIGNvbnRhaW5lciwgaiA9PT0gMCwgaiwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aCkubm9kZSgpO1xuICAgICAgICAvLyBTaG93IGNhbGxvdXQgdG8gd2VpZ2h0cy5cbiAgICAgICAgbGV0IHByZXZMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHggLSAxXTtcbiAgICAgICAgbGV0IGxhc3ROb2RlUHJldkxheWVyID0gcHJldkxheWVyW3ByZXZMYXllci5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRhcmdldElkV2l0aENhbGxvdXQgPT0gbnVsbCAmJlxuICAgICAgICAgICAgaSA9PT0gbnVtTm9kZXMgLSAxICYmXG4gICAgICAgICAgICBsaW5rLnNvdXJjZS5pZCA9PT0gbGFzdE5vZGVQcmV2TGF5ZXIuaWQgJiZcbiAgICAgICAgICAgIChsaW5rLnNvdXJjZS5pZCAhPT0gaWRXaXRoQ2FsbG91dCB8fCBudW1MYXllcnMgPD0gNSkgJiZcbiAgICAgICAgICAgIGxpbmsuZGVzdC5pZCAhPT0gaWRXaXRoQ2FsbG91dCAmJlxuICAgICAgICAgICAgcHJldkxheWVyLmxlbmd0aCA+PSBudW1Ob2Rlcykge1xuICAgICAgICAgIGxldCBtaWRQb2ludCA9IHBhdGguZ2V0UG9pbnRBdExlbmd0aChwYXRoLmdldFRvdGFsTGVuZ3RoKCkgKiAwLjcpO1xuICAgICAgICAgIGNhbGxvdXRXZWlnaHRzLnN0eWxlKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG51bGwsXG4gICAgICAgICAgICB0b3A6IGAke21pZFBvaW50LnkgKyA1fXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke21pZFBvaW50LnggKyAzfXB4YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhcmdldElkV2l0aENhbGxvdXQgPSBsaW5rLmRlc3QuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmF3IHRoZSBvdXRwdXQgbm9kZSBzZXBhcmF0ZWx5LlxuICBjeCA9IHdpZHRoICsgUkVDVF9TSVpFIC8gMjtcbiAgbGV0IG5vZGUgPSBuZXR3b3JrW251bUxheWVycyAtIDFdWzBdO1xuICBsZXQgY3kgPSBub2RlSW5kZXhTY2FsZSgwKSArIFJFQ1RfU0laRSAvIDI7XG4gIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3g6IGN4LCBjeTogY3l9O1xuICAvLyBEcmF3IGxpbmtzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2ldO1xuICAgIGRyYXdMaW5rKGxpbmssIG5vZGUyY29vcmQsIG5ldHdvcmssIGNvbnRhaW5lciwgaSA9PT0gMCwgaSxcbiAgICAgICAgbm9kZS5pbnB1dExpbmtzLmxlbmd0aCk7XG4gIH1cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIHN2Zy5cbiAgc3ZnLmF0dHIoXCJoZWlnaHRcIiwgbWF4WSk7XG5cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGZlYXR1cmVzIGNvbHVtbi5cbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGNhbGxvdXRUaHVtYiksXG4gICAgZ2V0UmVsYXRpdmVIZWlnaHQoY2FsbG91dFdlaWdodHMpLFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpKVxuICApO1xuICBkMy5zZWxlY3QoXCIuY29sdW1uLmZlYXR1cmVzXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCArIFwicHhcIik7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlSGVpZ2h0KHNlbGVjdGlvbjogZDMuU2VsZWN0aW9uPGFueT4pIHtcbiAgbGV0IG5vZGUgPSA8SFRNTEFuY2hvckVsZW1lbnQ+IHNlbGVjdGlvbi5ub2RlKCk7XG4gIHJldHVybiBub2RlLm9mZnNldEhlaWdodCArIG5vZGUub2Zmc2V0VG9wO1xufVxuXG5mdW5jdGlvbiBhZGRQbHVzTWludXNDb250cm9sKHg6IG51bWJlciwgbGF5ZXJJZHg6IG51bWJlcikge1xuICBsZXQgZGl2ID0gZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmNsYXNzZWQoXCJwbHVzLW1pbnVzLW5ldXJvbnNcIiwgdHJ1ZSlcbiAgICAuc3R5bGUoXCJsZWZ0XCIsIGAke3ggLSAxMH1weGApO1xuXG4gIGxldCBpID0gbGF5ZXJJZHggLSAxO1xuICBsZXQgZmlyc3RSb3cgPSBkaXYuYXBwZW5kKFwiZGl2XCIpLmF0dHIoXCJjbGFzc1wiLCBgdWktbnVtTm9kZXMke2xheWVySWR4fWApO1xuICBmaXJzdFJvdy5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbnVtTmV1cm9ucyA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXTtcbiAgICAgICAgaWYgKG51bU5ldXJvbnMgPj0gOCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0rKztcbiAgICAgICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSlcbiAgICAuYXBwZW5kKFwiaVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgICAudGV4dChcImFkZFwiKTtcblxuICBmaXJzdFJvdy5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbnVtTmV1cm9ucyA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXTtcbiAgICAgICAgaWYgKG51bU5ldXJvbnMgPD0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0tLTtcbiAgICAgICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSlcbiAgICAuYXBwZW5kKFwiaVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgICAudGV4dChcInJlbW92ZVwiKTtcblxuICBsZXQgc3VmZml4ID0gc3RhdGUubmV0d29ya1NoYXBlW2ldID4gMSA/IFwic1wiIDogXCJcIjtcbiAgZGl2LmFwcGVuZChcImRpdlwiKS50ZXh0KFxuICAgIHN0YXRlLm5ldHdvcmtTaGFwZVtpXSArIFwiIG5ldXJvblwiICsgc3VmZml4XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhvdmVyQ2FyZCh0eXBlOiBIb3ZlclR5cGUsIG5vZGVPckxpbms/OiBubi5Ob2RlIHwgbm4uTGluayxcbiAgICBjb29yZGluYXRlcz86IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgbGV0IGhvdmVyY2FyZCA9IGQzLnNlbGVjdChcIiNob3ZlcmNhcmRcIik7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICBob3ZlcmNhcmQuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBkMy5zZWxlY3QoXCIjc3ZnXCIpLm9uKFwiY2xpY2tcIiwgbnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGQzLnNlbGVjdChcIiNzdmdcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaG92ZXJjYXJkLnNlbGVjdChcIi52YWx1ZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGxldCBpbnB1dCA9IGhvdmVyY2FyZC5zZWxlY3QoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbCk7XG4gICAgaW5wdXQub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBpZiAodHlwZSA9PSBIb3ZlclR5cGUuV0VJR0hUKSB7XG4gICAgICAgICAgKDxubi5MaW5rPm5vZGVPckxpbmspLndlaWdodCA9ICt0aGlzLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICg8bm4uTm9kZT5ub2RlT3JMaW5rKS5iaWFzID0gK3RoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlVUkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpbnB1dC5vbihcImtleXByZXNzXCIsICgpID0+IHtcbiAgICAgIGlmICgoPGFueT5kMy5ldmVudCkua2V5Q29kZSA9PSAxMykge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQodHlwZSwgbm9kZU9yTGluaywgY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICg8SFRNTElucHV0RWxlbWVudD5pbnB1dC5ub2RlKCkpLmZvY3VzKCk7XG4gIH0pO1xuICBsZXQgdmFsdWUgPSB0eXBlID09IEhvdmVyVHlwZS5XRUlHSFQgP1xuICAgICg8bm4uTGluaz5ub2RlT3JMaW5rKS53ZWlnaHQgOlxuICAgICg8bm4uTm9kZT5ub2RlT3JMaW5rKS5iaWFzO1xuICBsZXQgbmFtZSA9IHR5cGUgPT0gSG92ZXJUeXBlLldFSUdIVCA/IFwiV2VpZ2h0XCIgOiBcIkJpYXNcIjtcbiAgaG92ZXJjYXJkLnN0eWxlKHtcbiAgICBcImxlZnRcIjogYCR7Y29vcmRpbmF0ZXNbMF0gKyAyMH1weGAsXG4gICAgXCJ0b3BcIjogYCR7Y29vcmRpbmF0ZXNbMV19cHhgLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfSk7XG4gIGhvdmVyY2FyZC5zZWxlY3QoXCIudHlwZVwiKS50ZXh0KG5hbWUpO1xuICBob3ZlcmNhcmQuc2VsZWN0KFwiLnZhbHVlXCIpXG4gICAgLnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKVxuICAgIC50ZXh0KHZhbHVlLnRvUHJlY2lzaW9uKDIpKTtcbiAgaG92ZXJjYXJkLnNlbGVjdChcImlucHV0XCIpXG4gICAgLnByb3BlcnR5KFwidmFsdWVcIiwgdmFsdWUudG9QcmVjaXNpb24oMikpXG4gICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5rKFxuICAgIGlucHV0OiBubi5MaW5rLCBub2RlMmNvb3JkOiB7W2lkOiBzdHJpbmddOiB7Y3g6IG51bWJlciwgY3k6IG51bWJlcn19LFxuICAgIG5ldHdvcms6IG5uLk5vZGVbXVtdLCBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LFxuICAgIGlzRmlyc3Q6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCBsaW5lID0gY29udGFpbmVyLmluc2VydChcInBhdGhcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGxldCBzb3VyY2UgPSBub2RlMmNvb3JkW2lucHV0LnNvdXJjZS5pZF07XG4gIGxldCBkZXN0ID0gbm9kZTJjb29yZFtpbnB1dC5kZXN0LmlkXTtcbiAgbGV0IGRhdHVtID0ge1xuICAgIHNvdXJjZToge1xuICAgICAgeTogc291cmNlLmN4ICsgUkVDVF9TSVpFIC8gMiArIDIsXG4gICAgICB4OiBzb3VyY2UuY3lcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgeTogZGVzdC5jeCAtIFJFQ1RfU0laRSAvIDIsXG4gICAgICB4OiBkZXN0LmN5ICsgKChpbmRleCAtIChsZW5ndGggLSAxKSAvIDIpIC8gbGVuZ3RoKSAqIDEyXG4gICAgfVxuICB9O1xuICBsZXQgZGlhZ29uYWwgPSBkMy5zdmcuZGlhZ29uYWwoKS5wcm9qZWN0aW9uKGQgPT4gW2QueSwgZC54XSk7XG4gIGxpbmUuYXR0cih7XG4gICAgXCJtYXJrZXItc3RhcnRcIjogXCJ1cmwoI21hcmtlckFycm93KVwiLFxuICAgIGNsYXNzOiBcImxpbmtcIixcbiAgICBpZDogXCJsaW5rXCIgKyBpbnB1dC5zb3VyY2UuaWQgKyBcIi1cIiArIGlucHV0LmRlc3QuaWQsXG4gICAgZDogZGlhZ29uYWwoZGF0dW0sIDApXG4gIH0pO1xuXG4gIC8vIEFkZCBhbiBpbnZpc2libGUgdGhpY2sgbGluayB0aGF0IHdpbGwgYmUgdXNlZCBmb3JcbiAgLy8gc2hvd2luZyB0aGUgd2VpZ2h0IHZhbHVlIG9uIGhvdmVyLlxuICBjb250YWluZXIuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiZFwiLCBkaWFnb25hbChkYXR1bSwgMCkpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmstaG92ZXJcIilcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlSG92ZXJDYXJkKEhvdmVyVHlwZS5XRUlHSFQsIGlucHV0LCBkMy5tb3VzZSh0aGlzKSk7XG4gICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlSG92ZXJDYXJkKG51bGwpO1xuICAgIH0pO1xuICByZXR1cm4gbGluZTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIG5ldXJhbCBuZXR3b3JrLCBpdCBhc2tzIHRoZSBuZXR3b3JrIGZvciB0aGUgb3V0cHV0IChwcmVkaWN0aW9uKVxuICogb2YgZXZlcnkgbm9kZSBpbiB0aGUgbmV0d29yayB1c2luZyBpbnB1dHMgc2FtcGxlZCBvbiBhIHNxdWFyZSBncmlkLlxuICogSXQgcmV0dXJucyBhIG1hcCB3aGVyZSBlYWNoIGtleSBpcyB0aGUgbm9kZSBJRCBhbmQgdGhlIHZhbHVlIGlzIGEgc3F1YXJlXG4gKiBtYXRyaXggb2YgdGhlIG91dHB1dHMgb2YgdGhlIG5ldHdvcmsgZm9yIGVhY2ggaW5wdXQgaW4gdGhlIGdyaWQgcmVzcGVjdGl2ZWx5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcms6IG5uLk5vZGVbXVtdLCBmaXJzdFRpbWU6IGJvb2xlYW4pIHtcbiAgaWYgKGZpcnN0VGltZSkge1xuICAgIGJvdW5kYXJ5ID0ge307XG4gICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICBib3VuZGFyeVtub2RlLmlkXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICB9KTtcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBwcmVkZWZpbmVkIGlucHV0cy5cbiAgICBmb3IgKGxldCBub2RlSWQgaW4gSU5QVVRTKSB7XG4gICAgICBib3VuZGFyeVtub2RlSWRdID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgIH1cbiAgfVxuICBsZXQgeFNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFswLCBERU5TSVRZIC0gMV0pLnJhbmdlKHhEb21haW4pO1xuICBsZXQgeVNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFtERU5TSVRZIC0gMSwgMF0pLnJhbmdlKHhEb21haW4pO1xuXG4gIGxldCBpID0gMCwgaiA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCBERU5TSVRZOyBpKyspIHtcbiAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICBubi5mb3JFYWNoTm9kZShuZXR3b3JrLCB0cnVlLCBub2RlID0+IHtcbiAgICAgICAgYm91bmRhcnlbbm9kZS5pZF1baV0gPSBuZXcgQXJyYXkoREVOU0lUWSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHByZWRlZmluZWQgaW5wdXRzLlxuICAgICAgZm9yIChsZXQgbm9kZUlkIGluIElOUFVUUykge1xuICAgICAgICBib3VuZGFyeVtub2RlSWRdW2ldID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGogPSAwOyBqIDwgREVOU0lUWTsgaisrKSB7XG4gICAgICAvLyAxIGZvciBwb2ludHMgaW5zaWRlIHRoZSBjaXJjbGUsIGFuZCAwIGZvciBwb2ludHMgb3V0c2lkZSB0aGUgY2lyY2xlLlxuICAgICAgbGV0IHggPSB4U2NhbGUoaSk7XG4gICAgICBsZXQgeSA9IHlTY2FsZShqKTtcbiAgICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KHgsIHkpO1xuICAgICAgbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICAgIGJvdW5kYXJ5W25vZGUuaWRdW2ldW2pdID0gbm9kZS5vdXRwdXQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgLy8gR28gdGhyb3VnaCBhbGwgcHJlZGVmaW5lZCBpbnB1dHMuXG4gICAgICAgIGZvciAobGV0IG5vZGVJZCBpbiBJTlBVVFMpIHtcbiAgICAgICAgICBib3VuZGFyeVtub2RlSWRdW2ldW2pdID0gSU5QVVRTW25vZGVJZF0uZih4LCB5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb3NzKG5ldHdvcms6IG5uLk5vZGVbXVtdLCBkYXRhUG9pbnRzOiBFeGFtcGxlMkRbXSk6IG51bWJlciB7XG4gIGxldCBsb3NzID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRhdGFQb2ludCA9IGRhdGFQb2ludHNbaV07XG4gICAgbGV0IGlucHV0ID0gY29uc3RydWN0SW5wdXQoZGF0YVBvaW50LngsIGRhdGFQb2ludC55KTtcbiAgICBsZXQgb3V0cHV0ID0gbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgIGxvc3MgKz0gbm4uRXJyb3JzLlNRVUFSRS5lcnJvcihvdXRwdXQsIGRhdGFQb2ludC5sYWJlbCk7XG4gIH1cbiAgcmV0dXJuIGxvc3MgLyBkYXRhUG9pbnRzLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVUkoZmlyc3RTdGVwID0gZmFsc2UpIHtcbiAgLy8gVXBkYXRlIHRoZSBsaW5rcyB2aXN1YWxseS5cbiAgdXBkYXRlV2VpZ2h0c1VJKG5ldHdvcmssIGQzLnNlbGVjdChcImcuY29yZVwiKSk7XG4gIC8vIFVwZGF0ZSB0aGUgYmlhcyB2YWx1ZXMgdmlzdWFsbHkuXG4gIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcmspO1xuICAvLyBHZXQgdGhlIGRlY2lzaW9uIGJvdW5kYXJ5IG9mIHRoZSBuZXR3b3JrLlxuICB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcmssIGZpcnN0U3RlcCk7XG4gIGxldCBzZWxlY3RlZElkID0gc2VsZWN0ZWROb2RlSWQgIT0gbnVsbCA/XG4gICAgICBzZWxlY3RlZE5vZGVJZCA6IG5uLmdldE91dHB1dE5vZGUobmV0d29yaykuaWQ7XG4gIGhlYXRNYXAudXBkYXRlQmFja2dyb3VuZChib3VuZGFyeVtzZWxlY3RlZElkXSwgc3RhdGUuZGlzY3JldGl6ZSk7XG5cbiAgLy8gVXBkYXRlIGFsbCBkZWNpc2lvbiBib3VuZGFyaWVzLlxuICBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5zZWxlY3RBbGwoXCJkaXYuY2FudmFzXCIpXG4gICAgICAuZWFjaChmdW5jdGlvbihkYXRhOiB7aGVhdG1hcDogSGVhdE1hcCwgaWQ6IHN0cmluZ30pIHtcbiAgICBkYXRhLmhlYXRtYXAudXBkYXRlQmFja2dyb3VuZChyZWR1Y2VNYXRyaXgoYm91bmRhcnlbZGF0YS5pZF0sIDEwKSxcbiAgICAgICAgc3RhdGUuZGlzY3JldGl6ZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHplcm9QYWQobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgcGFkID0gXCIwMDAwMDBcIjtcbiAgICByZXR1cm4gKHBhZCArIG4pLnNsaWNlKC1wYWQubGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbW1hcyhzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGh1bWFuUmVhZGFibGUobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbi50b0ZpeGVkKDMpO1xuICB9XG5cbiAgLy8gVXBkYXRlIGxvc3MgYW5kIGl0ZXJhdGlvbiBudW1iZXIuXG4gIGQzLnNlbGVjdChcIiNsb3NzLXRyYWluXCIpLnRleHQoaHVtYW5SZWFkYWJsZShsb3NzVHJhaW4pKTtcbiAgZDMuc2VsZWN0KFwiI2xvc3MtdGVzdFwiKS50ZXh0KGh1bWFuUmVhZGFibGUobG9zc1Rlc3QpKTtcbiAgZDMuc2VsZWN0KFwiI2l0ZXItbnVtYmVyXCIpLnRleHQoYWRkQ29tbWFzKHplcm9QYWQoaXRlcikpKTtcbiAgbGluZUNoYXJ0LmFkZERhdGFQb2ludChbbG9zc1RyYWluLCBsb3NzVGVzdF0pO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RJbnB1dElkcygpOiBzdHJpbmdbXSB7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IGlucHV0TmFtZSBpbiBJTlBVVFMpIHtcbiAgICBpZiAoc3RhdGVbaW5wdXROYW1lXSkge1xuICAgICAgcmVzdWx0LnB1c2goaW5wdXROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5wdXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gIGxldCBpbnB1dDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaW5wdXROYW1lIGluIElOUFVUUykge1xuICAgIGlmIChzdGF0ZVtpbnB1dE5hbWVdKSB7XG4gICAgICBpbnB1dC5wdXNoKElOUFVUU1tpbnB1dE5hbWVdLmYoeCwgeSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIG9uZVN0ZXAoKTogdm9pZCB7XG4gIGl0ZXIrKztcbiAgdHJhaW5EYXRhLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgbGV0IGlucHV0ID0gY29uc3RydWN0SW5wdXQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgIG5uLmJhY2tQcm9wKG5ldHdvcmssIHBvaW50LmxhYmVsLCBubi5FcnJvcnMuU1FVQVJFKTtcbiAgICBpZiAoKGkgKyAxKSAlIHN0YXRlLmJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgbm4udXBkYXRlV2VpZ2h0cyhuZXR3b3JrLCBzdGF0ZS5sZWFybmluZ1JhdGUsIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSk7XG4gICAgfVxuICB9KTtcbiAgLy8gQ29tcHV0ZSB0aGUgbG9zcy5cbiAgbG9zc1RyYWluID0gZ2V0TG9zcyhuZXR3b3JrLCB0cmFpbkRhdGEpO1xuICBsb3NzVGVzdCA9IGdldExvc3MobmV0d29yaywgdGVzdERhdGEpO1xuICB1cGRhdGVVSSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0V2VpZ2h0cyhuZXR3b3JrOiBubi5Ob2RlW11bXSk6IG51bWJlcltdIHtcbiAgbGV0IHdlaWdodHM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGxheWVySWR4ID0gMDsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aCAtIDE7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLm91dHB1dHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IG5vZGUub3V0cHV0c1tqXTtcbiAgICAgICAgd2VpZ2h0cy5wdXNoKG91dHB1dC53ZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gd2VpZ2h0cztcbn1cblxuZnVuY3Rpb24gcmVzZXQob25TdGFydHVwPWZhbHNlKSB7XG4gIGxpbmVDaGFydC5yZXNldCgpO1xuICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgaWYgKCFvblN0YXJ0dXApIHtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICB9XG4gIHBsYXllci5wYXVzZSgpO1xuXG4gIGQzLnNlbGVjdChcIiNudW0tbGF5ZXJzXCIpLnRleHQoc3RhdGUubnVtSGlkZGVuTGF5ZXJzKTtcblxuICBpZiAoY29udGVudHMuY3VycmVudExhbmcoKSA9PSBcImphXCIpIHtcbiAgICBpZiAoc3RhdGUubnVtSGlkZGVuTGF5ZXJzID09IDAgfHwgc3RhdGUubnVtSGlkZGVuTGF5ZXJzID49IDEwKSB7XG4gICAgICBkMy5zZWxlY3QoXCIjbGF5ZXJzLWxhYmVsXCIpLnRleHQoXCLlgIvjga7pmqDjgZflsaRcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZDMuc2VsZWN0KFwiI2xheWVycy1sYWJlbFwiKS50ZXh0KFwi44Gk44Gu6Zqg44GX5bGkXCIpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBsZXQgc3VmZml4ID0gc3RhdGUubnVtSGlkZGVuTGF5ZXJzICE9PSAxID8gXCJzXCIgOiBcIlwiO1xuICAgIGQzLnNlbGVjdChcIiNsYXllcnMtbGFiZWxcIikudGV4dChcIkhpZGRlbiBsYXllclwiICsgc3VmZml4KTtcbiAgfVxuXG4gIC8vIE1ha2UgYSBzaW1wbGUgbmV0d29yay5cbiAgaXRlciA9IDA7XG4gIGxldCBudW1JbnB1dHMgPSBjb25zdHJ1Y3RJbnB1dCgwICwgMCkubGVuZ3RoO1xuICBsZXQgc2hhcGUgPSBbbnVtSW5wdXRzXS5jb25jYXQoc3RhdGUubmV0d29ya1NoYXBlKS5jb25jYXQoWzFdKTtcbiAgbGV0IG91dHB1dEFjdGl2YXRpb24gPSAoc3RhdGUucHJvYmxlbSA9PSBQcm9ibGVtLlJFR1JFU1NJT04pID9cbiAgICAgIG5uLkFjdGl2YXRpb25zLkxJTkVBUiA6IG5uLkFjdGl2YXRpb25zLlRBTkg7XG4gIG5ldHdvcmsgPSBubi5idWlsZE5ldHdvcmsoc2hhcGUsIHN0YXRlLmFjdGl2YXRpb24sIG91dHB1dEFjdGl2YXRpb24sXG4gICAgICBzdGF0ZS5yZWd1bGFyaXphdGlvbiwgY29uc3RydWN0SW5wdXRJZHMoKSwgc3RhdGUuaW5pdFplcm8pO1xuICBsb3NzVHJhaW4gPSBnZXRMb3NzKG5ldHdvcmssIHRyYWluRGF0YSk7XG4gIGxvc3NUZXN0ID0gZ2V0TG9zcyhuZXR3b3JrLCB0ZXN0RGF0YSk7XG4gIGRyYXdOZXR3b3JrKG5ldHdvcmspO1xuICB1cGRhdGVVSSh0cnVlKTtcbn07XG5cbmZ1bmN0aW9uIGluaXRUdXRvcmlhbCgpIHtcbiAgaWYgKHN0YXRlLnR1dG9yaWFsID09IG51bGwgfHwgc3RhdGUudHV0b3JpYWwgPT0gJycgfHwgc3RhdGUuaGlkZVRleHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gUmVtb3ZlIGFsbCBvdGhlciB0ZXh0LlxuICBkMy5zZWxlY3RBbGwoXCJhcnRpY2xlIGRpdi5sLS1ib2R5XCIpLnJlbW92ZSgpO1xuICBsZXQgdHV0b3JpYWwgPSBkMy5zZWxlY3QoXCJhcnRpY2xlXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsLS1ib2R5XCIpO1xuICAvLyBJbnNlcnQgdHV0b3JpYWwgdGV4dC5cbiAgZDMuaHRtbChgdHV0b3JpYWxzLyR7c3RhdGUudHV0b3JpYWx9Lmh0bWxgLCAoZXJyLCBodG1sRnJhZ21lbnQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgICg8YW55PnR1dG9yaWFsLm5vZGUoKSkuYXBwZW5kQ2hpbGQoaHRtbEZyYWdtZW50KTtcbiAgICAvLyBJZiB0aGUgdHV0b3JpYWwgaGFzIGEgPHRpdGxlPiB0YWcsIHNldCB0aGUgcGFnZSB0aXRsZSB0byB0aGF0LlxuICAgIGxldCB0aXRsZSA9IHR1dG9yaWFsLnNlbGVjdChcInRpdGxlXCIpO1xuICAgIGlmICh0aXRsZS5zaXplKCkpIHtcbiAgICAgIGQzLnNlbGVjdChcImhlYWRlciBoMVwiKS5zdHlsZSh7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjIwcHhcIixcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IFwiMjBweFwiLFxuICAgICAgfSlcbiAgICAgIC50ZXh0KHRpdGxlLnRleHQoKSk7XG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlLnRleHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3RGF0YXNldFRodW1ibmFpbHMoKSB7XG4gIGZ1bmN0aW9uIHJlbmRlclRodW1ibmFpbChjYW52YXMsIGRhdGFHZW5lcmF0b3IpIHtcbiAgICBsZXQgdyA9IDEwMDtcbiAgICBsZXQgaCA9IDEwMDtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoKTtcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGRhdGEgPSBkYXRhR2VuZXJhdG9yKDIwMCwgMCk7XG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JTY2FsZShkLmxhYmVsKTtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QodyAqIChkLnggKyA2KSAvIDEyLCBoICogKGQueSArIDYpIC8gMTIsIDQsIDQpO1xuICAgIH0pO1xuICAgIGQzLnNlbGVjdChjYW52YXMucGFyZW50Tm9kZSkuc3R5bGUoXCJkaXNwbGF5XCIsIG51bGwpO1xuICB9XG4gIGQzLnNlbGVjdEFsbChcIi5kYXRhc2V0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cbiAgaWYgKHN0YXRlLnByb2JsZW0gPT0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTikge1xuICAgIGZvciAobGV0IGRhdGFzZXQgaW4gZGF0YXNldHMpIHtcbiAgICAgIGxldCBjYW52YXM6IGFueSA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgY2FudmFzW2RhdGEtZGF0YXNldD0ke2RhdGFzZXR9XWApO1xuICAgICAgbGV0IGRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0c1tkYXRhc2V0XTtcbiAgICAgIHJlbmRlclRodW1ibmFpbChjYW52YXMsIGRhdGFHZW5lcmF0b3IpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhdGUucHJvYmxlbSA9PSBQcm9ibGVtLlJFR1JFU1NJT04pIHtcbiAgICBmb3IgKGxldCByZWdEYXRhc2V0IGluIHJlZ0RhdGFzZXRzKSB7XG4gICAgICBsZXQgY2FudmFzOiBhbnkgPVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGNhbnZhc1tkYXRhLXJlZ0RhdGFzZXQ9JHtyZWdEYXRhc2V0fV1gKTtcbiAgICAgIGxldCBkYXRhR2VuZXJhdG9yID0gcmVnRGF0YXNldHNbcmVnRGF0YXNldF07XG4gICAgICByZW5kZXJUaHVtYm5haWwoY2FudmFzLCBkYXRhR2VuZXJhdG9yKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUNvbnRyb2xzKCkge1xuICAvLyBTZXQgZGlzcGxheTpub25lIHRvIGFsbCB0aGUgVUkgZWxlbWVudHMgdGhhdCBhcmUgaGlkZGVuLlxuICBsZXQgaGlkZGVuUHJvcHMgPSBzdGF0ZS5nZXRIaWRkZW5Qcm9wcygpO1xuICBoaWRkZW5Qcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGxldCBjb250cm9scyA9IGQzLnNlbGVjdEFsbChgLnVpLSR7cHJvcH1gKTtcbiAgICBpZiAoY29udHJvbHMuc2l6ZSgpID09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihgMCBodG1sIGVsZW1lbnRzIGZvdW5kIHdpdGggY2xhc3MgLnVpLSR7cHJvcH1gKTtcbiAgICB9XG4gICAgY29udHJvbHMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgfSk7XG5cbiAgLy8gQWxzbyBhZGQgY2hlY2tib3ggZm9yIGVhY2ggaGlkYWJsZSBjb250cm9sIGluIHRoZSBcInVzZSBpdCBpbiBjbGFzc3JvbVwiXG4gIC8vIHNlY3Rpb24uXG4gIGxldCBoaWRlQ29udHJvbHMgPSBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9sc1wiKTtcbiAgSElEQUJMRV9DT05UUk9MUy5mb3JFYWNoKChbdGV4dCwgaWRdKSA9PiB7XG4gICAgbGV0IGxhYmVsID0gaGlkZUNvbnRyb2xzLmFwcGVuZChcImxhYmVsXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiKTtcbiAgICBsZXQgaW5wdXQgPSBsYWJlbC5hcHBlbmQoXCJpbnB1dFwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIGNsYXNzOiBcIm1kbC1jaGVja2JveF9faW5wdXRcIixcbiAgICAgIH0pO1xuICAgIGlmIChoaWRkZW5Qcm9wcy5pbmRleE9mKGlkKSA9PSAtMSkge1xuICAgICAgaW5wdXQuYXR0cihcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgICBpbnB1dC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlLnNldEhpZGVQcm9wZXJ0eShpZCwgIXRoaXMuY2hlY2tlZCk7XG4gICAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgICBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9scy1saW5rXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfSk7XG4gICAgbGFiZWwuYXBwZW5kKFwic3BhblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1jaGVja2JveF9fbGFiZWwgbGFiZWxcIilcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9KTtcbiAgZDMuc2VsZWN0KFwiLmhpZGUtY29udHJvbHMtbGlua1wiKVxuICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF0YShmaXJzdFRpbWUgPSBmYWxzZSkge1xuICBpZiAoIWZpcnN0VGltZSkge1xuICAgIC8vIENoYW5nZSB0aGUgc2VlZC5cbiAgICBzdGF0ZS5zZWVkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDUpO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICBsZXQgbnVtU2FtcGxlcyA9IChzdGF0ZS5wcm9ibGVtID09IFByb2JsZW0uUkVHUkVTU0lPTikgP1xuICAgICAgTlVNX1NBTVBMRVNfUkVHUkVTUyA6IE5VTV9TQU1QTEVTX0NMQVNTSUZZO1xuICBsZXQgZ2VuZXJhdG9yID0gc3RhdGUucHJvYmxlbSA9PSBQcm9ibGVtLkNMQVNTSUZJQ0FUSU9OID9cbiAgICAgIHN0YXRlLmRhdGFzZXQgOiBzdGF0ZS5yZWdEYXRhc2V0O1xuICBsZXQgZGF0YSA9IGdlbmVyYXRvcihudW1TYW1wbGVzLCBzdGF0ZS5ub2lzZSAvIDEwMCk7XG4gIC8vIFNodWZmbGUgdGhlIGRhdGEgaW4tcGxhY2UuXG4gIHNodWZmbGUoZGF0YSk7XG4gIC8vIFNwbGl0IGludG8gdHJhaW4gYW5kIHRlc3QgZGF0YS5cbiAgbGV0IHNwbGl0SW5kZXggPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoICogc3RhdGUucGVyY1RyYWluRGF0YSAvIDEwMCk7XG4gIHRyYWluRGF0YSA9IGRhdGEuc2xpY2UoMCwgc3BsaXRJbmRleCk7XG4gIHRlc3REYXRhID0gZGF0YS5zbGljZShzcGxpdEluZGV4KTtcbiAgaGVhdE1hcC51cGRhdGVQb2ludHModHJhaW5EYXRhKTtcbiAgaGVhdE1hcC51cGRhdGVUZXN0UG9pbnRzKHN0YXRlLnNob3dUZXN0RGF0YSA/IHRlc3REYXRhIDogW10pO1xufVxuXG5sZXQgZmlyc3RJbnRlcmFjdGlvbiA9IHRydWU7XG5sZXQgcGFyYW1ldGVyc0NoYW5nZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXNlckhhc0ludGVyYWN0ZWQoKSB7XG4gIGlmICghZmlyc3RJbnRlcmFjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdEludGVyYWN0aW9uID0gZmFsc2U7XG4gIGxldCBwYWdlID0gJ2luZGV4JztcbiAgaWYgKHN0YXRlLnR1dG9yaWFsICE9IG51bGwgJiYgc3RhdGUudHV0b3JpYWwgIT0gJycpIHtcbiAgICBwYWdlID0gYC92L3R1dG9yaWFscy8ke3N0YXRlLnR1dG9yaWFsfWA7XG4gIH1cbiAgdHJ5e1xuICAgIGdhKCdzZXQnLCAncGFnZScsIHBhZ2UpO1xuICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgeydzZXNzaW9uQ29udHJvbCc6ICdzdGFydCd9KTtcbiAgfVxuICBjYXRjaChlKXt9XG59XG5cbmZ1bmN0aW9uIHNpbXVsYXRpb25TdGFydGVkKCkge1xuICB0cnl7XG4gICAgZ2EoJ3NlbmQnLCB7XG4gICAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgICAgZXZlbnRDYXRlZ29yeTogJ1N0YXJ0aW5nIFNpbXVsYXRpb24nLFxuICAgICAgZXZlbnRBY3Rpb246IHBhcmFtZXRlcnNDaGFuZ2VkID8gJ2NoYW5nZWQnIDogJ3VuY2hhbmdlZCcsXG4gICAgICBldmVudExhYmVsOiBzdGF0ZS50dXRvcmlhbCA9PSBudWxsID8gJycgOiBzdGF0ZS50dXRvcmlhbFxuICAgIH0pO1xuICB9XG4gIGNhdGNoKGUpe31cbiAgcGFyYW1ldGVyc0NoYW5nZWQgPSBmYWxzZTtcbn1cblxuZHJhd0RhdGFzZXRUaHVtYm5haWxzKCk7XG5pbml0VHV0b3JpYWwoKTtcbm1ha2VHVUkoKTtcbmdlbmVyYXRlRGF0YSh0cnVlKTtcbnJlc2V0KHRydWUpO1xuaGlkZUNvbnRyb2xzKCk7XG5cbi8vIEFkZGl0aW9uYWwgY29udGVudFxuY29udGVudHMuaW5pdChzdGF0ZS5sYW5nKTtcbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0ICogYXMgbm4gZnJvbSBcIi4vbm5cIjtcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSBcIi4vZGF0YXNldFwiO1xuXG4vKiogU3VmZml4IGFkZGVkIHRvIHRoZSBzdGF0ZSB3aGVuIHN0b3JpbmcgaWYgYSBjb250cm9sIGlzIGhpZGRlbiBvciBub3QuICovXG5jb25zdCBISURFX1NUQVRFX1NVRkZJWCA9IFwiX2hpZGVcIjtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIGFjdGl2YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCBhY3RpdmF0aW9uczoge1trZXk6IHN0cmluZ106IG5uLkFjdGl2YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwicmVsdVwiOiBubi5BY3RpdmF0aW9ucy5SRUxVLFxuICBcInRhbmhcIjogbm4uQWN0aXZhdGlvbnMuVEFOSCxcbiAgXCJzaWdtb2lkXCI6IG5uLkFjdGl2YXRpb25zLlNJR01PSUQsXG4gIFwibGluZWFyXCI6IG5uLkFjdGl2YXRpb25zLkxJTkVBUlxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucy4gKi9cbmV4cG9ydCBsZXQgcmVndWxhcml6YXRpb25zOiB7W2tleTogc3RyaW5nXTogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwibm9uZVwiOiBudWxsLFxuICBcIkwxXCI6IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEsXG4gIFwiTDJcIjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMlxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gZGF0YXNldCBuYW1lcyBhbmQgZnVuY3Rpb25zIHRoYXQgZ2VuZXJhdGUgY2xhc3NpZmljYXRpb24gZGF0YS4gKi9cbmV4cG9ydCBsZXQgZGF0YXNldHM6IHtba2V5OiBzdHJpbmddOiBkYXRhc2V0LkRhdGFHZW5lcmF0b3J9ID0ge1xuICBcImNpcmNsZVwiOiBkYXRhc2V0LmNsYXNzaWZ5Q2lyY2xlRGF0YSxcbiAgXCJ4b3JcIjogZGF0YXNldC5jbGFzc2lmeVhPUkRhdGEsXG4gIFwiZ2F1c3NcIjogZGF0YXNldC5jbGFzc2lmeVR3b0dhdXNzRGF0YSxcbiAgXCJzcGlyYWxcIjogZGF0YXNldC5jbGFzc2lmeVNwaXJhbERhdGEsXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBkYXRhc2V0IG5hbWVzIGFuZCBmdW5jdGlvbnMgdGhhdCBnZW5lcmF0ZSByZWdyZXNzaW9uIGRhdGEuICovXG5leHBvcnQgbGV0IHJlZ0RhdGFzZXRzOiB7W2tleTogc3RyaW5nXTogZGF0YXNldC5EYXRhR2VuZXJhdG9yfSA9IHtcbiAgXCJyZWctcGxhbmVcIjogZGF0YXNldC5yZWdyZXNzUGxhbmUsXG4gIFwicmVnLWdhdXNzXCI6IGRhdGFzZXQucmVncmVzc0dhdXNzaWFuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RnJvbVZhbHVlKG9iajogYW55LCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHMuc3Vic3RyKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xufVxuXG5mdW5jdGlvbiBnZXRIaWRlUHJvcHMob2JqOiBhbnkpOiBzdHJpbmdbXSB7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKGVuZHNXaXRoKHByb3AsIEhJREVfU1RBVEVfU1VGRklYKSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGRhdGEgdHlwZSBvZiBhIHN0YXRlIHZhcmlhYmxlLiBVc2VkIGZvciBkZXRlcm1pbmluZyB0aGVcbiAqIChkZSlzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGVudW0gVHlwZSB7XG4gIFNUUklORyxcbiAgTlVNQkVSLFxuICBBUlJBWV9OVU1CRVIsXG4gIEFSUkFZX1NUUklORyxcbiAgQk9PTEVBTixcbiAgT0JKRUNUXG59XG5cbmV4cG9ydCBlbnVtIFByb2JsZW0ge1xuICBDTEFTU0lGSUNBVElPTixcbiAgUkVHUkVTU0lPTlxufVxuXG5leHBvcnQgbGV0IHByb2JsZW1zID0ge1xuICBcImNsYXNzaWZpY2F0aW9uXCI6IFByb2JsZW0uQ0xBU1NJRklDQVRJT04sXG4gIFwicmVncmVzc2lvblwiOiBQcm9ibGVtLlJFR1JFU1NJT05cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFR5cGU7XG4gIGtleU1hcD86IHtba2V5OiBzdHJpbmddOiBhbnl9O1xufTtcblxuLy8gQWRkIHRoZSBHVUkgc3RhdGUuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIFBST1BTOiBQcm9wZXJ0eVtdID0gW1xuICAgIHtuYW1lOiBcImFjdGl2YXRpb25cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogYWN0aXZhdGlvbnN9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ3VsYXJpemF0aW9uc30sXG4gICAge25hbWU6IFwiYmF0Y2hTaXplXCIsIHR5cGU6IFR5cGUuTlVNQkVSfSxcbiAgICB7bmFtZTogXCJkYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IGRhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJyZWdEYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ0RhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJsZWFybmluZ1JhdGVcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwibm9pc2VcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIm5ldHdvcmtTaGFwZVwiLCB0eXBlOiBUeXBlLkFSUkFZX05VTUJFUn0sXG4gICAge25hbWU6IFwic2VlZFwiLCB0eXBlOiBUeXBlLlNUUklOR30sXG4gICAge25hbWU6IFwic2hvd1Rlc3REYXRhXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiZGlzY3JldGl6ZVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInBlcmNUcmFpbkRhdGFcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInhcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJ5XCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwieFRpbWVzWVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInhTcXVhcmVkXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwieVNxdWFyZWRcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJjb3NYXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwic2luWFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImNvc1lcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJzaW5ZXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiY29sbGVjdFN0YXRzXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwidHV0b3JpYWxcIiwgdHlwZTogVHlwZS5TVFJJTkd9LFxuICAgIHtuYW1lOiBcInByb2JsZW1cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogcHJvYmxlbXN9LFxuICAgIHtuYW1lOiBcImluaXRaZXJvXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiaGlkZVRleHRcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJsYW5nXCIsIHR5cGU6IFR5cGUuU1RSSU5HfVxuICBdO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgbGVhcm5pbmdSYXRlID0gMC4wMztcbiAgcmVndWxhcml6YXRpb25SYXRlID0gMDtcbiAgc2hvd1Rlc3REYXRhID0gZmFsc2U7XG4gIG5vaXNlID0gMDtcbiAgYmF0Y2hTaXplID0gMTA7XG4gIGRpc2NyZXRpemUgPSBmYWxzZTtcbiAgdHV0b3JpYWw6IHN0cmluZyA9IG51bGw7XG4gIHBlcmNUcmFpbkRhdGEgPSA1MDtcbiAgYWN0aXZhdGlvbiA9IG5uLkFjdGl2YXRpb25zLlRBTkg7XG4gIHJlZ3VsYXJpemF0aW9uOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0gbnVsbDtcbiAgcHJvYmxlbSA9IFByb2JsZW0uQ0xBU1NJRklDQVRJT047XG4gIGluaXRaZXJvID0gZmFsc2U7XG4gIGhpZGVUZXh0ID0gZmFsc2U7XG4gIGNvbGxlY3RTdGF0cyA9IGZhbHNlO1xuICBudW1IaWRkZW5MYXllcnMgPSAxO1xuICBoaWRkZW5MYXllckNvbnRyb2xzOiBhbnlbXSA9IFtdO1xuICBuZXR3b3JrU2hhcGU6IG51bWJlcltdID0gWzQsIDJdO1xuICB4ID0gdHJ1ZTtcbiAgeSA9IHRydWU7XG4gIHhUaW1lc1kgPSBmYWxzZTtcbiAgeFNxdWFyZWQgPSBmYWxzZTtcbiAgeVNxdWFyZWQgPSBmYWxzZTtcbiAgY29zWCA9IGZhbHNlO1xuICBzaW5YID0gZmFsc2U7XG4gIGNvc1kgPSBmYWxzZTtcbiAgc2luWSA9IGZhbHNlO1xuICBkYXRhc2V0OiBkYXRhc2V0LkRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0LmNsYXNzaWZ5Q2lyY2xlRGF0YTtcbiAgcmVnRGF0YXNldDogZGF0YXNldC5EYXRhR2VuZXJhdG9yID0gZGF0YXNldC5yZWdyZXNzUGxhbmU7XG4gIHNlZWQ6IHN0cmluZztcbiAgbGFuZzogc3RyaW5nID0gXCJqYVwiO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgdGhlIHN0YXRlIGZyb20gdGhlIHVybCBoYXNoLlxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplU3RhdGUoKTogU3RhdGUge1xuICAgIGxldCBtYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChsZXQga2V5dmFsdWUgb2Ygd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkuc3BsaXQoXCImXCIpKSB7XG4gICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IGtleXZhbHVlLnNwbGl0KFwiPVwiKTtcbiAgICAgIG1hcFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBuYW1lIGluIG1hcCAmJiBtYXBbbmFtZV0gIT0gbnVsbCAmJiBtYXBbbmFtZV0udHJpbSgpICE9PSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlQXJyYXkodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiB2YWx1ZS50cmltKCkgPT09IFwiXCIgPyBbXSA6IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB9XG5cbiAgICAvLyBEZXNlcmlhbGl6ZSByZWd1bGFyIHByb3BlcnRpZXMuXG4gICAgU3RhdGUuUFJPUFMuZm9yRWFjaCgoe25hbWUsIHR5cGUsIGtleU1hcH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFR5cGUuT0JKRUNUOlxuICAgICAgICAgIGlmIChrZXlNYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBIGtleS12YWx1ZSBtYXAgbXVzdCBiZSBwcm92aWRlZCBmb3Igc3RhdGUgXCIgK1xuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzIG9mIHR5cGUgT2JqZWN0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpICYmIG1hcFtuYW1lXSBpbiBrZXlNYXApIHtcbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0ga2V5TWFwW21hcFtuYW1lXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuTlVNQkVSOlxuICAgICAgICAgIGlmIChoYXNLZXkobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRoZSArIG9wZXJhdG9yIGlzIGZvciBjb252ZXJ0aW5nIGEgc3RyaW5nIHRvIGEgbnVtYmVyLlxuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSArbWFwW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUeXBlLlNUUklORzpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IG1hcFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5CT09MRUFOOlxuICAgICAgICAgIGlmIChoYXNLZXkobmFtZSkpIHtcbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0gKG1hcFtuYW1lXSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5BUlJBWV9OVU1CRVI6XG4gICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IHBhcnNlQXJyYXkobWFwW25hbWVdKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5BUlJBWV9TVFJJTkc6XG4gICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IHBhcnNlQXJyYXkobWFwW25hbWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJFbmNvdW50ZXJlZCBhbiB1bmtub3duIHR5cGUgZm9yIGEgc3RhdGUgdmFyaWFibGVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZXNlcmlhbGl6ZSBzdGF0ZSBwcm9wZXJ0aWVzIHRoYXQgY29ycmVzcG9uZCB0byBoaWRpbmcgVUkgY29udHJvbHMuXG4gICAgZ2V0SGlkZVByb3BzKG1hcCkuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHN0YXRlW3Byb3BdID0gKG1hcFtwcm9wXSA9PT0gXCJ0cnVlXCIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0pO1xuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycyA9IHN0YXRlLm5ldHdvcmtTaGFwZS5sZW5ndGg7XG4gICAgaWYgKHN0YXRlLnNlZWQgPT0gbnVsbCkge1xuICAgICAgc3RhdGUuc2VlZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg1KTtcbiAgICB9XG4gICAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHRoZSBzdGF0ZSBpbnRvIHRoZSB1cmwgaGFzaC5cbiAgICovXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBTZXJpYWxpemUgcmVndWxhciBwcm9wZXJ0aWVzLlxuICAgIGxldCBwcm9wczogc3RyaW5nW10gPSBbXTtcbiAgICBTdGF0ZS5QUk9QUy5mb3JFYWNoKCh7bmFtZSwgdHlwZSwga2V5TWFwfSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgIC8vIERvbid0IHNlcmlhbGl6ZSBtaXNzaW5nIHZhbHVlcy5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBUeXBlLk9CSkVDVCkge1xuICAgICAgICB2YWx1ZSA9IGdldEtleUZyb21WYWx1ZShrZXlNYXAsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVHlwZS5BUlJBWV9OVU1CRVIgfHxcbiAgICAgICAgICB0eXBlID09PSBUeXBlLkFSUkFZX1NUUklORykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCIsXCIpO1xuICAgICAgfVxuICAgICAgcHJvcHMucHVzaChgJHtuYW1lfT0ke3ZhbHVlfWApO1xuICAgIH0pO1xuICAgIC8vIFNlcmlhbGl6ZSBwcm9wZXJ0aWVzIHRoYXQgY29ycmVzcG9uZCB0byBoaWRpbmcgVUkgY29udHJvbHMuXG4gICAgZ2V0SGlkZVByb3BzKHRoaXMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBwcm9wcy5wdXNoKGAke3Byb3B9PSR7dGhpc1twcm9wXX1gKTtcbiAgICB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHByb3BzLmpvaW4oXCImXCIpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYWxsIHRoZSBoaWRkZW4gcHJvcGVydGllcy4gKi9cbiAgZ2V0SGlkZGVuUHJvcHMoKTogc3RyaW5nW10ge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAoZW5kc1dpdGgocHJvcCwgSElERV9TVEFURV9TVUZGSVgpICYmIHRoaXNbcHJvcF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocHJvcC5yZXBsYWNlKEhJREVfU1RBVEVfU1VGRklYLCBcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXRIaWRlUHJvcGVydHkobmFtZTogc3RyaW5nLCBoaWRkZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzW25hbWUgKyBISURFX1NUQVRFX1NVRkZJWF0gPSBoaWRkZW47XG4gIH1cbn1cbiJdfQ==
