import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
// import { wrapper } from '@/store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  // const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      {/* <Provider store={store}> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* </Provider> */}
    </>
  );
}
//  wrapper.withRedux(MyApp);
