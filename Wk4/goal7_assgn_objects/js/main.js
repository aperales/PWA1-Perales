//Alberto Perales 6/26/2014

(function(){
    //variables
    var numOfPeople = 5;
    var people = [];
    var names = ["Albert", "Aylee", "Bryanna", "Emma", "Debbie"];
    var interval;

    //loop instantiating 3 person.objects
    for (var i = 0; i < numOfPeople ; i++) {

        //given names a number of 5
        var personIndex = Math.floor(Math.random() * names.length);

        var person = new Person(names[personIndex], i + 1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }


    clearInterval(interval);

    //30 sec intervals

    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;

    }

    function runUpdate(){
        people.forEach(function(element){
            element.update();

        });
    }




})();
