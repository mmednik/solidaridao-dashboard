import sdk from "./1-initialize-sdk.js";
const app = sdk.getAppModule("0x96900C4ad43Ed7145527ED46d7C81D06457b9950");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "SolidariDAO Governance Token",
      symbol: "SOLI",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();