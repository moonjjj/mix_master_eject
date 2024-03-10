"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store, persistor } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Script from "next/script";
import { Analytics } from "@/config/analytics";

export function Providers({ children, themeProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>
              {children}
              {/* 빌드 안 되면 제거 - analytics */}
              {/* <Analytics /> */}
              <Script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `(function() {
    console.log('hell22o');
 var w = window;
 if (w.ChannelIO) {
   return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
 }
 var ch = function() {
   ch.c(arguments);
 };
 ch.q = [];
 ch.c = function(args) {
   ch.q.push(args);
 };
 w.ChannelIO = ch;
 function l() {
   if (w.ChannelIOInitialized) {
   return;
   }
   w.ChannelIOInitialized = true;
   var s = document.createElement('script');
   s.type = 'text/javascript';
   s.async = true;
   s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
   s.charset = 'UTF-8';
   var x = document.getElementsByTagName('script')[0];
   x.parentNode.insertBefore(s, x);
 }
 if (document.readyState === 'complete') {
   l();
 } else if (window.attachEvent) {
   window.attachEvent('onload', l);
 } else {
   window.addEventListener('DOMContentLoaded', l, false);
   window.addEventListener('load', l, false);
 }
})();
ChannelIO('boot', {
 "pluginKey": "d2516711-07b6-49a3-9687-6064f278ebaf"
});
`,
                }}
              />
            </NextThemesProvider>
          </NextUIProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
