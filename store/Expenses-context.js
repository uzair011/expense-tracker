import { createContext, useReducer } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    description: "A Nike shoe",
    amount: 130.001,
    date: new Date("2022-01-31"),
  },
  {
    id: "e2",
    description: "A Shirt",
    amount: 99.95,
    date: new Date("2022-01-31"),
  },
  {
    id: "e3",
    description: "A Polo Shirt",
    amount: 75.0,
    date: new Date("2020-02-21"),
  },
  {
    id: "e4",
    description: "A plane ticket",
    amount: 1199.9,
    date: new Date("2021-12-31"),
  },
  {
    id: "e5",
    description: "House rent",
    amount: 3500,
    date: new Date("2021-07-23"),
  },
  {
    id: "e6",
    description: "A Coffee",
    amount: 4.99,
    date: new Date("2022-06-12"),
  },
  {
    id: "e7",
    description: "A pair of sunglass",
    amount: 99.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e8",
    description: "A Nike shoe",
    amount: 130.001,
    date: new Date("2022-01-31"),
  },
  {
    id: "e9",
    description: "A Shirt",
    amount: 99.95,
    date: new Date("2022-01-31"),
  },
  {
    id: "e10",
    description: "A Polo Shirt",
    amount: 75.0,
    date: new Date("2020-02-21"),
  },
  {
    id: "e11",
    description: "A plane ticket",
    amount: 1199.9,
    date: new Date("2021-12-31"),
  },
  {
    id: "e12",
    description: "House rent",
    amount: 3500,
    date: new Date("2021-07-23"),
  },
];

export const ExepnsesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random.toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
    case "DELETE":
    default:
      return state;
  }
}

function expensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return <ExepnsesContext.Provider>{children}</ExepnsesContext.Provider>;
}

export default expensesContextProvider;
