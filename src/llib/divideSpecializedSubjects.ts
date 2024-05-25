export const divideSpecializedSubjects = (
  programs: Programm[]
): ProgrammWithModules[] => {
  return programs.map((program) => {
    const module1: Module = {
      title: "1 модуль",
      skills: [],
    };
    const module2: Module = {
      title: "2 модуль",
      skills: [],
    };

    const devider = (subject: Skill, index: number) => {
      if (index % 2 === 0) {
        module1.skills.push(subject);
      } else {
        module2.skills.push(subject);
      }
    };

    if (program.specializedSubjects.length === 0) {
      module1.skills.push({ string: "Дисциплины будут скоро добавлены" });
      module2.skills.push({ string: "Дисциплины будут скоро добавлены" });
    } else if (
      (program.specializedSubjects as [Specialization])[0]?.skills?.length !== 0
    ) {
      (program.specializedSubjects as [Specialization])[0].skills.forEach(
        (subject, index) => {
          devider(subject, index);
        }
      );
    } else {
      (program.specializedSubjects as Skill[]).forEach((subject, index) => {
        devider(subject, index);
      });
    }

    return {
      title: program.title,
      modules: [module1, module2],
    };
  });
};
