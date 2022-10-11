import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-app-5740e-default-rtdb.firebaseio.com";

export function StoreExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function getExpenses() {
  const resonse = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  console.log(resonse.data);

  // axios gives this data property
  for (const key in resonse.data) {
    const expenseObject = {
      id: key,
      amount: resonse.data[key].amount,
      date: new Date(resonse.data[key].date),
      description: resonse.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}
