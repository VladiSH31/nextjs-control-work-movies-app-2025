import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Browse popular movies, new releases, and top-rated films on Watch Me.',
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