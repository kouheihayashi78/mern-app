const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    // 画像のパス
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array, // フォロワーはどんどん増える可能性があるから(ユーザーの名前やIDをどんどん格納する)
      default: [],
    },
    followings: {
      type: Array, // フォロワーはどんどん増える可能性があるから(ユーザーの名前やIDをどんどん格納する)
      default: [],
    },
    // 権限があるかどうか
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // 概要
    desc: {
      type: String,
      max: 70,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  // データの登録をした日付と時間を格納
  { timestamps: true }
);
