import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webproject'
});