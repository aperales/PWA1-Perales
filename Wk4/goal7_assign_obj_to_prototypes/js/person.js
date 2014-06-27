//Alberto Perales 6/26/2014


//created by //Alberto Perales 6/26/2014


(function(){



    //Add persons object for main script file
    window.Person=Person;

    //finds all jobs that are possible for person
    Person.jobs = ["teacher","actor","student","pilot"];
    Person.actions = ["sleeping","eating","working"];

    function Person(name,row){
        console.log("Person Created: ", name);

        this.name = name;

        //sets action for individual person
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.lenght)];

        //sets job
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.lenght)];

        //code for row so file update

        this.row = row;

        //shows action
        var id = document.getElementById("r" + this.row + "c3");
        id.innerHTML = this.action;
    }

    //function randomly updates actiosn in occurance of 30 sec

    Person.prototype.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;

        }
    }

})();

