const input = document.querySelector('.input');
const output = document.querySelector('.output');
const btnAdd = document.querySelector('.btn-add');

//Click button
btnAdd.addEventListener('click', function() {
    if (!input.value) return;
    createElements(input.value);
    input.value = '';
});

//Enter down
input.addEventListener('keydown', function(event) {
    if (!input.value) return;
    if (event.code === 'Enter') {
    createElements(input.value);
    input.value = '';
    }
});



function createElements(value) {

    const li = document.createElement('li');
    const btnClose = document.createElement('button');
    const btnEdit = document.createElement('img');
    const btnDone = document.createElement('img');
    const inputChange = document.createElement('input');

    li.className = 'list-group-item';

    btnClose.type = 'button';
    btnClose.classList = 'btn-close';

    btnEdit.src = 'img/edit.svg';
    btnEdit.type = 'button';
    btnEdit.className = 'btn-edit';

    btnDone.src = 'img/done.svg';
    btnDone.type = 'button';
    btnDone.className = 'btn-done';

    inputChange.type = 'text';
    inputChange.className = 'input-value';
    inputChange.setAttribute("disabled", "true");
    inputChange.value = value;


    btnClose.addEventListener('click', () => {
        output.removeChild(li)
    });

    btnDone.addEventListener('click', () => {
        btnDone.parentNode.className = 'list-group-item list-group-item-dark';
        output.append(btnDone.parentNode);
        
    });

    btnEdit.addEventListener('click', () => {
        inputChange.disabled = false;
        inputChange.addEventListener('keydown', (event) => {
            if (event.code === 'Enter') inputChange.disabled = true;
        });

    });

    li.append(btnClose);
    li.append(btnEdit);
    li.append(btnDone);
    li.append(inputChange);
    output.prepend(li);

}

console.log('hi');
console.log('hi');
console.log('hi');
console.log('hdfghlkjdfgklhjfdgh');