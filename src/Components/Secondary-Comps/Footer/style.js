import styled from "styled-components";

export const Style = styled.div`
  background: red;
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
  .footer-container {
    .menu {
      .render-list {
        display: flex;
        gap:10px;
        li {
          display: flex;
          align-items:center;
          gap:10px;
          .icon {
            width:100px;
            height:25px;
            img{
                width:100%;
                height100%
            }
          }
          .title{
            background: pink;
            p{
                color:yellow;
                a{
                    color:green
                }
            }
            
        }
        }
       
      }
    }
  }
`;

export default Style;
