import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { useAppSelector } from '@/hooks/hooks';
import React from 'react';

export const Layout: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <>
      <Header />
      <main
        className={` transition-all duration-700 ${darkState ? `dark-bg` : ``}`}
      >
        {children}
      </main>
      <Footer className={`${darkState ? `dark-bg` : ``}`} />
    </>
  );
};
