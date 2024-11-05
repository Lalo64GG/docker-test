import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();
const config = {
    host: process.env.HOST,
    user: process.env.USER,
    database: 'mydatabase',
    password: process.env.PASSWORD,
};

const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]) {
    try {
        const conn = await pool.getConnection();
        console.log("connecion exitosa")
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        return null;        
    }
}