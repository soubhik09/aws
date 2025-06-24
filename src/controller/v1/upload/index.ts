import { Request, Response } from "express";
import { uploadFile } from "../../../services/filehandle";

export const uploadFileInDrive = async (req: Request, res: Response): Promise<any> => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: "File is missing" });

  const result = await uploadFile(file);

  return res.status(201).json(result);
};

