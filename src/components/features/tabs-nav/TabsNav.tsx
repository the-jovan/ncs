import { FunctionComponent } from "react";
import styles from "./TabsNav.module.scss";

interface ITab {
  text: string;
  value: string;
  active: boolean;
  disabled?: boolean;
}

interface ComponentProps {
  tabs: Array<ITab>;
  onChangeTab: (val: string) => void;
}

const TabsNav: FunctionComponent<ComponentProps> = ({ tabs, onChangeTab }) => {
  const configClassName = (active: boolean, disabled = false) => {
    if (disabled) return `${styles.tabsnav_tab} ${styles.tabsnav_tab_disabled}`;
    if (active) return `${styles.tabsnav_tab} ${styles.tabsnav_tab_active}`;
    return `${styles.tabsnav_tab}`;
  };

  return (
    <ul className={styles.tabsnav}>
      {tabs.map((tab: ITab) => (
        <li
          key={tab.value}
          onClick={() => onChangeTab(tab.value)}
          className={configClassName(tab.active, tab.disabled)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  );
};

export default TabsNav;
