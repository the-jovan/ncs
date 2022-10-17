import { FunctionComponent } from "react";
import styles from "./TabsNav.module.scss";

interface ITab {
  text: string;
  value: string;
  selected: boolean;
  disabled?: boolean;
}

interface ComponentProps {
  tabs: Array<ITab>;
  onChangeTab: (val: string) => void;
}

const TabsNav: FunctionComponent<ComponentProps> = ({ tabs, onChangeTab }) => {
  const configClassName = (selected: boolean, disabled = false) => {
    if (disabled) return `${styles.tabsnav_tab} ${styles.tabsnav_tab_disabled}`;
    if (selected) return `${styles.tabsnav_tab} ${styles.tabsnav_tab_selected}`;
    return `${styles.tabsnav_tab}`;
  };

  return (
    <ul className={styles.tabsnav}>
      {tabs.map((tab: ITab) => (
        <li
          key={tab.value}
          onClick={() => onChangeTab(tab.value)}
          // className={`${styles.tabsnav_tab}${tab.selected ? " ok" : ""}`}
          className={configClassName(tab.selected, tab.disabled)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  );
};

export default TabsNav;
