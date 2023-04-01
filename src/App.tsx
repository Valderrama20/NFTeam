import { Route, Routes } from 'react-router-dom';
import { Home, Test } from './pages';
import Navbar from './components/navbar/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Profile from './components/profile/Profile';

export default function App() {
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/test/:course" element={<Test />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}
