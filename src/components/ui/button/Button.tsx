import { FunctionComponent } from "react";
import styles from "./Button.module.scss";

interface ComponentProps {
  label: string;
  clickEvent: () => void;
  primary?: boolean;
  secondary?: boolean;
}

const Button: FunctionComponent<ComponentProps> = ({
  label,
  clickEvent,
  primary,
  secondary,
}) => {
  const getClassName = () => {
    if (primary) return `${styles.btn} ${styles.btn_primary}`;
    if (secondary) return `${styles.btn} ${styles.btn_secondary}`;
    return styles.btn;
  };

  return (
    <button className={getClassName()} onClick={clickEvent}>
      {label}
    </button>
  );
};

export default Button;
