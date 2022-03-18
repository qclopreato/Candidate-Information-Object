const information = {
    "John Smith": {
        name: `John Smith`,
        salary: `$45,000`,
        work_experience: `1 year of experience`,
        personality: `Introvert`
    },
    "Mary Jane": {
        name: `Mary Jane`,
        salary: `$55,000`,
        work_experience: `3 year of experience`,
        personality: `Extrovert`
    },
    "Bob Ryan": {
        name: `Bob Ryan`,
        salary: `$85,000`,
        work_experience: `25 year of experience`,
        personality: `Introvert`
    },
}; 

document.getElementById(`submitJohn`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--john`).checked === true){
        document.getElementById(`salary--john--out`).innerHTML = `Salary Expectations: ` + information["John Smith"].salary;
    } if (document.getElementById(`experience--john`).checked === true){
        document.getElementById(`experience--john--out`).innerHTML = `Work Experience: ` + information["John Smith"].work_experience;
    } if (document.getElementById(`personality--john`).checked === true){
        document.getElementById(`personality--john--out`).innerHTML = `Personality: ` + information["John Smith"].personality;
    }    
});

document.getElementById(`submitMary`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--mary`).checked === true){
        document.getElementById(`salary--mary--out`).innerHTML = `Salary Expectations: ` + information["Mary Jane"].salary;
    } if (document.getElementById(`experience--mary`).checked === true){
        document.getElementById(`experience--mary--out`).innerHTML = `Work Experience: ` + information["Mary Jane"].work_experience;
    } if (document.getElementById(`personality--mary`).checked === true){
        document.getElementById(`personality--mary--out`).innerHTML = `Personality: ` + information["Mary Jane"].personality;
    }
}); 

document.getElementById(`submitBob`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--bob`).checked === true){
        document.getElementById(`salary--bob--out`).innerHTML = `Salary Expectations: ` + information["Bob Ryan"].salary;
    } if (document.getElementById(`experience--mary`).checked === true){
        document.getElementById(`experience--bob--out`).innerHTML = `Work Experience: ` + information["Bob Ryan"].work_experience;
    } if (document.getElementById(`personality--bob`).checked === true){
        document.getElementById(`personality--bob--out`).innerHTML = `Personality: ` + information["Bob Ryan"].personality;
    }
});
