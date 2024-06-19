import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider, createConfig, http } from 'wagmi';
import {
  polygon,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { intmaxwalletsdk } from "intmax-walletsdk/rainbowkit";


const wallets = [
  intmaxwalletsdk({
    wallet: {
      url: "https://wallet.intmax.io/",
      name: "INTMAX Wallet",
      iconUrl: "/logo.png",
    },
    metadata: {
      name: "Rainbow-Kit Demo",
      description: "Rainbow-Kit Demo",
      icons: ["logo.png"],
    },
  }),
];

const connectors = connectorsForWallets(
  [
    {
      groupName: "Best Wallet",
      wallets,
    },
  ],
  { projectId: "N/A", appName: "Rainbow-Kit Example" },
)

const config = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http('https://polygon-mainnet.g.alchemy.com/v2/0rqV4Xm0DYA_jAyhpEtAftVBUvi0TG-q'),
  },
  connectors,
});

const client = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={client}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
