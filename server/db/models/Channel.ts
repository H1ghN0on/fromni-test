import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: {
      name: String,
      accessor: String,
    },
    validate: {
      validator: (v: string) => {
        return v === "url" || v === "text";
      },
      message: (props: any) => `${props.value} is not real button type!`,
    },
    required: true,
  },
});

export const channelSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  keyboard: {
    type: {
      type: String,
      validate: {
        validator: (v: string) => {
          return v === "standard" || v === "inline";
        },
        message: (props: any) => `${props.value} is not real keyboard type!`,
      },
    },
    buttons: [buttonSchema],
  },
});

const Channel = mongoose.model("Channel", channelSchema);

export default Channel;
