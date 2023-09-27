
let container = document.getElementsByClassName('container');
let input = document.getElementById('inputField');
let button = document.querySelector('button');
let toDos = document.getElementById('toDoContainer');







button.addEventListener('click', function () {
    const trimmedValue = input.value.trim();
    if (trimmedValue.length >= 4 && trimmedValue.length < 20) {
        let toDo = input.value
        let item = document.createElement('p');
        item.innerHTML = toDo;
        toDos.appendChild(item)
        input.value = " ";
        item.style.textTransform = 'uppercase'
        item.style.fontFamily = " 'Phudu', cursive"
        item.style.cursor = 'pointer'
        item.style.fontSize = '15px'
        item.style.backgroundColor = '#edede9'
        item.style.borderRadius = '8px'
        item.style.padding = '7px'



        // to do strikethrough

        item.addEventListener('click', function () {
            item.style.textDecoration = "line-through"
        })
        item.addEventListener('dblclick', function () {
            item.remove()

        })

    } else if (trimmedValue.length === 0) {
        alert('Make sure you put something in the input box')



    }
    else {
        alert("Make sure the input is 4 to 19 characters long");
        input.value = " ";


    }
})
/* */

// Add an event listener for the "Enter" key press
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents the form submission (if it's inside a form)



        // Trim the input value to remove leading and trailing spaces
        const trimmedValue = input.value.trim();





        // Your code to handle the "Enter" key press here
        if (trimmedValue.length >= 5 && trimmedValue.length < 20) {
            let toDo = input.value
            let item = document.createElement('p');
            item.innerHTML = toDo;
            toDos.appendChild(item);
            input.value = " ";
            item.style.textTransform = 'uppercase';
            item.style.fontFamily = " 'Phudu', cursive";
            item.style.cursor = 'pointer';
            item.style.fontSize = '15px';
            item.style.backgroundColor = '#edede9';
            item.style.borderRadius = '8px';
            item.style.padding = '7px';

            // to-do strikethrough
            item.addEventListener('click', function () {
                item.style.textDecoration = "line-through";
            });
            item.addEventListener('dblclick', function () {
                item.remove();
            });
        } else if (trimmedValue.length === 0) {
            alert('Make sure you put something in the input box');
        } else {
            alert("Make sure the input is 4 to 19 characters long");
            input.value = " ";
        }
    }
});
