import { useContext, useEffect } from "react";

import { ExepnsesContext } from "../store/Expenses-context";
import ExpenseOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/Date";
import { getExpenses } from "../utils/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExepnsesContext);

  useEffect(() => {
    async function getExpensesOuter() {
      const expenses = await getExpenses();
    }
    getExpensesOuter();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysago = getDateMinusDays(today, 7);

    return expense.date >= date7daysago && expense.date <= today;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensePeriod="Last 7 days"
      fallbackText={"No expenses registerd for the last 7 days."}
    />
  );
}

export default RecentExpenses;
