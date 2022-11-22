import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
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
  // const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
//  wrapper.withRedux(MyApp);
