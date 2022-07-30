import mongoose, { Error } from "mongoose";

import Channel from "./Channel";

const emptyChannelSettings = {
  message: "",
  keyboard: {
    type: "standard",
    buttons: [],
  },
};

// const addressSchema = new mongoose.Schema({
//   street: String,
//   city: String,
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: {
//     type: Number,
//     min: 1,
//     max: 100,
//     validate: {
//       validator: (v: number) => v % 2 === 0,
//       message: (props: any) => `${props.value} is not an even number`,
//     },
//   },
//   createdAt: {
//     type: Date,
//     default: () => Date.now(),
//     immutable: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     uppercase: true,
//   },
//   updatedAt: Date,
//   bestFriend: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: "User",
//   },
//   hobbies: [String],
//   address: addressSchema,
// });

const channelInUserSchema = new mongoose.Schema({
  enabled: Boolean,
  settings: { type: mongoose.SchemaTypes.ObjectId, ref: "Channel" },
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    channels: {
      type: {
        vk: {
          type: channelInUserSchema,
          required: true,
        },

        wa: {
          type: channelInUserSchema,
          required: true,
        },

        tg: {
          type: channelInUserSchema,
          required: true,
        },

        sms: {
          type: channelInUserSchema,
          required: true,
        },
      },
      required: true,
    },
  },
  {
    statics: {
      findOneOrCreate: async function findOneOrCreate(
        condition: any
      ): Promise<any> {
        return this.findOne(condition).then(async (res) => {
          if (res) {
            return { found: true, result: res };
          } else {
            const vkSettingsId = await Channel.create(
              emptyChannelSettings
            ).then((res) => res.id);
            const waSettingsId = await Channel.create(
              emptyChannelSettings
            ).then((res) => res.id);
            const tgSettingsId = await Channel.create(
              emptyChannelSettings
            ).then((res) => res.id);
            const smsSettingsId = await Channel.create({ message: "" }).then(
              (res) => res.id
            );

            return {
              found: false,
              result: this.create({
                ...condition,
                channels: {
                  vk: {
                    enabled: false,
                    settings: vkSettingsId,
                  },
                  wa: {
                    enabled: false,
                    settings: waSettingsId,
                  },
                  tg: {
                    enabled: false,
                    settings: tgSettingsId,
                  },
                  sms: {
                    enabled: false,
                    settings: smsSettingsId,
                  },
                },
              }),
            };
          }
        });
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

export default User;
