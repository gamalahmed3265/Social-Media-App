import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    console.log(req.body);
    res
    .status(200)
    .json("vaey ggod");
}

export const register = (req, res) => {
    console.log(req.body);
    res
    .status(200)
    .json("vaey ggod");
}