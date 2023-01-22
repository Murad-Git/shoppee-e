import Layout from '@/components/ui/Layout';
import { persistor, store } from '@/store/store';
import '@/styles/globals.scss';
import { Session } from 'next-auth/core/types';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <SnackbarProvider maxSnack={3}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
