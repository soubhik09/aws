import { Request, Response } from "express";
import { getSignedUrl } from "../../../services/filehandle";

export const downloadFileFromDrive = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { key } = req.query;

  if (!key) return res.status(400).json({ message: "Invalid key" });

  const result = getSignedUrl(key as string);

  return res.json({ result });
};

