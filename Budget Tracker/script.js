document.getElementById("addBudgetBtn").onclick = addBudget;
document.getElementById("addExpenseBtn").onclick = addExpense;
document.getElementById("resetAllBtn").onclick = resetAll;


let totalBudget = 0;
let totalExpenses = 0;


function addBudget() 
{
  let budgetInput = document.getElementById("budgetInput");
  let amount = Number(budgetInput.value);

  if (amount <= 0) 
  {
    alert("Please Enter Valid Amount !")
  }

  totalBudget = amount;
  budgetInput.value = "";
  updateDisplay();
}

function addExpense() 
{
  let titleInput = document.getElementById("expenseTitleInput");
  let amountInput = document.getElementById("expenseAmountInput");

  let title = titleInput.value.trim();
  let amount = Number(amountInput.value);

  if (title === "") 
  {
    alert("Please Enter Expense Name");
    return;
  }

  if (amount <= 0) 
  {
    alert("Please Enter Valid Amount !");
    return;
  }


  let tableBody = document.getElementById("expenseTableBody");
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${amount}</td>
    <td class="text-end">
      <button class="btn btn-danger btn-sm py-0 px-2" onclick="removeExpense(this, ${amount})">
        Remove
      </button>
    </td>
  `;

tableBody.appendChild(row);

  totalExpenses = totalExpenses + amount;
  updateDisplay();
  titleInput.value = "";
  amountInput.value = "";
}




function removeExpense(buttonElement, amount) 
{
  let row = buttonElement.closest("tr");
  row.remove();

  totalExpenses = totalExpenses - amount;
  updateDisplay();
}

function updateDisplay() 
{
  let budgetLeft = totalBudget - totalExpenses;

  document.getElementById("totalBudgetDisplay").innerText = totalBudget;
  document.getElementById("totalExpensesDisplay").innerText = totalExpenses;
  document.getElementById("budgetLeftDisplay").innerText = budgetLeft;
}

function resetAll() 
{
  totalBudget = 0;
  totalExpenses = 0;
  document.getElementById("expenseTableBody").innerHTML = "";
  updateDisplay();
}
