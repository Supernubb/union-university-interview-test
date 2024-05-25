import ProgramCard from "@/components/programm/program-card/ProgramCard";
import { getData } from "@/llib/getData";
import { divideSpecializedSubjects } from "@/llib/divideSpecializedSubjects";
import styles from "./style.module.scss";

const DisciplinesSpecialized = async () => {
  const programsData = await getData({ apiSegment: "products?_limit=5" });
  const programs: ProgrammWithModules[] =
    divideSpecializedSubjects(programsData);

  return (
    <section className={`${styles.disciplinesSpecialized} container text`}>
      <h1
        className={`${styles.disciplinesSpecialized__title} text__title text_darkGray`}
      >
        Специализированные дисциплины
      </h1>
      <div className={`${styles.disciplinesSpecialized__programList}`}>
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
      <aside className={`${styles.disciplinesSpecialized__notes}`}>
        <div
          className={`${styles.disciplinesSpecialized__note} ${styles.disciplinesSpecialized__note_bgBrightRed} text_white`}
        >
          <div
            className={`${styles.disciplinesSpecialized__noteCornerWhite}`}
          ></div>
          <div
            className={`${styles.disciplinesSpecialized__noteCornerBrightRed}`}
          ></div>
          <h1
            className={`${styles.disciplinesSpecialized__noteTitle} text__noteTitle`}
          >
            Практические модули
          </h1>
          <p className="text__noteText">
            Работа над собственными проектами: практика групповых
            взаимодействий, кейс-методы, эссе
          </p>
        </div>
        <div
          className={`${styles.disciplinesSpecialized__note} ${styles.disciplinesSpecialized__note_bgblackOlive} text_white`}
        >
          <h1
            className={`${styles.disciplinesSpecialized__noteTitle} text__noteTitle`}
          >
            Итоговая аттестация
          </h1>
          <ul className="text__noteText">
            <li className={`${styles.disciplinesSpecialized__noteTextList}`}>
              <div className="circle"></div>
              <p>
                Бизнес-проектирование (подготовка итоговой аттестационной
                работы, консультирование по бизнес-проектированию)
              </p>
            </li>
            <li className={`${styles.disciplinesSpecialized__noteTextList}`}>
              <div className="circle"></div>
              <p>Защита итоговой аттестационной работы</p>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default DisciplinesSpecialized;
