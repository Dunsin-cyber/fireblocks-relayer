

## System Components

1. **Main Server (MonieHub)** - Primary application server
2. **Relayer Service** - Wallet management middleware
3. **Fireblocks** - External secure wallet infrastructure
4. **Database** - Stores user and wallet information

### 📌 1. User Wallet Creation Flow

[![](https://mermaid.ink/img/pako:eNpdUl1v2jAU_StXfgLJsIRAGiJt0kLGQBqaRKCVRvpg4ttikTjMdlgZ5b_XSWi14Rf7Wufj-lyfSVZyJCF5Vuywg1WcSrBrMdssSilwVm2hBwsmJCSojqgeodf78pqSJf6uUJsQvqOBPyzP7cY4V6g1dLBgIqdQaVRz3k3JKyw3S8zZCVUjIzJ8bH2WV7nJDrM9iKeGA_gitNHwCSYKmUFAadSpllnH0aazthANMTNsyzR2b5Vayj2rclNTptFmKhRu8zLb6xtsYkqFcKyhcw6fW585vzr9j_2aGXGslZnWaJvrRKsJhXUSryh8W80oRImtk58_uq1ry55GH3mZSsmbpFA32dw0xY54xWk4N270nUBhy3ImM7zUxIc6jYcr8t88CLXjFJyERlVISYHKDsSW5FxbpcTssMCUhPbImdqnJJUXyzkw-assi3eaKqvnHQmfWK5tVR24fX0smP0oxcetQslRTcpKGhK6vtOIkPBMXkg4cr2-4498z7sbegM3CCg5kXDo9h135PmBEwxcb-TfXSj527g6_dFgGHhjfzwe-IE3dN3LG2jX0hU?type=png)](https://mermaid.live/edit#pako:eNpdUl1v2jAU_StXfgLJsIRAGiJt0kLGQBqaRKCVRvpg4ttikTjMdlgZ5b_XSWi14Rf7Wufj-lyfSVZyJCF5Vuywg1WcSrBrMdssSilwVm2hBwsmJCSojqgeodf78pqSJf6uUJsQvqOBPyzP7cY4V6g1dLBgIqdQaVRz3k3JKyw3S8zZCVUjIzJ8bH2WV7nJDrM9iKeGA_gitNHwCSYKmUFAadSpllnH0aazthANMTNsyzR2b5Vayj2rclNTptFmKhRu8zLb6xtsYkqFcKyhcw6fW585vzr9j_2aGXGslZnWaJvrRKsJhXUSryh8W80oRImtk58_uq1ry55GH3mZSsmbpFA32dw0xY54xWk4N270nUBhy3ImM7zUxIc6jYcr8t88CLXjFJyERlVISYHKDsSW5FxbpcTssMCUhPbImdqnJJUXyzkw-assi3eaKqvnHQmfWK5tVR24fX0smP0oxcetQslRTcpKGhK6vtOIkPBMXkg4cr2-4498z7sbegM3CCg5kXDo9h135PmBEwxcb-TfXSj527g6_dFgGHhjfzwe-IE3dN3LG2jX0hU)


### 📌 2. Deposit Handling Flow

[![](https://mermaid.ink/img/pako:eNpdkEFvgkAQhf_KZk6aoAEWEDn0YImn9mJtTCo9DDAKEXbJ7lq16n8vUBtj57Qz-773ducMmcwJItgqbAq2jBPB2prP1vNSUVrJbKc_2Wj0dEkgpkbq0rAVpYWUOzYwR5aTwbLSwwQubLFeUIUnUuyN1FeZ0eev2eLGv6LJCnbAqiLDMM8Vad1xq3i2Hqz6sWYxGkxR0_Af_N7kaIilWKHI6IY9Sl7klhmFQmNmSilYKTaVPHTSZZewvF89xoDV_r7MITJqTxbUpGrsWjh3_gmYguo2MWqPOapdAom4tkyD4kPK-g9Tcr8tINpgpdtu3z83LrHd611CIif1LPfCQOT4bu8B0RmOEPkOH9uBH3A-8bjrhKEFJ4g8Z2w7Pg9CO3Qd7geTqwXffag99l0v5NNgOnWDkHuOc_0BsJ2RCw?type=png)](https://mermaid.live/edit#pako:eNpdkEFvgkAQhf_KZk6aoAEWEDn0YImn9mJtTCo9DDAKEXbJ7lq16n8vUBtj57Qz-773ducMmcwJItgqbAq2jBPB2prP1vNSUVrJbKc_2Wj0dEkgpkbq0rAVpYWUOzYwR5aTwbLSwwQubLFeUIUnUuyN1FeZ0eev2eLGv6LJCnbAqiLDMM8Vad1xq3i2Hqz6sWYxGkxR0_Af_N7kaIilWKHI6IY9Sl7klhmFQmNmSilYKTaVPHTSZZewvF89xoDV_r7MITJqTxbUpGrsWjh3_gmYguo2MWqPOapdAom4tkyD4kPK-g9Tcr8tINpgpdtu3z83LrHd611CIif1LPfCQOT4bu8B0RmOEPkOH9uBH3A-8bjrhKEFJ4g8Z2w7Pg9CO3Qd7geTqwXffag99l0v5NNgOnWDkHuOc_0BsJ2RCw)


### 📌 3. Wallet Retrieval Flow

[![](https://mermaid.ink/img/pako:eNp9kV1vgjAUhv9Kc640Qce3yMUSN7LpBUvGlpgMvKj2KGRQTCnbmPrfVxCy7Ga9aU9znuc9aU-wKxmCDwdBjyl5DRJO1AqXcVjyDJf1lkxISDNOXlB8oNiQyeT2nMADyl1KPmmeoySUMYFVhRXZNqSuUKxYAmcSxRHmtEHRsdkON1f5IghXT_GCFRkfdM81iqbXVWSkdnJD9lkuFaycVMnluHNeFVHPPar0fghGJW071sFdPFr3pkBdbmmF481fLkJZCz6geVbJFg2X_3UNAd34CQdNvVnGwJeiRg0KFAVtSzi1kgRkigUm4Ksjo-I9gYRfFHOk_K0siwETZX1Iwd_TvFJVfVQhGGRU_cZvC3KG4r6suQTfcNzOAf4JvsB3DGuqu45rWTPbMg3P06AB3zamuuFYrqd7pmE57uyiwXcXqk8d0_asuTufm65n2YZx-QHd7aED?type=png)](https://mermaid.live/edit#pako:eNp9kV1vgjAUhv9Kc640Qce3yMUSN7LpBUvGlpgMvKj2KGRQTCnbmPrfVxCy7Ga9aU9znuc9aU-wKxmCDwdBjyl5DRJO1AqXcVjyDJf1lkxISDNOXlB8oNiQyeT2nMADyl1KPmmeoySUMYFVhRXZNqSuUKxYAmcSxRHmtEHRsdkON1f5IghXT_GCFRkfdM81iqbXVWSkdnJD9lkuFaycVMnluHNeFVHPPar0fghGJW071sFdPFr3pkBdbmmF481fLkJZCz6geVbJFg2X_3UNAd34CQdNvVnGwJeiRg0KFAVtSzi1kgRkigUm4Ksjo-I9gYRfFHOk_K0siwETZX1Iwd_TvFJVfVQhGGRU_cZvC3KG4r6suQTfcNzOAf4JvsB3DGuqu45rWTPbMg3P06AB3zamuuFYrqd7pmE57uyiwXcXqk8d0_asuTufm65n2YZx-QHd7aED)





## Workflow

### 1. Wallet Generation Flow
```
Main Server → POST /wallets/generate?email=user@example.com&userId=123
    │
    ↓
Relayer receives request
    │
    ↓
Check if user exists with userId
    │
    ↓
If not exists → Create user entry with email and userId
    │
    ↓
Create Fireblocks vault using the new user ID as reference
    │
    ↓
Activate supported assets (BTC, ETH, USDT, BSC, Solana)
    │
    ↓
Store wallet addresses in database
    │
    ↓
Return wallet addresses to main server
```

### 2. Deposit Handling Flow
```
Fireblocks detects deposit → Sends webhook to relayer
    │
    ↓
Relayer verifies webhook signature
    │
    ↓
Check if address exists in database
    │
    ↓
Update wallet balance
    │
    ↓
Create transaction record
    │
    ↓
(Optional) Notify main server of deposit
```


## API Endpoints

### 1. Generate Wallet Address
- **Endpoint**: `POST /wallets/generate`
- **Purpose**: Creates new wallet addresses for a user
- **Request Query Parameters**:
  - `email` (string, required): User's email address
  - `userId` (string, required): User's unique identifier from main server
- **Response**:
  ```json
  {
    "success": true,
    "vaultId": "string",
    "wallets": [
      {
        "asset": "BTC",
        "address": "string",
        "balance": 0
      },
        {
        "asset": "USDT",
        "address": "string",
        "balance": 0
      }
    
      
    ]
  }
  ```

### 2. Get User Wallets
- **Endpoint**: `GET /wallets/user/:userId`
- **Purpose**: Retrieve all wallet addresses for a specific user
- **Response**:
  ```json
  {
    "userId": "string",
    "wallets": [
      {
        "id": "string",
        "asset": "BTC",
        "address": "string",
        "balance": 0.5,
        "createdAt": "datetime"
      }
    ]
  }
  ```


  
### 3. Add Asset
- **Endpoint**: `POST /wallet/asset`
- **Purpose**: Retrieve all wallet addresses on the platform (admin only)
- **Query Parameters**:
  - `userId` (string)
  - `assetId` (string): (SOL etc.)
- **Response**:
  ```json
  {
    "status": "success",
    "wallets": [
      {
        "id": "string",
        "asset": "SOL",
        "address": "string",
        "balance": 0,
        "createdAt": "datetime"
      }
    ]
  }

### 4. Get All Wallets (Admin)
- **Endpoint**: `GET /admin/wallets`
- **Purpose**: Retrieve all wallet addresses on the platform (admin only)
- **Query Parameters**:
  - `userId` (string, optional): Filter by user ID
  - `asset` (string, optional): Filter by asset name (BTC, ETH, USDT, etc.)
- **Response**:
  ```json
  {
    "wallets": [
      {
        "id": "string",
        "userId": "string",
        "email": "string",
        "asset": "BTC",
        "address": "string",
        "balance": 0.5,
        "createdAt": "datetime"
      }
    ]
  }
  ```

  ```

### 5. Webhook Endpoint
- **Endpoint**: `POST /webhooks/fireblocks`
- **Purpose**: Receive deposit notifications from Fireblocks
- **Headers**:
  - `X-Fireblocks-Signature`: Signature for verification
- **Request Body** (Fireblocks webhook format):
  ```json
  {
    "type": "VAULT_ACCOUNT_ASSET_ADDRESS_CREATED",
    "data": {
      "vaultAccountId": "string",
      "assetId": "BTC",
      "address": "string"
    }
  }
  ```


