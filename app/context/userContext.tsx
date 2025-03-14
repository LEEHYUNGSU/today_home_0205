"use client";

import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextType{
  token: string | null;
  tokenIsValid: boolean;
  setToken: (token: string | null) => void;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const validdateToken = (token: string | null) => {
    if (!token) return false;
  
    try {
      const decoded = jwt.decode(token) as jwt.JwtPayload | null;
  
      if(decoded?.exp){
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
      }
    } catch (error){
      console.error("Token Error:", error);
    }
    return false;
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if(storedToken){
      setToken(storedToken);
      setTokenIsValid(validdateToken(storedToken));
    }
  }, []);

  useEffect(() => {
    setTokenIsValid(validdateToken(token));
  }, [token]);

  useEffect(() => {
    if(tokenIsValid && pathname === "/login"){
      alert("이미 로그인되어 있습니다.");
      router.push("/user");
    }
  }, [tokenIsValid, router, pathname]);


  return (
    <AuthContext.Provider value={{token, tokenIsValid, setToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("AuthContext is not providerd");
  }

  return context;
}





