import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../tailwind.config';
import { CartProvider } from '../hooks/useCard';
import { LangProvider } from '../hooks/useLang';
import { SidebarProvider } from '../hooks/useSidebar';
import { ToastProvider } from '../hooks/useToast';
import { queryClient } from '../services/queryClient';
import '../styles/carrousel.css';
import '../styles/globals.css';
import GlobalStyle from "../styles/globalStyled";

import { AuthProvider } from '../hooks/useAuth';
import { MpProvider } from '../hooks/useMercadoPago';
import { ScriptProvider } from '../hooks/useScript';
import { useSidebar } from '../hooks/useSidebar';


function MyApp({ Component, pageProps }: AppProps) {

  const {isActive} = useSidebar()

  return (
  <NextIntlProvider messages= {pageProps.messages}>
    <LangProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client ={queryClient}>
          <AuthProvider>
            <SidebarProvider >
              <ToastProvider>
                <CartProvider>
                  <ScriptProvider>
                    <MpProvider>
                    <>
                      <Component {...pageProps} />
                      <GlobalStyle sidebarActive={isActive}/>
                    </>
                    </MpProvider>
                  </ScriptProvider>
                </CartProvider>
              </ToastProvider>
            </SidebarProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LangProvider>
  </NextIntlProvider>
  )
}

export default MyApp
