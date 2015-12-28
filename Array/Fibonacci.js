var Fibonacci = function(){
    var looping = function(n) {
        var a = 0, b = 1, f = 1;
        for (var i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f;
    };

    var recursive = function(n) {
        if(n <= 2) {
            return 1;
        } else {
            return this.recursive(n - 1) + this.recursive(n - 2);
        }
    };

    return{
        looping:looping,
        recursive:recursive

    }
}

module.exports = Fibonacci;