import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.DB ?? "";
const client = new MongoClient(url, {
    tls: true,
    tlsAllowInvalidHostnames: true, // Temporary - allows invalid hostnames
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
});
export async function connectDB() {
    await client.connect();
    const result = await client.db("admin").command({ ping: 1 });
    console.log("Ping result:", result);
    return client.db("db");
}
//# sourceMappingURL=db.js.map