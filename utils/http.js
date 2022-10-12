import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-app-5740e-default-rtdb.firebaseio.com";

export async function StoreExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
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

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
