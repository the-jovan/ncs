import { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ComponentProps {
  label: string;
  primary?: boolean;
  secondary?: boolean;
}

const Button: FunctionComponent<ComponentProps> = ({
  label,
  primary,
  secondary,
}) => {
  const getClassName = () => {
    if (primary) return `${styles.btn} ${styles.btn_primary}`;
    if (secondary) return `${styles.btn} ${styles.btn_secondary}`;
    return styles.btn;
  };

  return <button className={getClassName()}>{label}</button>;
};

export default Button;
