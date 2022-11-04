import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { wrapper } from '@/store/store';

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
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
//  wrapper.withRedux(MyApp);
