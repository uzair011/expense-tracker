import { useContext } from "react";
import ExpenseOutput from "../components/expensesOutput/ExpensesOutput";

import { ExepnsesContext } from "../store/Expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExepnsesContext);
  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensePeriod="All expenses"
      fallbackText={"No registerd expenses found!"}
    />
  );
}

export default AllExpenses;
