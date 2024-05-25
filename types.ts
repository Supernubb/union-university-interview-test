interface Programm {
  title: string;
  specializedSubjects: [Specialization] | Skill[];
}

interface Specialization {
  skills: Skill[];
}

interface Skill {
  string: string;
}

interface ProgrammWithModules {
  title: string;
  modules: Module[];
}

interface Module {
  title: string;
  skills: Skill[];
}
