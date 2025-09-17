

## System Components

1. **Main Server (MonieHub)** - Primary application server
2. **Relayer Service** - Wallet management middleware
3. **Fireblocks** - External secure wallet infrastructure
4. **Database** - Stores user and wallet information

### 📌 1. User Wallet Creation Flow

[![](https://mermaid.ink/img/pako:eNpdkt2O2jAQhV9l5CuQDA0hZEOkVmpIEUhFWyWhK5XshYlnl4jgUNuhS1nevc4Paotv7JHOd8547AvJSo7EJ6-SHXeQhKkAs1aLzaoUOS6qLQxgxXIBMcoTymcYDD69p-TbY5xAhD8rVNqHmUSmERjnEpWCHh5YXlCoFMol76fkHaJNhAU7o2x88gyf26Co85vtMNtD_tIwgG-50go-3IxRaHmubdZhsOmtjURByDTbMoX9e6cW-c6qQtfIPNjMc4nbosz26k4b61IinGrpksPHNmfJu6T_tZ8znZ-aWyqFprlekMworOMwofAlWVAIYlPHj1_7bWpLz4MOj1BXUsAvVhSob5NC1czmril2wk6n4NKk0RtAYcsKJjK81uBTPY2nTvnvPAg175lz4mtZISUHlOZBTEkudVRK9A4PmBLfHDmT-5Sk4mqYIxM_yvJww2RZve6I_8IKZarqyM3tw5yZn_JXgoKjnJWV0MR3xk7jQfwLeSP-xHsY2tOJ2UaeNbEnI0rOxLedoWM77nTsuM7EtdzplZLfTag1dCzPcT1vZD9Y5uiOr38AiH3Rzw?type=png)](https://mermaid.live/edit#pako:eNpdkt2O2jAQhV9l5CuQDA0hZEOkVmpIEUhFWyWhK5XshYlnl4jgUNuhS1nevc4Paotv7JHOd8547AvJSo7EJ6-SHXeQhKkAs1aLzaoUOS6qLQxgxXIBMcoTymcYDD69p-TbY5xAhD8rVNqHmUSmERjnEpWCHh5YXlCoFMol76fkHaJNhAU7o2x88gyf26Co85vtMNtD_tIwgG-50go-3IxRaHmubdZhsOmtjURByDTbMoX9e6cW-c6qQtfIPNjMc4nbosz26k4b61IinGrpksPHNmfJu6T_tZ8znZ-aWyqFprlekMworOMwofAlWVAIYlPHj1_7bWpLz4MOj1BXUsAvVhSob5NC1czmril2wk6n4NKk0RtAYcsKJjK81uBTPY2nTvnvPAg175lz4mtZISUHlOZBTEkudVRK9A4PmBLfHDmT-5Sk4mqYIxM_yvJww2RZve6I_8IKZarqyM3tw5yZn_JXgoKjnJWV0MR3xk7jQfwLeSP-xHsY2tOJ2UaeNbEnI0rOxLedoWM77nTsuM7EtdzplZLfTag1dCzPcT1vZD9Y5uiOr38AiH3Rzw)

### 📌 2. Deposit Handling Flow

[![](https://mermaid.ink/img/pako:eNpdkEFvgkAQhf_KZk6aoAEWEDn0YImn9mJtTCo9DDAKEXbJ7lq16n8vUBtj57Qz-773ducMmcwJItgqbAq2jBPB2prP1vNSUVrJbKc_2Wj0dEkgpkbq0rAVpYWUOzYwR5aTwbLSwwQubLFeUIUnUuyN1FeZ0eev2eLGv6LJCnbAqiLDMM8Vad1xq3i2Hqz6sWYxGkxR0_Af_N7kaIilWKHI6IY9Sl7klhmFQmNmSilYKTaVPHTSZZewvF89xoDV_r7MITJqTxbUpGrsWjh3_gmYguo2MWqPOapdAom4tkyD4kPK-g9Tcr8tINpgpdtu3z83LrHd611CIif1LPfCQOT4bu8B0RmOEPkOH9uBH3A-8bjrhKEFJ4g8Z2w7Pg9CO3Qd7geTqwXffag99l0v5NNgOnWDkHuOc_0BsJ2RCw?type=png)](https://mermaid.live/edit#pako:eNpdkEFvgkAQhf_KZk6aoAEWEDn0YImn9mJtTCo9DDAKEXbJ7lq16n8vUBtj57Qz-773ducMmcwJItgqbAq2jBPB2prP1vNSUVrJbKc_2Wj0dEkgpkbq0rAVpYWUOzYwR5aTwbLSwwQubLFeUIUnUuyN1FeZ0eev2eLGv6LJCnbAqiLDMM8Vad1xq3i2Hqz6sWYxGkxR0_Af_N7kaIilWKHI6IY9Sl7klhmFQmNmSilYKTaVPHTSZZewvF89xoDV_r7MITJqTxbUpGrsWjh3_gmYguo2MWqPOapdAom4tkyD4kPK-g9Tcr8tINpgpdtu3z83LrHd611CIif1LPfCQOT4bu8B0RmOEPkOH9uBH3A-8bjrhKEFJ4g8Z2w7Pg9CO3Qd7geTqwXffag99l0v5NNgOnWDkHuOc_0BsJ2RCw)


### 📌 3. Wallet Retrieval Flow

[![](https://mermaid.ink/img/pako:eNp9kV1vgjAUhv9Kc640Qce3yMUSN7LpBUvGlpgMvKj2KGRQTCnbmPrfVxCy7Ga9aU9znuc9aU-wKxmCDwdBjyl5DRJO1AqXcVjyDJf1lkxISDNOXlB8oNiQyeT2nMADyl1KPmmeoySUMYFVhRXZNqSuUKxYAmcSxRHmtEHRsdkON1f5IghXT_GCFRkfdM81iqbXVWSkdnJD9lkuFaycVMnluHNeFVHPPar0fghGJW071sFdPFr3pkBdbmmF481fLkJZCz6geVbJFg2X_3UNAd34CQdNvVnGwJeiRg0KFAVtSzi1kgRkigUm4Ksjo-I9gYRfFHOk_K0siwETZX1Iwd_TvFJVfVQhGGRU_cZvC3KG4r6suQTfcNzOAf4JvsB3DGuqu45rWTPbMg3P06AB3zamuuFYrqd7pmE57uyiwXcXqk8d0_asuTufm65n2YZx-QHd7aED?type=png)](https://mermaid.live/edit#pako:eNp9kV1vgjAUhv9Kc640Qce3yMUSN7LpBUvGlpgMvKj2KGRQTCnbmPrfVxCy7Ga9aU9znuc9aU-wKxmCDwdBjyl5DRJO1AqXcVjyDJf1lkxISDNOXlB8oNiQyeT2nMADyl1KPmmeoySUMYFVhRXZNqSuUKxYAmcSxRHmtEHRsdkON1f5IghXT_GCFRkfdM81iqbXVWSkdnJD9lkuFaycVMnluHNeFVHPPar0fghGJW071sFdPFr3pkBdbmmF481fLkJZCz6geVbJFg2X_3UNAd34CQdNvVnGwJeiRg0KFAVtSzi1kgRkigUm4Ksjo-I9gYRfFHOk_K0siwETZX1Iwd_TvFJVfVQhGGRU_cZvC3KG4r6suQTfcNzOAf4JvsB3DGuqu45rWTPbMg3P06AB3zamuuFYrqd7pmE57uyiwXcXqk8d0_asuTufm65n2YZx-QHd7aED)




<!-- 
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

 -->
