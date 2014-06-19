/**
 * Created by Alberto Perales  on 6/18/14.
 */
(function() {

    console.log(" ** Fight **"); //Print Title to console

    //DEFINE DOM Parts
    var fighter1_txt = document.querySelector("#ww").querySelector("p");
    var fighter2_txt = document.querySelector("bw").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    console.log()

    //Set up click event
    button.addEventListener("click", fight, false);

    //Array for both fighters
    var fighters = [
        {
            name: "WonderWoman",
            damage: 20,
            health: 100

        },
        {
            name: "BlackWidow",
            damage: 20,
            health: 100
        }];
    var round = 1;

    //Intitialize DOM innerHTML text fot top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    //FIGHT function
    function fight(){

        //alert(fighters[0].name+":"+fighters[0].health+"  *START*  "+fighters[1].name+':'+fighters[1].health);
        fighter1_txt.innerHTML = figthers[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

            //damage
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

            //inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;

            console.log(fighters[0].health, fighters[1].health);

            //check for winning fighter
            var result = winnerCheck();
            console.log(result);

            round_txt.innerHTML = "ROUND #" + round + " Results:";
            round++;
            if (result === "no winner")
            {
                fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

            } else{
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                //DIsable button
                button.removeEventListener("click", fight, false);

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
            }
    }

    function winnerCheck() {
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
    }



}




