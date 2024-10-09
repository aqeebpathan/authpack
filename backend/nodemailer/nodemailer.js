import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const transporter = nodemailer.createTransport({
  service: "gmail", // Use 'gmail' service for simplicity
  secure: true, // Use SSL/TLS
  host: "smtp.gmail.com",
  port: 465, // Port for SSL
  auth: {
    user: process.env.NODEMAILER_USER, // Your Gmail address
    pass: process.env.NODEMAILER_PASS, // Your Gmail password or app password
  },
});

// Ensure environment variables are set
if (!process.env.NODEMAILER_USER || !process.env.NODEMAILER_PASS) {
  throw new Error(
    "NODEMAILER_USER or NODEMAILER_PASS environment variables are not set"
  );
}
