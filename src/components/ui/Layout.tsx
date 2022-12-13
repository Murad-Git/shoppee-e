import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useAppSelector } from '@/types/hooks';
import { SnackbarProvider } from 'notistack';
import React from 'react';

export const Layout: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Header />
        <main
          className={` transition-all duration-700 ${
            darkState ? `dark-bg` : ``
          }`}
        >
          {children}
        </main>
        <Footer className={`${darkState ? `dark-bg` : ``}`} />
      </SnackbarProvider>
    </>
  );
};
