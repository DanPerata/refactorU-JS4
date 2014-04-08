var disasterVictims = +prompt("How many disaster victims are there?");

var listOfVictims = [];

for(i=0; i<disasterVictims; i++){
	var victim = {
		name: prompt("Please enter victim's full name"),
		phoneNumber: prompt("Please enter victim's phoneNumber"),
		streetAddress: prompt("Please enter victim's street address")
	};
	listOfVictims.push(victim);
	
}

var volunteers = prompt("How many disaster volunteers are there?");

var listOfVolunteers = [];

for(i=0; i<volunteers; i++){
	var volunteer = {
		name: prompt("Please enter volunteers full name"),
		phoneNumber: prompt("Please enter volunteers's phoneNumber"),
		streetAddress: prompt("Please enter volunteers's street address")
	};
	listOfVolunteers.push(volunteer);
	
}




var nameOfVictim = [];
var VictimOutPut = "";

for(var i=0; i<listOfVictims.length; i++){
nameOfVictim.push(listOfVictims[i]["name"]);
}
var victimList = (VictimOutPut = nameOfVictim.join(", "));


var nameOfVolunteer = [];
var volunteerOutPut = "";

for(var i=0; i<listOfVolunteers.length; i++){
nameOfVolunteer.push(listOfVolunteers[i]["name"]);
}
var VolunteerNameList = (volunteerOutPut = nameOfVolunteer.join(", "));

alert("The number of victims is " + disasterVictims + ", the number of volunteers is " + volunteers + ". The victims are " + victimList + "\n" 
	+ " and the volunteers are " + VolunteerNameList + ".");
