/**
 * Created by Alberto Perales on 6/8/14.
 * Date: 6/8/2014
 * Assignment Duel1
 */

//self executing function
(function() {

    console.log("FIGHT!!!");
//player name
    var playerOneName = "Batman";
    var playerTwoName = "Spiderman";

//player damage
    var player1Damage = 20;
    var player2Damage = 20;

//player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 0;

    function fight() {
        console.log('in the fight function');
        alert(playerOneName + "." + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

        for (var i = 0; i < 10; i++) {
            //RANDOM FORMULA IS Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;

            // console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            console.log(playerOneName + ":" + playerOneHealth + "" + playerTwoName + ":" + playerTwoHealth);
//check for victor
            var results = winnerCheck();
            console.log(results);

            if (results === "no winner")
            {
                round++;
                alert(playerOneName + "." + playerOneHealth + " *ROUND* " + round + "*OVER*" + playerTwoName + ":" + playerTwoHealth);

            } else {
                alert(results);
                break;

            };



        };


    };


    function winnerCheck(){
        console.log("in winnerCheck FN");
    var result = "no winner";
    if (playerOneHealth < 1 && playerTwoHealth < 1)
    {
        result = "You Both Die";
    } else if (playerOneHealth < 1){
        result = playerTwoName + "WINS!!!"
    } else if (playerTwoHealth < 1)
    {
        result = playerOneName + "WINS!!!"
    };
    return result;

  };


    //Program starts
        console.log('program start')
    fight();


})();