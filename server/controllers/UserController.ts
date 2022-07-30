import express from "express";
import Channel from "../db/models/Channel";

import User from "../db/models/User";

const emptyChannelSettings = {
  message: "Hello",
  keyboard: {
    type: "standard",
    buttons: [],
  },
};

class UserContoller {
  async add(req: express.Request, res: express.Response) {
    try {
      const { name, channels } = req.body;
      const result = await User.findOne({ name }).then(async (res) => {
        const vkSettingsId = await Channel.create(emptyChannelSettings).then(
          (res) => res.id
        );
        const waSettingsId = await Channel.create(emptyChannelSettings).then(
          (res) => res.id
        );
        const tgSettingsId = await Channel.create(emptyChannelSettings).then(
          (res) => res.id
        );
        const smsSettingsId = await Channel.create({ message: "Hello" }).then(
          (res) => res.id
        );

        return {
          found: false,
          result: User.create({
            name: name,
            channels: {
              vk: {
                enabled:
                  channels.findIndex(
                    (channel: any) => channel.accessor === "vk"
                  ) !== -1,
                settings: vkSettingsId,
              },
              wa: {
                enabled:
                  channels.findIndex(
                    (channel: any) => channel.accessor === "wa"
                  ) !== -1,
                settings: waSettingsId,
              },
              tg: {
                enabled:
                  channels.findIndex(
                    (channel: any) => channel.accessor === "tg"
                  ) !== -1,
                settings: tgSettingsId,
              },
              sms: {
                enabled:
                  channels.findIndex(
                    (channel: any) => channel.accessor === "sms"
                  ) !== -1,
                settings: smsSettingsId,
              },
            },
          }),
        };
      });
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

  async checkNameExistence(req: express.Request, res: express.Response) {
    try {
      const name = req.params.name;
      const result = await User.findOne({ name });
      res.status(200).json(!!result);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "Error", message: "Проблема с базой данных" });
    }
  }
}

export default new UserContoller();
