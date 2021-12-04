import PropTypes from "prop-types";
import Header from "./Header";
export default function Page({ children }) {
  return (
    <div>
      <Header />
      <p>i am the page part</p>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
