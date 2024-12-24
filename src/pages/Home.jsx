import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Container = styled.main`
  /* 최대 너비 */
  max-width: 800px;
  /* 너비 */
  width: 100%;
  /* 가로 정렬 */
  display: flex;
  /* 세로 정렬로 변경 */
  flex-direction: column;
  /* 간격 */
  gap: 20px;
  /* 중앙 정렬 */
  margin: 0 auto;
`;

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);
  // API 요청하는 방법
  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  // 여기서 필터링 한 후에 ExpenseList 컴포넌트에 넘겨줘야 함
  const filteredExpenses = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });

  console.log(filteredExpenses);
  return (
    <Container>
      <MonthNavigation
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
      <CreateExpense />
      <ExpenseList />
    </Container>
  );
}

export default Home;
