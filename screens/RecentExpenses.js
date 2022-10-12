import { useContext, useEffect, useState } from "react";

import { ExepnsesContext } from "../store/Expenses-context";
import ExpenseOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/Date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExepnsesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);

      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fecth expences!!!");
      }
      setIsFetching(false);
      // setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
