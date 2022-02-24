import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7bf15b5b30e0817642063e2765477603Cee99665",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "SolidariDAO insignia",
        description: "This NFT will give you access to SolidariDAO!",
        image: readFileSync("scripts/assets/solidaridao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()