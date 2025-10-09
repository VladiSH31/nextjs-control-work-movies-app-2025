import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genres',
  description: 'Browse movies and TV shows by genre on Watch Me. Find your favorite categories.',
  keywords: ["genres", "movie genres", "TV show genres", "categories", "Watch Me"],
};

type Props = { children: React.ReactNode };
const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;