import dotenv from "dotenv";
import { defineConfig } from "cypress";

dotenv.config();

const url = process.env.CYPRESS_ARMLOLO_APP;

export default defineConfig({
  e2e: {
    baseUrl: url,
  },
});
