from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    print("================================")
    print("Received token:", token)
    print("SECRET_KEY:", SECRET_KEY)

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        print("Decoded payload:", payload)

        user_id = payload.get("sub")
        print("User ID:", user_id)

        return user_id

    except JWTError as e:
        print("JWT ERROR:", repr(e))
        raise HTTPException(status_code=401, detail="Token is invalid or expired")