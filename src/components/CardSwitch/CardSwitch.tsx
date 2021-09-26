import React from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import IconButton from "@mui/material/IconButton";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectIsCardSwitchDirectionUp,
  setCardSwitchDirectionUp,
} from "../../redux/currencies-slice/currencies-slice";

import styles from "./CardSwitch.module.scss";

export const testId = "cardSwitchTestId";

export const CardSwitch = () => {
  const dispatch = useAppDispatch();
  const isCardSwitchDirectionUp = useAppSelector(
    selectIsCardSwitchDirectionUp,
    shallowEqual
  );

  const handleClick = () => {
    dispatch(setCardSwitchDirectionUp(!isCardSwitchDirectionUp));
  };

  return (
    <div className={styles.cardSwitch} data-testid={testId}>
      <span className={styles.btnWrapper}>
        <IconButton
          aria-label="switch exchange"
          color="primary"
          onClick={handleClick}
        >
          {isCardSwitchDirectionUp ? (
            <ArrowUpwardRoundedIcon />
          ) : (
            <ArrowDownwardRoundedIcon />
          )}
        </IconButton>
      </span>
    </div>
  );
};
