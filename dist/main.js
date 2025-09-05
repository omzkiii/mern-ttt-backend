import express from "express";
import cors from "cors";
import { getMatches, saveMatch } from "./controllers/match.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: false,
}));
app.get("/getMatches", async (req, res) => {
    const matches = await getMatches();
    return res.json(matches);
});
app.post("/saveMatch", (req, res) => {
    const match = req.body;
    saveMatch(match);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=main.js.map