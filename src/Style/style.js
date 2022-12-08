import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  min-height: 100vh;
`;

export const NavBar = styled.div`
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 50px;
`;

export const InputAreas = styled.form`
  display: flex;
  border-radius: 12px;
  background-color: #eeeeee;
  border: 1px solid #eee;
  gap: 20px;
  padding: 30px;
  justify-content: space-between;
  font-weight: 700;
`;

export const InputDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// export const InputAreas = styled.div``;
// export const InputAreas = styled.div``;
// export const InputAreas = styled.div``;
// export const InputAreas = styled.div``;
