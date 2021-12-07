import { useQuery } from "@apollo/client";
import { id } from "date-fns/locale";
import gql from "graphql-tag";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>loading...</p>;
  if (error) return <p> {error.message}</p>;

  return (
    <div>
      {data.allProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

//https://www.apollographql.com/docs/react/data/queries/