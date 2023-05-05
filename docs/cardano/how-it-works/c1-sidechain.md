---
sidebar_label: "The C1 Sidechain"
sidebar_position: 1
---

# The Milkomeda C1 (Cardano EVM Sidechain)

After weighing out many of the positives and negatives of various approaches we settled on an ideal solution that will maximize both attracting new developers and improving the value proposition of the Layer 1 blockchain overall. We will be deploying the first Cardano sidechain, named C1, which will be an EVM-based sidechain that uses mADA (wrapped ADA which is transferred from the Cardano mainnet to the sidechain) as its base asset for fees and gas.

This provides both developers and users a simplified on-boarding experience, while improving the value of ADA as it becomes the coordinating base asset on multiple chains. Furthermore, thanks to Cardano being PoS, when users transfer ADA to the sidechain it can be auto-delegated to stake pools which passively earns returns unlike using a new token as the base asset. This allows the sidechain to work synergistically with the Cardano mainnet in a manner where they build off of each other and the benefits of both bleed over to all users. Additionally, the relationship is strengthened by the fact that all of the fees users will be charged when interacting with the Milkomeda protocol (no matter on which chain) will be in ADA/mADA.

By building this solid foundation between mainnet and the sidechain we also provide users a seriously improved UX, wherein by submitting a single transaction everything is dealt with automatically behind the scenes. For example, this translates into a smooth experience where users send their tokens to the sidechain bridge on Cardano mainnet, and the inner bridge machinery takes care of the series of subsequent transactions with no further user input. After a short period of time the tokens simply arrive on the sidechain in the user’s wallet from their perspective. Not only does this synergy provide a great experience for moving between mainnet and the sidechain, it also unlocks an opportunity that was never considered before.

Thanks to our new innovation called wrapped smart contracts, it will be possible for users on the Cardano mainnet to call and use contracts on the sidechain without having to leave mainnet at all. Users will submit a single Cardano transaction with the data and assets required to interact with the sidechain dApp and the sidechain bridge layer takes care of the rest. The assets/data are transferred over to the sidechain, the requested action is executed on the target dApp, and the results are deposited back to the user’s wallet in the end.

This is the kind of power that is possible by removing all of the excess features/tokens that get in the way of interoperability between mainnet and the sidechain.

The C1 sidechain was officially launched on April 2022 and it became the first sidechain to launch for Cardano powered by the Milkomeda Sidechain protocol. Multiple improvements have been made to the protocol since then, and the C1 sidechain is now the premier EVM-based sidechain in the Cardano ecosystem.