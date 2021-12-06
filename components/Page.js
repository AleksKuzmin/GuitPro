import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
   html {
     --black: #393939;
     --offWhite: #ededed;
     --maxWidth: 1000px;
     --bs 0 12px 24px 0 rgba(0,0,0,0.09);
     box-sizing: border-box;
   }
   *, *:before , *:after {
     box-sizing: inherit;
   }

   a:hover {
     text-decoration: underline;
   }
   
`;

const InnerStyles = styled.div`

max.width: var(--maxWidth);
margin: 0 auto;
padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles> 
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any
};
