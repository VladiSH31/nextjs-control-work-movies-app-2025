import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Find movies and TV shows on Watch Me. Enter your search query to get results.',
  keywords: ["search", "find movies", "find TV shows", "Watch Me"],
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