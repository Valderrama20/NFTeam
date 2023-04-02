import { Route, Routes } from 'react-router-dom';
import { Home, Test, Profile } from './pages';
import Navbar from './components/navbar/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Admin from './pages/Admin';

export default function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE__GRAPHQL_GATEWAY_BASE_URL,
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/test/:course" element={<Test />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}
