import { Level } from "../../App";

import "./StrengthBar.css";

type StrengthBarProps = {
  level: Level;
};

const StrengthBar = ({ level }: StrengthBarProps) => {
  return (
    <div className="strength-bar-wrapper">
      <div className="strength-bar">
        <div
          className={
            level.empty
              ? "strength-bar__item-empty"
              : level.short
              ? "strength-bar__item-fail"
              : level.easy
              ? "strength-bar__item-fail"
              : level.medium
              ? "strength-bar__item-medium"
              : level.strong
              ? "strength-bar__item-strong"
              : ""
          }></div>
        <div
          className={
            level.empty
              ? "strength-bar__item-empty"
              : level.short
              ? "strength-bar__item-fail"
              : level.easy
              ? "strength-bar__item-empty"
              : level.medium
              ? "strength-bar__item-medium"
              : level.strong
              ? "strength-bar__item-strong"
              : ""
          }></div>
        <div
          className={
            level.empty
              ? "strength-bar__item-empty"
              : level.short
              ? "strength-bar__item-fail"
              : level.easy
              ? "strength-bar__item-empty"
              : level.medium
              ? "strength-bar__item-empty"
              : level.strong
              ? "strength-bar__item-strong"
              : ""
          }></div>
      </div>
    </div>
  );
};

export default StrengthBar;
