import { Role } from "../@types/global.types";

export const userAuthencation = (role: string) => {
  if (role == Role.user) {
    console.log("you are admin");
  }
  if (role == Role.admin) {
    console.log("you are admin");
  }

  if (role == Role.superAdmin) {
    console.log("you are admin");
  }
};
