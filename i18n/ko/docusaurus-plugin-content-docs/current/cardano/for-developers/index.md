---
sidebar_label: "개발자 전용"
sidebar_position: 2
---

# 개발자 전용

:::info Milkomeda C1 **Testnet** is not recommended for use at this time due to recent Cardano Testnet developments. New dedicated preview and pre-production Cardano Testnet environments are being introduced and old Testnet is going to be deprecated very soon. Due to that fact there may appear difficulties with moving funds between Cardano and Milkomeda C1 Sidechain (Testnet).

Taking this into consideration, we recommend all users who would like to deploy their contracts on Milkomeda C1 Sidechain (Testnet), to perform testing on any other EVM-compatible chain instead. The main issue is that to pay the fees on Milkomeda C1 Testnet, one must wrap test assets using Cardano Testnet which may not be possible.

Thanks to Milkomeda C1 EVM-compatibility, such contracts can be deployed on any Ethereum Virtual Machine, so even if a contract is tested elsewhere, it will work on the Milkomeda C1 Sidechain. Milkomeda C1 사이드 체인에서는 현재 두 가지 버전이 작동합니다. 하나는 Devnet 버전이며 테스트 ADA를 사용하여 Cardano Testnet과 상호 작용합니다. 다른 하나는 메인넷 버전이며 실제 ADA를 사용하여 Cardano 메인넷과 상호 작용합니다.

먼저 조작에 익숙해지기 위해 devnet으로 시작하시기를 권장합니다. 한 번 Devnet에 익숙해진다면 향후 메인넷 작업도 동일하게 조작이 가능할 것입니다. 앞으로 소개하는 절차의 예에서는 Devnet에 대한 연결을 설정하는 방법을 보여줍니다. 빨간색 부분은 메인넷에서 사용하는 파라미터와 순서를 나타냅니다.

우선 Flint 지갑을 설치합니다. 다음 페이지로 이동하여 단계를 개시합니다.
