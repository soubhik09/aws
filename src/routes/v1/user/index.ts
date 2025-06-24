import express, { Request, Response } from "express";
import { V1Controller } from "../../../controller";
import User from "../../../models";
const route = express.Router();

route.get("/getalluser", async (req: Request, res: Response): Promise<any> => {
  try {
    const allUser = await User.findAll();
    return res.status(200).json({ allUser });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
});

route.post("/create", async (req: Request, res: Response): Promise<any> => {
  const { fullName, email, password, role } = req.body;
  try {
    if (!fullName || !email || !password || !role) {
      return res.status(500).json({ message: "Input field are missing" });
    }
    const user = await User.create({ fullName, email, password, role });
    return res
      .status(201)
      .json({ message: "User created successfully!", user });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
});

route.put("/update", async (req: Request, res: Response): Promise<any> => {
  const { id, fullName, email, password, role } = req.body;

  if (!id) return res.status(400).json({ message: "Input field missing" });
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await user.update({
      fullName,
      password,
      role,
      email,
    });

    return res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
});

route.delete("/delete", async (req: Request, res: Response): Promise<any> => {
  const { id } = req.body;
  try {
    if (!id) return res.status(400).json({ message: "Input field missing" });
    await User.destroy({ where: { id } });
    return res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
});

export default route;
