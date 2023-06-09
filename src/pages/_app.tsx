import '~/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import { api } from '~/utils/api';

import { MantineProvider } from '@mantine/core';

import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type { Session } from "next-auth";
import type { AppProps } from "next/app";
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: "Poppins",
          colorScheme: "light",
          components: {
            Title: {
              styles: {
                root: {
                  fontWeight: 500,
                },
              },
            },
          },
        }}
      >
        <SessionProvider session={session as Session | null}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
