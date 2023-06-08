import { nanoid } from "nanoid";
import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";

import {
    SiSemanticuireact,
    SiStyledcomponents,
    SiAxios,
    SiRedux,
    SiLodash,
    SiReactrouter,
    SiNextdotjs,
    SiReactquery,
    SiJquery,
    SiTailwindcss,
    SiReact,
    SiVuedotjs,
    SiContentful,
    SiDotnet,
    SiMicrosoftsqlserver,
    SiKdenlive,
    SiMysql,
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";

export const links = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];

export const skills = [
    { id: nanoid(), category: "HTML/CSS", skillName: "Bootstrap", icon: <BsBootstrap /> },
    { id: nanoid(), category: "HTML/CSS", skillName: "Tailwind CSS", icon: <SiTailwindcss /> },
    { id: nanoid(), category: "HTML/CSS", skillName: "SCSS", icon: <BsFiletypeScss /> },
    { id: nanoid(), category: "HTML/CSS", skillName: "Semantic UI", icon: <SiSemanticuireact /> },
    { id: nanoid(), category: "HTML/CSS", skillName: "Styled Components", icon: <SiStyledcomponents /> },

    { id: nanoid(), category: "JavaScript", skillName: "React.js", icon: <SiReact /> },
    { id: nanoid(), category: "JavaScript", skillName: "Vue.js", icon: <SiVuedotjs /> },
    { id: nanoid(), category: "JavaScript", skillName: "Axios", icon: <SiAxios /> },
    { id: nanoid(), category: "JavaScript", skillName: "Jquery", icon: <SiJquery /> },
    { id: nanoid(), category: "JavaScript", skillName: "Next.js", icon: <SiNextdotjs /> },

    { id: nanoid(), category: "React", skillName: "Redux", icon: <SiRedux /> },
    { id: nanoid(), category: "React", skillName: "Lodash", icon: <SiLodash /> },
    { id: nanoid(), category: "React", skillName: "React Router", icon: <SiReactrouter /> },
    { id: nanoid(), category: "React", skillName: "Next.js", icon: <SiNextdotjs /> },
    { id: nanoid(), category: "React", skillName: "React Query", icon: <SiReactquery /> },
    { id: nanoid(), category: "React", skillName: "Context API", icon: <SiReact /> },
    { id: nanoid(), category: "React", skillName: "Contentful", icon: <SiContentful /> },

    { id: nanoid(), category: "C#", skillName: "ASP.NET MVC", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "ASP.NET Web API", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "Entity Framework", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "ASP.NET Core", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "Microsoft Identity", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "Auto Mapper", icon: <SiMicrosoftsqlserver /> },
    { id: nanoid(), category: "C#", skillName: "Fluent Validation", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skillName: "SignalR", icon: <SiKdenlive /> },
    { id: nanoid(), category: "C#", skillName: "Dapper", icon: <SiDotnet /> },

    { id: nanoid(), category: "Database", skillName: "MSSQL", icon: <SiMicrosoftsqlserver /> },
    { id: nanoid(), category: "Database", skillName: "Postgre SQL", icon: <SiPostgresql /> },
    { id: nanoid(), category: "Database", skillName: "MySQL", icon: <SiMysql /> },
    { id: nanoid(), category: "Database", skillName: "MongoDB", icon: <SiMongodb /> },
];
