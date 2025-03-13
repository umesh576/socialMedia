import mongoose from "mongoose";

export const connectDatabase = (DB_URI: string) => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("database connected sucessfully");
    })
    .catch((err: any) => {
      console.log("databse cannot connected", err);
    });
};
