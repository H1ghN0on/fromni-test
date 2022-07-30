import express from "express";
import Channel from "../db/models/Channel";
import User from "../db/models/User";

class ChannelController {
  async get(req: express.Request, res: express.Response) {
    try {
      const name = req.params.name;
      const user = await User.findOne({ name });

      if (user) {
        const vk = await Channel.findById(user.channels.vk.settings);
        const wa = await Channel.findById(user.channels.wa.settings);
        const tg = await Channel.findById(user.channels.tg.settings);
        const sms = await Channel.findById(user.channels.sms.settings);

        res.status(200).json({
          vk: {
            enabled: user.channels.vk.enabled,
            settings: vk,
          },
          wa: {
            enabled: user.channels.wa.enabled,
            settings: wa,
          },
          tg: {
            enabled: user.channels.tg.enabled,
            settings: tg,
          },
          sms: {
            enabled: user.channels.sms.enabled,
            settings: sms,
          },
        });
      } else {
        res
          .status(500)
          .json({ status: "Error", message: "Проблема с базой данных" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: "Error", message: "Проблема с сервером" });
    }
  }

  async enable(req: express.Request, res: express.Response) {
    try {
      const { name, channel, enabled } = req.body;

      const user = await User.findOne({ name });

      if (user) {
        user.channels[channel as "vk" | "wa" | "tg" | "sms"].enabled = enabled;
        await user.save();
        res.status(200).json({ status: "OK" });
      } else {
        res
          .status(500)
          .json({ status: "Error", message: "Пользователь не найден" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: "Error", message: "Проблема с сервером" });
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      const { name, channelInfo } = req.body;

      const user = await User.findOne({ name });

      if (user) {
        await Channel.findByIdAndUpdate(
          user.channels[channelInfo.accessor as "vk" | "wa" | "tg" | "sms"]
            .settings,

          channelInfo
        );
        res.status(200).json({ status: "OK" });
      } else {
        res
          .status(500)
          .json({ status: "Error", message: "Пользователь не найден" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: "Error", message: "Проблема с сервером" });
    }
  }
}

export default new ChannelController();
