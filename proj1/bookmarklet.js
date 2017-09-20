javascript: function Gosling(i, g) {
    this.ratio = i, this.imageurl = g
}

function Randomize(i) {
    return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
    var g = i.height / i.width;
    return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
        init: function(i) {
            this.myGosling = i
        },
        horizontal: function() {
            return this.myGosling.filter(function(i) {
                return "horizontal" === i.ratio
            })
        },
        vertical: function() {
            return this.myGosling.filter(function(i) {
                return "vertical" === i.ratio
            })
        },
        square: function() {
            return this.myGosling.filter(function(i) {
                return "square" === i.ratio
            })
        }
    },
    myGosling = [
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz1.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz2.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz3.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz4.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz5.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz6.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz7.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz8.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz9.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz10.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz11.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz12.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz13.jpg"),
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz14.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz15.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz16.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz17.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz18.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz19.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz20.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz21.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz22.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz23.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz24.jpg"),
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz25.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz26.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz27.jpg"), 
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz28.jpg"),
    new Gosling("horizontal", "https://jtran2.github.io/proj1/animals/horiz29.jpg"),  

    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert1.jpg"), 
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert2.jpeg"), 
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert3.jpg"), 
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert4.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert5.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert6.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert7.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert8.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert9.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert10.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert11.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert12.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert13.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert14.jpg"),
    new Gosling("vertical", "https://jtran2.github.io/proj1/animals/vert15.jpg"),
 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square1.jpg"), 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square2.jpg"), 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square3.jpg"), 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square4.jpg"),
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square5.jpg"), 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square6.jpg"), 
    new Gosling("square", "https://jtran2.github.io/proj1/animals/square7.jpg"), 
];

! function(i) {
    getGosling.init(myGosling);
    for (var g = i.getElementsByTagName("*"), o = g.length, n = 0; o > n; n++) {
        var l = imageRatio(g[n]),
            t = Randomize(getGosling[l]()),
            e = getGosling[l]()[t];
        g[n].src = e.imageurl
    }

}(document);