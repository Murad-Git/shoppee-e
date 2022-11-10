import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { persistor, store } from '@/store/store';
import '@/styles/globals.scss';
import { Session } from 'next-auth/core/types';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
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
      <SessionProvider
        session={pageProps.session}
        basePath="https://shoppee-e-wnsg-git-master-murad-git.vercel.app/api/auth"
      >
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
