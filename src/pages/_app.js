import "@/styles/globals.css";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import reactQueryClient from "@/config/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => reactQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  );
}
