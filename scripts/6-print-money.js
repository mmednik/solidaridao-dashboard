import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule = sdk.getTokenModule(
  "0x6bA18655Fd64673C76e6748c6251723ac9C0d405",
);

(async () => {
  try {
    const amount = 1000000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$SOLI in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();