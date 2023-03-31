import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import Navbar from './components/navbar/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import useWallet from './hooks/useWallet';

export default function App() {
  const { address } = useWallet();

  const client = new ApolloClient({
    uri: 'https://kod-nft-certificates.gateway.cedalio.dev/',
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}
