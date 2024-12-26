import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  /* 배경색 */
  background-color: #ffffff;
  /* 둥근 모서리 */
  border-radius: 16px;
  /* 내부 공간 */
  padding: 20px;
`;

const ExpenseItemList = styled.div`
  /* 가로 정렬 */
  display: flex;
  /* 세로 정렬로 변경 */
  flex-direction: column;
  /* 간격 */
  gap: 10px;
`;

const ExpenseItem = styled.div`
  /* 가로 정렬 */
  display: flex;
  /* 양쪽 끝 정렬 */
  justify-content: space-between;
  /* 교차축 정렬 */
  align-items: center;
  /* 내부 공간 */
  padding: 15px 20px;
  /* 둥근 모서리 */
  border-radius: 8px;
  /* 배경색 */
  background-color: #f9f9f9;
  /* 그림자 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* 호버 시 애니메이션 효과 */
  transition: transform 0.2s ease-in-out;
  /* 마우스 오버 시 포인터 표시 */
  cursor: pointer;
  /* 링크 밑줄 제거 */
  text-decoration: none;

  /* 호버 시 확대 */
  &:hover {
    transform: scale(1.02);
  }

  /* 자식 요소 */
  span {
    font-size: 16px;
    color: #333;
  }

  /* 마지막 자식 요소 */
  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

export default function ExpenseList({ expenses }) {
  return (
    <Section>
      <ExpenseItemList>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            as={Link}
            to={`/expenses/${expense.id}`}
          >
            <ExpenseDetails>
              <span>{expense.date}</span>
              <span>
                {expense.item} - {expense.description}
              </span>
            </ExpenseDetails>
            <span>{expense.amount} 원</span>
          </ExpenseItem>
        ))}
      </ExpenseItemList>
    </Section>
  );
}
