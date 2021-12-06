import Page from "../components/Page";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};
export default withData(MyApp);

// https://griko.medium.com/exploring-undocumented-getinitialprops-properties-on-next-js-1265a6abc652
