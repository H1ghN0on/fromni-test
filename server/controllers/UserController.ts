import express from "express";

import User from "../db/models/User";

class UserContoller {
  async add(req: express.Request, res: express.Response) {
    try {
      const { name } = req.body;
      const result = await User.findOneOrCreate({ name });
      if (result.found) {
        res.status(200).json({
          status: "Error",
          message: "Пользователь с таким именем зарегистрирован",
        });
      } else {
        res.status(200).json({ status: "OK" });
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Проблема с базой данных" });
    }
  }
}

export default new UserContoller();
