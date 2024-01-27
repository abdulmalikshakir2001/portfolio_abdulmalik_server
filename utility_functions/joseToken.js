import * as jose from 'jose'
export default async function joseToken(secretString,payload,expirationTime){
    const secret = new TextEncoder().encode(
        secretString,
      )
      const alg = 'HS256'
      const jwt = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime(expirationTime)
        .sign(secret)

        return jwt;


}