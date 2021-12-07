import moment from "moment";

interface Skill {
  years: number;
  label: string;
}

const BORDER_WIDTH = 1;
const BORDER_RADIUS = 3;

const WARM_COLORS = [
  "249, 65, 68",
  "243, 114, 44",
  "248, 150, 30",
  "249, 199, 79",
];

const COOL_COLORS = ["151, 223, 252", "142, 181, 240"];

const PINK_COLORS = [
  "234, 105, 139",
  "213, 93, 146",
  "192, 82, 153",
  "172, 70, 161",
  "151, 58, 168",
  "130, 47, 175",
  "109, 35, 182",
  "100, 17, 173",
  "87, 16, 137",
];

const CORE_SKILLS = [
  {
    label: "JavaScript",
    years: moment().diff(moment("201401", "YYYYMM"), "years"),
  },
  {
    label: "HTML5/CSS3",
    years: moment().diff(moment("201401", "YYYYMM"), "years"),
  },
  {
    label: "TypeScript",
    years: moment().diff(moment("201810", "YYYYMM"), "years"),
  },
  {
    label: "Node.js",
    years: moment("201905", "YYYYMM").diff(moment("201403", "YYYYMM"), "years"),
  },
];

const GENERAL_SKILLS = [
  {
    label: "Object-Oriented Programming",
    years: 9,
  },
  {
    label: "RESTful Development",
    years: 6,
  },
];

const TOOL_SKILLS = [
  {
    label: "Angular",
    years: 4,
  },
  {
    label: "React",
    years: 3,
  },
  {
    label: "jQuery",
    years: 2,
  },
  {
    label: "Sass",
    years: 4,
  },
  {
    label: "LESS",
    years: 3,
  },
  {
    label: "Git",
    years: 7,
  },
  {
    label: "Jest",
    years: 0.5,
  },
  {
    label: "Gulp/Grunt",
    years: 2,
  },
  {
    label: "Emotion",
    years: 1.5,
  },
];

const sortedSkills = (set: Skill[]) => set.sort((a, b) => a.years - b.years);

const applyOpacityToColor = (color: string, opacity: number): string => {
  return `rgba(${color}, ${opacity})`;
};

export const SKILL_DATA = {
  datasets: [
    {
      label: "Core Skills",
      data: sortedSkills(CORE_SKILLS).map((skill) => skill.years),
      backgroundColor: WARM_COLORS.map((color: string) =>
        applyOpacityToColor(color, 0.6)
      ),
      borderColor: WARM_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
      borderWidth: BORDER_WIDTH,
      borderRadius: BORDER_RADIUS,
      hoverBackgroundColor: WARM_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
    },
  ],
  labels: sortedSkills(CORE_SKILLS).map((skill) => skill.label),
};

export const GENSKILL_DATA = {
  datasets: [
    {
      label: "General Skills",
      data: GENERAL_SKILLS.map((skill) => skill.years),
      backgroundColor: COOL_COLORS.map((color: string) =>
        applyOpacityToColor(color, 0.6)
      ),
      borderColor: COOL_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
      borderWidth: BORDER_WIDTH,
      borderRadius: BORDER_RADIUS,
      hoverBackgroundColor: COOL_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
    },
  ],
  labels: GENERAL_SKILLS.map((skill) => skill.label),
};

export const LIBSKILL_DATA = {
  datasets: [
    {
      label: "Tools & Libraries",
      data: sortedSkills(TOOL_SKILLS).map((skill) => skill.years),
      backgroundColor: PINK_COLORS.map((color: string) =>
        applyOpacityToColor(color, 0.6)
      ),
      borderColor: PINK_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
      borderWidth: BORDER_WIDTH,
      borderRadius: BORDER_RADIUS,
      hoverBackgroundColor: PINK_COLORS.map((color: string) =>
        applyOpacityToColor(color, 1)
      ),
    },
  ],
  labels: sortedSkills(TOOL_SKILLS).map((skill) => skill.label),
};
