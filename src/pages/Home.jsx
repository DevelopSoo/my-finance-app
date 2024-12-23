import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";

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
  return (
    <Container>
      <MonthNavigation />
      <CreateExpense />
      <ExpenseList />
    </Container>
  );
}

export default Home;
