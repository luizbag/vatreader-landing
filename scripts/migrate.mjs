import { readFileSync } from "node:fs";
import { sql } from "@vercel/postgres";

const file = new URL("../db/migrations/001_waitlist.sql", import.meta.url);
const statements = readFileSync(file, "utf8")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);

for (const statement of statements) {
  await sql.query(statement);
  console.log("Applied:", statement.split("\n")[0]);
}

console.log("Migrations complete.");