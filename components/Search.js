import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import { resetIdCounter, useCombobox } from "downshift";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";
import debounce from "lodash.debounce";
const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
export default function Search() {
  // https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery

  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );
  const items = data?.searchTerms || [];
  const findItemsWithDebounce = debounce(findItems, 350);

  resetIdCounter();
  const {
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items,
    onInputValueChange() {
      console.log("Input changed!");
      findItemsWithDebounce({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange() {
      console.log("Selected Item change!");
    },
  });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for a guitar",
            id: "search",
            className: loading ? "loading" : "",
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {items.map((item) => (
          <DropDownItem key={item.id} {...getItemProps({ item })}>
            <img
              src={item.photo.image.publicUrlTransformed}
              alt={item.name}
              width="50"
            />
            {item.name}
          </DropDownItem>
        ))}
      </DropDown>
    </SearchStyles>
  );
}
