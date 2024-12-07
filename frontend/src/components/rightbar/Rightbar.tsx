import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData.js";
import Online from "../Online/Online.tsx";

export function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/star.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpeg"
          alt=""
        />
        <p className="promotionName">ショッピング</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion2.jpeg"
          alt=""
        />
        <p className="promotionName">カーショップ</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion3.jpeg"
          alt=""
        />
        <p className="promotionName">林株式会社</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey"></span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="./assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">林</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Yamaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Koga</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/4.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Matukubo</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="./assets/person/5.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Kikukawa</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
