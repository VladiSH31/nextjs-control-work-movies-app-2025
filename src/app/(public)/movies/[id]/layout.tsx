import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'metadata',
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