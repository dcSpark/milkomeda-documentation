---
sidebar_position: 4
---

# Example DApp

An example DApp is available in the [wrapped-smartcontracts repo](https://github.com/dcSpark/wrapped-smartcontracts) under `packages/dapp-example`


In order to run the example, first clone the repo:

```
git clone https://github.com/dcSpark/wrapped-smartcontracts
```

and prepare the artifacts:

```
npm run prepare-artifact
```


The example dapp will require a running test chain and oracle



**Test network**

You can either run the testing network using docker:

```
docker compose up
```

or by installing [dcSpark/besu](https://github.com/dcSpark/besu)



**Oracle**

```
cd packages/oracle
npm install
npm run dev
```


To run the example dapp you need to have running chain and oracle.

To run the chain and oracle:

```
npm run chain:start
npm run oracle:dev
```

To run the dapp:

```
npm start -w packages/dapp-example
```

Dapp is running on localhost:3000.