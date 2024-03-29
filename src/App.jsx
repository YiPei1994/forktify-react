import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Forkify from './components/Forkify';
import { ForkifyContextProvider } from './contexts/ForkifyContexts';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient({
  defaultOptions: {},
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <ForkifyContextProvider>
          <Forkify />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              sucess: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700)',
              },
            }}
          />{' '}
        </ForkifyContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
