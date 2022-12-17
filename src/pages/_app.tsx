import { Layout } from '@/components/ui/Layout';
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
  // useEffect(() => {
  //   const loader = document.getElementById(`loader`);
  //   if (loader) {
  //     if (typeof window !== `undefined`) {
  //       loader.classList.add(`loader`);
  //     } else loader.classList.remove(`loader`);
  //     loader.classList.remove(`loader`);
  //   }
  // }, []);
  // const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <SessionProvider session={pageProps.session}>
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
