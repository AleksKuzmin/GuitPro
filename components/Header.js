import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  /* background: black; */
  margin-left: 3rem;
  color: black;
  position: relative;
  z-index: 2;
  transform: skew(-5deg);
  a {
    padding: 1rem 1 rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 10px solid var(--black, black);
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <header>
        <div className="bar">
          <Logo>
            <Link href="/">
              <h1>GuitPro</h1>
            </Link>
          </Logo>
        </div>
        <div className="sub-bar">Search</div>
        <Nav />
      </header>
    </HeaderStyles>
  );
}
