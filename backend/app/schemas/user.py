from pydantic import BaseModel, EmailStr
from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr

    class Config:
        from_attributes = True

