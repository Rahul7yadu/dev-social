"use server"
import {SignJWT,jwtVerify} from 'jose'
const key = new TextEncoder().encode('secret') 
const encrypt = async (payload:any)=>{
        return await new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('1h').sign(key)
}

export const login =async(formData:FormData)=>{
    const user = {email:formData.get("email"),password:formData.get("password")}
    const expires = new Date(Date.now()+60*60*1000)
    const session = await encrypt(user)
}
