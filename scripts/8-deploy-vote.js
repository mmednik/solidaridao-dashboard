import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x96900C4ad43Ed7145527ED46d7C81D06457b9950");

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "SolidariDAO's Proposals",
      votingTokenAddress: "0x6bA18655Fd64673C76e6748c6251723ac9C0d405",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();

// ✅ Successfully deployed vote module, address: 0x192b690F7b2a1cE661a9606EfD08a812b32AfB5b
