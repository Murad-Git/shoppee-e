import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { store } from '@/store/store';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';
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
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </SessionProvider>
    </>
  );
}
//  wrapper.withRedux(MyApp);
