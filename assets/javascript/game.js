 
    var winCounter = 0;
    var lossCounter = 0;
    var counter = 0;
    var randomNumberToGuess = [];
    $("#wins").text(winCounter);
    $("#losses").text(lossCounter);

    function reset() {
        counter = 0;
        total = 0;
        randomNumberToGuess = null;
        initialize();
    }

    function initialize() {

        randomNumberToGuess = [Math.floor(Math.random() * 102) + 19];

        $("#number-to-guess").text(randomNumberToGuess);
    }

    initialize();

    var imageScore = [];
    for (var i = 0; i < 4; i++) {
        imageScore.push(Math.floor(Math.random() * 12) + 1);

    }

    $("#crystal1").on("click", function() {

        counter += imageScore[0];
        $(".total").text(counter);

        checkStatus();

    });

    $("#crystal2").on("click", function() {

        counter += imageScore[1];
        $(".total").text(counter);

        checkStatus();
    });

    $("#crystal3").on("click", function() {

        counter += imageScore[2];
        $(".total").text(counter);

        checkStatus();
    });

    $("#crystal4").on("click", function() {

        counter += imageScore[3];
        $(".total").text(counter);

        checkStatus();
    });

    function checkStatus() {
        if (counter == randomNumberToGuess) {
            winCounter++;
            $("#wins").text(winCounter);
            reset();
            counter = 0;
        } else if (counter > randomNumberToGuess) {
            lossCounter++;
            $("#losses").text(lossCounter);
            reset();

        }
    
    };
   