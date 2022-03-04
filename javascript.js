/*
bmi calculator by using objects


*/

const Samuel = {
    firstname: "Samuel",
    mass: 75,
    height: 1.90
};

const Jeff = {
    firstname: "Jeff",
    mass: 78,
    height: 1.69,

    calcBmi: function() {  
        return this.bmi = this.mass / (this.height*this.height);
    },
};



console.log(Jeff.calcBmi());