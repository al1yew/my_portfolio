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
    { id: nanoid(), category: "HTML/CSS", skill: "Bootstrap", icon: <BsBootstrap /> },
    { id: nanoid(), category: "HTML/CSS", skill: "Tailwind CSS", icon: <SiTailwindcss /> },
    { id: nanoid(), category: "HTML/CSS", skill: "SCSS", icon: <BsFiletypeScss /> },
    { id: nanoid(), category: "HTML/CSS", skill: "Semantic UI", icon: <SiSemanticuireact /> },
    { id: nanoid(), category: "HTML/CSS", skill: "styled-components", icon: <SiStyledcomponents /> },

    { id: nanoid(), category: "JavaScript", skill: "React.js", icon: <SiReact /> },
    { id: nanoid(), category: "JavaScript", skill: "Vue.js", icon: <SiVuedotjs /> },
    { id: nanoid(), category: "JavaScript", skill: "Axios", icon: <SiAxios /> },
    { id: nanoid(), category: "JavaScript", skill: "Jquery", icon: <SiJquery /> },
    { id: nanoid(), category: "JavaScript", skill: "Next.js", icon: <SiNextdotjs /> },

    { id: nanoid(), category: "React", skill: "Redux", icon: <SiRedux /> },
    { id: nanoid(), category: "React", skill: "Lodash", icon: <SiLodash /> },
    { id: nanoid(), category: "React", skill: "React Router", icon: <SiReactrouter /> },
    { id: nanoid(), category: "React", skill: "Next.js", icon: <SiNextdotjs /> },
    { id: nanoid(), category: "React", skill: "React Query", icon: <SiReactquery /> },
    { id: nanoid(), category: "React", skill: "Context API", icon: <SiReact /> },
    { id: nanoid(), category: "React", skill: "Contentful", icon: <SiContentful /> },

    { id: nanoid(), category: "C#", skill: "ASP.NET MVC", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "ASP.NET Web API", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "Entity Framework", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "ASP.NET Core", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "Microsoft Identity", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "AutoMapper", icon: <SiMicrosoftsqlserver /> },
    { id: nanoid(), category: "C#", skill: "FluentValidation", icon: <SiDotnet /> },
    { id: nanoid(), category: "C#", skill: "SignalR", icon: <SiKdenlive /> },
    { id: nanoid(), category: "C#", skill: "Dapper", icon: <SiDotnet /> },

    { id: nanoid(), category: "Database", skill: "MSSQL", icon: <SiMicrosoftsqlserver /> },
    { id: nanoid(), category: "Database", skill: "PostgreSQL", icon: <SiPostgresql /> },
    { id: nanoid(), category: "Database", skill: "MySQL", icon: <SiMysql /> },
    { id: nanoid(), category: "Database", skill: "MongoDB", icon: <SiMongodb /> },
];
