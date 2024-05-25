"use client";

import { useState } from "react";
import styles from "./style.module.scss";

const ProgramModule = ({ module }: { module: Module }) => {
  const [expander, setExpander] = useState({
    open: false,
    firstRender: true,
  });

  return (
    <section className={styles.programModule}>
      <button
        className={`${styles.programModule__expander}
        ${
          expander.open
            ? styles.programModule__expander_expand
            : !expander.firstRender && styles.programModule__expander_collapse
        }
        text__cardModuleTitle text_darkGray`}
        onClick={() =>
          setExpander({ open: !expander.open, firstRender: false })
        }
      >
        <div className={`${styles.programModule__cross}`}>
          <div
            className={`${styles.programModule__crossHorizontalLine}
          ${
            expander.open
              ? styles.programModule__crossHorizontalLine_expand
              : !expander.firstRender &&
                styles.programModule__crossHorizontalLine_collapse
          }
          `}
          ></div>
          <div
            className={`${styles.programModule__crossVerticalLine}
          ${
            expander.open
              ? styles.programModule__crossVerticalLine_expand
              : !expander.firstRender &&
                styles.programModule__crossVerticalLine_collapse
          }
          `}
          ></div>
        </div>
        <h3
          className={`${styles.programModule__title}
        ${
          expander.open
            ? styles.programModule__title_expand
            : !expander.firstRender && styles.programModule__title_collapse
        }
        text__cardModuleTitle`}
        >
          {module.title}
        </h3>
      </button>
      <ul
        className={`
        ${styles.programModule__skillList}
        ${
          expander.open
            ? styles.programModule__skillList_expand
            : !expander.firstRender && styles.programModule__skillList_collapse
        }`}
      >
        {module.skills.map((skill) => (
          <li className={`${styles.programModule__skill}`} key={skill.string}>
            <div className="circle"></div>
            <p className={`text__cardModuleList`}>{skill.string}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramModule;
