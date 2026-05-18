import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ path: "../.env" });

export const authToken = process.env.ACCESS_TOKEN;