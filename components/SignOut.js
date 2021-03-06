import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import { useMutation } from "@apollo/client";

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;
export default function SignOut({ children }) {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button
      type="button"
      onClick={() => {
        console.log("signigin out"), signout();
      }}
    >
      Sign Out
    </button>
  );
}
