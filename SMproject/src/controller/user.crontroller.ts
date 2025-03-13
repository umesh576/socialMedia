import { hash } from "bcryptjs";
import CustomError from "../middleware/errorHandler.middleware";
import User from "../model/user.model";
import { asyncHandler } from "../utils/asyncHandler.utils";
import { Request, Response } from "express";
// import mongoose from "mongoose";

export const RegisterUser = asyncHandler(
  async (req: Request, res: Response) => {
    const body = req.body;

    if (!body.password) {
      throw new CustomError("password must be required", 400);
    }
    const hashPassword = await hash(body.password, 10);

    if (!body.email) {
      throw new CustomError("Email must be require", 400);
    }

    const oldEmailExists = await User.findOne({ email: body.email });
    if (oldEmailExists) {
      throw new CustomError("Email is already exist", 500);
    }

    console.log(`your hashed password is ${hashPassword}`);

    body.password = hashPassword;
    const user = await User.create(body);

    res.status(201).json({
      status: "sucess",
      success: true,
      message: "user created sucessfuylly",
      data: user,
    });
  }
);
