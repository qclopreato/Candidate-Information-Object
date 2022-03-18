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

/*John's Information*/

document.getElementById(`submitJohn`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--john`).checked === true){
        document.getElementById(`salary--john--out`).innerHTML = `Salary Expectations: ` + information["John Smith"].salary;
    } if (document.getElementById(`experience--john`).checked === true){
        document.getElementById(`experience--john--out`).innerHTML = `Work Experience: ` + information["John Smith"].work_experience;
    } if (document.getElementById(`personality--john`).checked === true){
        document.getElementById(`personality--john--out`).innerHTML = `Personality: ` + information["John Smith"].personality;
    }    
});

document.getElementById(`resetJohn`).addEventListener(`click`, function(){
    document.getElementById(`salary--john`).checked = false;
    document.getElementById(`experience--john`).checked = false;
    document.getElementById(`personality--john`).checked = false;
    document.getElementById(`salary--john--out`).innerHTML = ``;
    document.getElementById(`experience--john--out`).innerHTML = ``;
    document.getElementById(`personality--john--out`).innerHTML = ``;
});

document.getElementById(`hireJohn`).addEventListener(`click`, function(){
    document.getElementById(`johnDiv`).style.background = `lightgreen`;
    document.getElementById(`maryDiv`).style.background = `lightcoral`;
    document.getElementById(`bobDiv`).style.background = `lightcoral`;

    document.getElementById(`submitJohn`).disabled = true;
    document.getElementById(`submitMary`).disabled = true;
    document.getElementById(`submitBob`).disabled = true;

    document.getElementById(`resetJohn`).disabled = true;
    document.getElementById(`resetMary`).disabled = true;
    document.getElementById(`resetBob`).disabled = true;

    document.getElementById(`hireJohn`).disabled = true;
    document.getElementById(`hireMary`).disabled = true;
    document.getElementById(`hireBob`).disabled = true;

    document.getElementById(`salary--john`).disabled = true;
    document.getElementById(`experience--john`).disabled = true;
    document.getElementById(`personality--john`).disabled = true;

    document.getElementById(`salary--mary`).disabled = true;
    document.getElementById(`experience--mary`).disabled = true;
    document.getElementById(`personality--mary`).disabled = true;

    document.getElementById(`salary--bob`).disabled = true;
    document.getElementById(`experience--bob`).disabled = true;
    document.getElementById(`personality--bob`).disabled = true;
});

/*End John's Information*/

/*Mary's Information*/

document.getElementById(`submitMary`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--mary`).checked === true){
        document.getElementById(`salary--mary--out`).innerHTML = `Salary Expectations: ` + information["Mary Jane"].salary;
    } if (document.getElementById(`experience--mary`).checked === true){
        document.getElementById(`experience--mary--out`).innerHTML = `Work Experience: ` + information["Mary Jane"].work_experience;
    } if (document.getElementById(`personality--mary`).checked === true){
        document.getElementById(`personality--mary--out`).innerHTML = `Personality: ` + information["Mary Jane"].personality;
    }
}); 

document.getElementById(`resetMary`).addEventListener(`click`, function(){
    document.getElementById(`salary--mary`).checked = false;
    document.getElementById(`experience--mary`).checked = false;
    document.getElementById(`personality--mary`).checked = false;
    document.getElementById(`salary--mary--out`).innerHTML = ``;
    document.getElementById(`experience--mary--out`).innerHTML = ``;
    document.getElementById(`personality--mary--out`).innerHTML = ``;
});

document.getElementById(`hireMary`).addEventListener(`click`, function(){
    document.getElementById(`johnDiv`).style.background = `lightcoral`;
    document.getElementById(`maryDiv`).style.background = `lightgreen`;
    document.getElementById(`bobDiv`).style.background = `lightcoral`;

    document.getElementById(`submitJohn`).disabled = true;
    document.getElementById(`submitMary`).disabled = true;
    document.getElementById(`submitBob`).disabled = true;

    document.getElementById(`resetJohn`).disabled = true;
    document.getElementById(`resetMary`).disabled = true;
    document.getElementById(`resetBob`).disabled = true;

    document.getElementById(`hireJohn`).disabled = true;
    document.getElementById(`hireMary`).disabled = true;
    document.getElementById(`hireBob`).disabled = true;

    document.getElementById(`salary--john`).disabled = true;
    document.getElementById(`experience--john`).disabled = true;
    document.getElementById(`personality--john`).disabled = true;

    document.getElementById(`salary--mary`).disabled = true;
    document.getElementById(`experience--mary`).disabled = true;
    document.getElementById(`personality--mary`).disabled = true;

    document.getElementById(`salary--bob`).disabled = true;
    document.getElementById(`experience--bob`).disabled = true;
    document.getElementById(`personality--bob`).disabled = true;
});

/*End Mary's Information*/

/*Bob's Information*/

document.getElementById(`submitBob`).addEventListener(`click`, function(){
    if (document.getElementById(`salary--bob`).checked === true){
        document.getElementById(`salary--bob--out`).innerHTML = `Salary Expectations: ` + information["Bob Ryan"].salary;
    } if (document.getElementById(`experience--bob`).checked === true){
        document.getElementById(`experience--bob--out`).innerHTML = `Work Experience: ` + information["Bob Ryan"].work_experience;
    } if (document.getElementById(`personality--bob`).checked === true){
        document.getElementById(`personality--bob--out`).innerHTML = `Personality: ` + information["Bob Ryan"].personality;
    }
});

document.getElementById(`resetBob`).addEventListener(`click`, function(){
    document.getElementById(`salary--bob`).checked = false;
    document.getElementById(`experience--bob`).checked = false;
    document.getElementById(`personality--bob`).checked = false;
    document.getElementById(`salary--bob--out`).innerHTML = ``;
    document.getElementById(`experience--bob--out`).innerHTML = ``;
    document.getElementById(`personality--bob--out`).innerHTML = ``;
});

document.getElementById(`hireBob`).addEventListener(`click`, function(){
    document.getElementById(`johnDiv`).style.background = `lightcoral`;
    document.getElementById(`maryDiv`).style.background = `lightcoral`;
    document.getElementById(`bobDiv`).style.background = `lightgreen`;

    document.getElementById(`submitJohn`).disabled = true;
    document.getElementById(`submitMary`).disabled = true;
    document.getElementById(`submitBob`).disabled = true;

    document.getElementById(`resetJohn`).disabled = true;
    document.getElementById(`resetMary`).disabled = true;
    document.getElementById(`resetBob`).disabled = true;

    document.getElementById(`hireJohn`).disabled = true;
    document.getElementById(`hireMary`).disabled = true;
    document.getElementById(`hireBob`).disabled = true;

    document.getElementById(`salary--john`).disabled = true;
    document.getElementById(`experience--john`).disabled = true;
    document.getElementById(`personality--john`).disabled = true;

    document.getElementById(`salary--mary`).disabled = true;
    document.getElementById(`experience--mary`).disabled = true;
    document.getElementById(`personality--mary`).disabled = true;

    document.getElementById(`salary--bob`).disabled = true;
    document.getElementById(`experience--bob`).disabled = true;
    document.getElementById(`personality--bob`).disabled = true;
});

/*End Bob's Information*/
