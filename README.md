<p align="center">
<img  src="public/images/crypto.png" width="100" height="100">
<br>
</p>
<h1 align="center">Cryptolx</h1>

## Table of Contents
- Problem Statement
- Tech Stack Used
- Running Locally

# Problem Statement
Today almost everyone is familiar with the name Blockchain, but still sometimes it is thought as the way of investment just like stocks. <br>
To Solve this problem and encourage use of Blockchain in other areas, we thought to build a decentralized app where user will be able to buy/sell items using cryptocurrency(currently Ethereum).

# Tech Stack Used
```
Blockchain:
- Smart contracts: Solidity
- Testing:         Ganache and mocha.
- Interaction:     Web3

Frontend:
- UI Library:      Reactjs
- Styling:         Semantic-UI

- Backend and database
- Firebase
```

# Running Locally
- Setting variables in .env<br>
Create a file `.env`, copy `example.env` into `.env`. Replace values with your credentials.
    ```
    REACT_APP_API_KEY=""
    REACT_APP_AUTH_DOMAIN=""
    REACT_APP_PROJECT_ID="",
    REACT_APP_STORAGE_BUCKET=""
    REACT_APP_MESSAGING_SENDER_ID=""
    REACT_APP_APP_ID=""
    ```


- Frontend part
    1. Go to Code on Github Desktop of this repository and copy its http link from there.<br>
    2. Now Open your terminal.<br>
    3. Navigate to any directory preferred by you through using cd command.
    Clone project there by git clone <url copied><br>
    4. Type `cd <name_of_project>` then install packages using `npm install`

- Blockchain part
    1. Install metamask extension and set it up.