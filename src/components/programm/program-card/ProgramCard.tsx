import ProgramModule from "../program-module/ProgramModule";
import styles from "./style.module.scss";

const ProgramCard = ({ program }: { program: ProgrammWithModules }) => {
  return (
    <article className={`${styles.programCard}`}>
      <h2 className={`${styles.programCard__title} text__cardTitle text_black`}>
        {program.title}
      </h2>
      <div className={`${styles.programCard__moduleList}`}>
        {program.modules.map((module) => (
          <ProgramModule key={module.title} module={module} />
        ))}
      </div>
    </article>
  );
};

export default ProgramCard;
