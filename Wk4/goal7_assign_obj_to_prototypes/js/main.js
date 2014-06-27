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
        this.action = Person.actions
    }
})
