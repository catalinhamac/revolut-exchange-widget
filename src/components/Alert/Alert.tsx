import React, { FC, ReactNode } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import styles from "./Alert.module.scss";

export const testId = "alertTestId";

interface OwnProps {
  title?: string;
  actionBottom?: ReactNode;
  children: ReactNode;
}

export type IAlertPropsExtended = AlertProps & OwnProps;

export const Alert: FC<IAlertPropsExtended> = ({
  title,
  actionBottom,
  children,
  ...rest
}: IAlertPropsExtended) => {
  return (
    <MuiAlert
      data-testid={testId}
      severity="info"
      color="info"
      classes={{
        root: styles.MuiAlertRoot,
        standardInfo: styles.MuiAlertStandardInfo,
      }}
      {...rest}
    >
      <>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {children}
        {actionBottom ? actionBottom : null}
      </>
    </MuiAlert>
  );
};
