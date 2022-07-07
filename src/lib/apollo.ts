import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // TODO: 適切なuriに変更してください
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});
