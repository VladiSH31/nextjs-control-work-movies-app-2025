import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TV Shows',
  description: 'Explore popular, trending, and top-rated TV series on Watch Me.',
  keywords: ["TV shows", "series", "online streaming", "Watch Me"],
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