import mongoose from "mongoose";

const channelInUserSchema = new mongoose.Schema({
  enabled: Boolean,
  settings: { type: mongoose.SchemaTypes.ObjectId, ref: "Channel" },
});

const userSchema = new mongoose.Schema({
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
});

const User = mongoose.model("User", userSchema);

export default User;
