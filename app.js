/* ** Created by mfrancesca on 1/29/16.*/
$(document).ready(function() {

// HARD MODE - delete button that removes employee from the DOM. can leave the salary in the reported total

// PRO MODE - delete the employee and update the total salary

// create an empty array to hold each employee object
    var empArray = [];
// create empty object to store values
    var values = {};
// create variable to hold monthly salary
    var salaryMonthly = salaryMonthly;
// create variable to hold total of all employees salary
    var totalSalary = 0;


// what is this even doing? event listener for click of submit button
    $('#employeeForm').on('submit', function(e) {
        e.preventDefault();

// strips everything out of the form - .each is a built in for-loop - makes the property dynamically and copies it into the values object
// field.value, field.name - name & value are a property of the object
        $.each($('#employeeForm').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });

// logic that stores info in array
        empArray.push(values);
        console.log(empArray);

// calculate employee's monthly salary
        salaryMonthly = Math.round(parseFloat(values.yearlySalary / 12));
        //console.log(salaryMonthly);

// logic: calculate all employee salaries
// show monthly cost of salaries
// add monthly salary to total for all employees
        totalSalary += Math.round(parseFloat(salaryMonthly));
        //console.log(totalSalary);

// submit button clears out the form by looking for any input with the type of text in the employeeForm id, then putting an empty string into it
        $('#employeeForm').find('input[type=text]', 'input[type=number]').val('');
        $('#empFirstName').focus();

// delete employee info button
        // button.on click
        // remove that employee object from the array

        //function deleteEmp() {
        //    $('#container').delete(empArray);
        //}


// call to the function that writes to the DOM
        appendDom(values);
        //console.log(field);

    });

// delete employee from DOM
    $('#output').on('click', '#empDelete', function() {
        //var employee = $(this).data();
        //console.log(employee);
        var index = $(this).data().id;
        var employee = empArray[index];

        totalSalary -= employee.empSalary;
        totalSalary = Math.round(totalSalary / 12);
        updateSalary(totalSalary);

        $(this).parent().remove();

        console.log(employee);
    });


// function to update employee salary
    function upDateSalary(salary) {
        $('#salaryMonthly').text('$ ' + salary);
    }



// function to append employee info to the DOM
    function appendDom(empInfo) {
        // select a holding container that already exists. Put in an empty div.
        $('#output').append('<div><ul></ul></div>');
        // Select that container and have it grab it's last child and store it into the $el variable.
        var $el = $('#output').children().last();
        // store a remove button in the $btn variable
        //var $btn = $('<button class="remove">Remove</button>')
        //
        //$($btn).on('click', removeDom);


        // employee info appended to the DOM
        $el.append('<li><strong>Name:</strong> ' + empInfo.empFirstName + ' ' + empInfo.empLastName + '</li>');
        $el.append('<li><strong>Employee ID:</strong> ' + empInfo.id + '</li>');
        $el.append('<li><strong>Job Title:</strong> ' + empInfo.jobTitle + '</li>');
        $el.append('<li><strong>Yearly Salary:</strong> $' + empInfo.yearlySalary + '</li>');
        $el.append('<li><strong>Monthly Salary:</strong> $' + salaryMonthly + '</li>');
        $el.append('<li><strong>Total Company Salary Cost:</strong> $' + totalSalary + '</li>');
        //$el.append('<button id="empDelete">Remove Employee</button>');
        $el.append('<button id="empDelete" data-id="' + (empArray.length - 1) + '">Remove Employee</button>');

        //$el.append('<button id="empDelete">Delete this employee</button>');
    }
});

/* Solution

 salaryTotal += parseFloat(values.yearlySalary / 12);
 values.monthlySalary = parseFloat(values.yearlySalary);



 // to change styles on the fly
 if(salaryTotal > 100000) {
 $('#salaryAmount').removeClass('acceptable');
 $('#salaryAmount').addClass('warning');






 */



/*
 function removeDom(empInfo) {

 $('ul').parent.remove;

 }
 */
/*

 $(document).ready(function() {
 // selectors - chain them together
 //$('ul').css('background-color', 'yellow');
 //$('#example').css('background-color', 'red');
 //$('.myList').css('background-color', 'purple');
 //$('ul.myList >li').css('background-color', 'purple');
 //$('ul.innerList > li').css('background-color', 'yellow');
 //$('li'').find('p').css('background-color', 'yellow'); //find is all descendents
 //$('li').first('li').css('background-color', 'green');
 // this might not be correct syntax $('.myList p').parent().css('background-color', 'yellow');
 $('li').odd().css('background-color', 'yellow');

 });
 */

/* Second example
 $(document).ready(function() {

 function appendElf() {
 $('#container').append('<button class="legolas">Legolas</button>');
 }

 function elfClick() {
 $('#container').append('<div class="aragorn">Aragorn!</div>');
 }

 function shout() {
 alert("For the King!");
 }

 // set up event listeners
 $('#gimli').on('click', appendElf);
 $('#container').on('click', '#gimli', appendElf);
 $('#container').on('click', '.legolas', elfClick);
 $('')

 });


 */





