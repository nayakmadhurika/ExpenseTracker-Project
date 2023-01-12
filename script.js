function saveToLocalStorage(event) {
    event.preventDefault();
    const expenseAmount = event.target.expenseAmount.value;
    const expenseDesc = event.target.expenseDesc.value;
    const expenseCategory = event.target.expenseCategory.value;

    const obj = {
        expenseAmount,
        expenseDesc,
        expenseCategory
    }
    localStorage.setItem(obj.expenseDesc, JSON.stringify(obj))
    showNewUserOnScreen(obj)

    document.getElementById('eAmount').value = '';
    document.getElementById('eDesc').value = '';
    document.getElementById('eCategory').value = '';
}
function showNewUserOnScreen(obj){
    const parentItem = document.getElementById('listOfExpense')
    const childItem = document.createElement('li')
    childItem.textContent = obj.expenseAmount + " - " + obj.expenseDesc + " - " + obj.expenseCategory
    ;


    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.expenseDesc);
        parentItem.removeChild(childItem);
    }

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        document.querySelector('#eAmount').value  = obj.expenseAmount;
        document.querySelector('#eDesc').value  = obj.expenseDesc;
        document.querySelector('#eCategory').value  = obj.expenseCategory;
        localStorage.removeItem(obj.expenseDesc);
        parentItem.removeChild(childItem);

    }


    childItem.appendChild(deleteBtn);
    childItem.appendChild(editBtn);
    parentItem.appendChild(childItem);
}