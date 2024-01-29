import styled from "styled-components";
export const Style = styled.div`
  background: #000;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .menu {
    ul {
      display: flex;
      gap: 10px;
      li {
        color: red;
      }
    }
  }
`;
export default Style;
