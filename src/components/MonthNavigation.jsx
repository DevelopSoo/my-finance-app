import styled from "styled-components";

const Section = styled.section`
  /* 배경색 */
  background-color: #ffffff;
  /* 둥근 모서리 */
  border-radius: 16px;
  /* 내부 공간 */
  padding: 20px;
`;

const MonthWrapper = styled.div`
  /* 가로 정렬 */
  display: flex;
  /* 화면이 줄어들 때 접힘 */
  flex-wrap: wrap;
  /* 간격 */
  gap: 20px;
  /* 중앙 정렬 */
  justify-content: center;
`;

const MonthButton = styled.button`
  /* 텍스트 정렬 */
  text-align: center;
  /* 폰트 패밀리 */
  font-family: serif;
  /* 폰트 크기 */
  font-size: 18px;
  /* 폰트 스타일 */
  font-style: normal;
  /* 폰트 두께 */
  font-weight: 600;
  /* 폰트 높이 */
  line-height: normal;
  /* 포인터 표시 */
  display: flex;
  /* 높이 */
  height: 60px;
  /* 내부 공간 */
  padding: 20px;
  /* 너비 */
  width: 104px;
  /* 가로 정렬 */
  justify-content: center;
  /* 세로 정렬 */
  align-items: center;
  /* 줄어들지 않게 하기 */
  flex-shrink: 0;
  /* props에 따라 글자 색상 변경 */
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  /* 둥근 모서리 */
  border-radius: 10px;
  /* 테두리 */
  border: none;
  /* 포인터 표시 */
  cursor: pointer;
  /* props에 따라 배경색 변경 */
  background: ${(props) => (!props.selected ? "#F6F7FA" : "#2EC4B6")};
  /* 호버 시 애니메이션 효과 */
  &:hover {
    /* 배경색 */
    background: #2ec4b6;
    /* 폰트 색상 */
    color: #fff;
  }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthNavigation() {
  return (
    <Section>
      <MonthWrapper>
        {MONTHS.map((element) => {
          return <MonthButton key={element}>{`${element}월`}</MonthButton>;
        })}
      </MonthWrapper>
    </Section>
  );
}
