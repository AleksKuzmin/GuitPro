import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  background: black;
  color: white;
`;
export default function Header() {
  return (
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
  );
}
