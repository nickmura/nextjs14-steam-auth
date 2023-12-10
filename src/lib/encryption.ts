import { createCipheriv, createDecipheriv } from "crypto";

export class Encryption {
    salt: string
    
    public algorithm: string = "aes-256-cbc";
    public initVector = process.env.IV || "";

    constructor() {
        this.salt = process.env.SECRET_KEY || "";
    }

    encrypt(data: string) {
        const cipher = createCipheriv(this.algorithm, this.salt, this.initVector);
        let encryptedData = cipher.update(data, "utf-8", "hex");
        encryptedData += cipher.final("hex");

        return encryptedData;
    }

    decrypt(data: string) {
        const decipher = createDecipheriv(this.algorithm, this.salt, this.initVector);
        let decryptedData = decipher.update(data, "hex", "utf-8");
        decryptedData += decipher.final("utf-8");

        return decryptedData;
    }
}