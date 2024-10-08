let totalbudget=0;
function addExpense(expense){
totalbudget=totalbudget+expense;
}
function getExpenseDetails(description, cost){
const descriptionvalue=description;
const costvalue=cost;
console.log(`${descriptionvalue}, ${costvalue}`);
}
function reset(){
    totalbudget=0;
    console.log`Total budget is now${totalbudget}`;
}
