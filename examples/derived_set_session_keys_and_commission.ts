import { ethers } from "ethers";
import { clientBuilder, setSessionKeysAndCommission } from "../index"

async function main(): Promise<void> {
  const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");

  const signer = new ethers.Wallet("39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68", provider);

  const pangolin = clientBuilder.buildPangolinClient(provider);

  const tx = await setSessionKeysAndCommission(
    pangolin,
    signer,
    "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    12
  );

  console.log(`https://pangolin.subscan.io/tx/${tx.hash}`);
}

main().catch(err => console.log(err));
