import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.danger ? "#ff4d4d" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.danger ? "#cc0000" : "#0056b3")};
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

export default function Detail() {
  return (
    <Container>
      <InputGroup>
        <label htmlFor="date">날짜</label>
        <input
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          value="2024-12-22"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="item">항목</label>
        <input type="text" id="item" placeholder="지출 항목" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="amount">금액</label>
        <input type="number" id="amount" placeholder="지출 금액" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">내용</label>
        <input type="text" id="description" placeholder="지출 내용" />
      </InputGroup>
      <ButtonGroup>
        <Button>수정</Button>
        <Button danger="true">삭제</Button>
        <BackButton>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
}
