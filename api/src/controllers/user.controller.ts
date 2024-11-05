import { Request, Response, RequestHandler } from "express";
import { query } from "../config/db";

export const getUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT id, email, password FROM user WHERE email = ? AND password = ?";
    const result: any = await query(sql, [email, password]);

    if (result.length === 0) {
      res.status(204).json({
        message: "User not found",
      });
      return; // Asegura que la función termina aquí
    }

    res.status(200).json({
      message: "User found",
      user: result[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
