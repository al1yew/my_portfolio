import { nanoid } from "nanoid";
import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";

import {
    SiStyledcomponents,
    SiAxios,
    SiRedux,
    SiLodash,
    SiReactrouter,
    SiNextdotjs,
    SiNetlify,
    SiReactquery,
    SiJquery,
    SiTailwindcss,
    SiReact,
    SiAuth0,
    SiVuedotjs,
    SiContentful,
    SiDotnet,
    SiMicrosoftsqlserver,
    SiKdenlive,
    SiMysql,
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";

import smallVinyoxla from "./assets/images/smallVinyoxla.png";
import smallBacola from "./assets/images/smallBacola.png";
import smallCocktails from "./assets/images/smallCocktails.png";
import smallComfy from "./assets/images/smallComfy.png";
import smallGrandTour from "./assets/images/smallGrandTour.png";
import smallRusum from "./assets/images/smallRusum.png";
import smallSuefa from "./assets/images/smallSuefa.png";
import smallToDO from "./assets/images/smallToDO.png";
import smallUnsplash from "./assets/images/smallUnsplash.png";
import smallBP from "./assets/images/smallBP.png";
import smallPullBear from "./assets/images/smallPullBear.png";

import problem from "./assets/images/newproblem.png";
import react from "./assets/images/newreact.png";
import css from "./assets/images/newcss.png";
import diplom from "./assets/images/newcode.png";

export const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Contact",
];

export const skills = [
    {
        id: nanoid(),
        category: "HTML/CSS",
        skillName: "Bootstrap",
        icon: <BsBootstrap />,
    },
    {
        id: nanoid(),
        category: "HTML/CSS",
        skillName: "Tailwind CSS",
        icon: <SiTailwindcss />,
    },
    {
        id: nanoid(),
        category: "HTML/CSS",
        skillName: "SCSS",
        icon: <BsFiletypeScss />,
    },
    {
        id: nanoid(),
        category: "HTML/CSS",
        skillName: "Styled Components",
        icon: <SiStyledcomponents />,
    },

    {
        id: nanoid(),
        category: "JavaScript",
        skillName: "React.js",
        icon: <SiReact />,
    },
    // { id: nanoid(), category: "JavaScript", skillName: "Vue.js", icon: <SiVuedotjs /> },
    {
        id: nanoid(),
        category: "JavaScript",
        skillName: "Axios",
        icon: <SiAxios />,
    },
    {
        id: nanoid(),
        category: "JavaScript",
        skillName: "Jquery",
        icon: <SiJquery />,
    },
    // { id: nanoid(), category: "JavaScript", skillName: "Next.js", icon: <SiNextdotjs /> },

    { id: nanoid(), category: "React", skillName: "Redux", icon: <SiRedux /> },
    {
        id: nanoid(),
        category: "React",
        skillName: "Lodash",
        icon: <SiLodash />,
    },
    {
        id: nanoid(),
        category: "React",
        skillName: "Netlify",
        icon: <SiNetlify />,
    },
    {
        id: nanoid(),
        category: "React",
        skillName: "React Router",
        icon: <SiReactrouter />,
    },
    // {
    //     id: nanoid(),
    //     category: "React",
    //     skillName: "Next.js",
    //     icon: <SiNextdotjs />,
    // },
    {
        id: nanoid(),
        category: "React",
        skillName: "React Query",
        icon: <SiReactquery />,
    },
    {
        id: nanoid(),
        category: "React",
        skillName: "Auth0",
        icon: <SiAuth0 />,
    },
    {
        id: nanoid(),
        category: "React",
        skillName: "Context API",
        icon: <SiReact />,
    },
    {
        id: nanoid(),
        category: "React",
        skillName: "Contentful",
        icon: <SiContentful />,
    },

    {
        id: nanoid(),
        category: "C#",
        skillName: "ASP.NET MVC",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "ASP.NET Web API",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "Entity Framework",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "ASP.NET Core",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "Microsoft Identity",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "Auto Mapper",
        icon: <SiMicrosoftsqlserver />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "Fluent Validation",
        icon: <SiDotnet />,
    },
    {
        id: nanoid(),
        category: "C#",
        skillName: "SignalR",
        icon: <SiKdenlive />,
    },
    { id: nanoid(), category: "C#", skillName: "Dapper", icon: <SiDotnet /> },

    {
        id: nanoid(),
        category: "Database",
        skillName: "MSSQL",
        icon: <SiMicrosoftsqlserver />,
    },
    {
        id: nanoid(),
        category: "Database",
        skillName: "Postgre SQL",
        icon: <SiPostgresql />,
    },
    {
        id: nanoid(),
        category: "Database",
        skillName: "MySQL",
        icon: <SiMysql />,
    },
    {
        id: nanoid(),
        category: "Database",
        skillName: "MongoDB",
        icon: <SiMongodb />,
    },
];

export const projects = [
    {
        id: 1,
        category: "Full Stack",
        projectName: "BP Manual Risk Handling Tool",
        smallDescription:
            "Manual risk handling tool for managing employee safety and risk.",
        longDescription:
            "Introducing the innovative project by BP AGT Region Health Team: a collaboration between React and .NET technologies. Developed under the guidance of BP AGT Health Team worker, this powerful solution prioritizes employee safety by assessing and managing potential risks in the workplace. By leveraging React and .NET, we have created an efficient system that calculates the probability of risks based on key factors like weight of carried items, distance traveled, and task frequency per hour. Our dedicated admin area empowers BP administrators to effortlessly observe worker assessments and manage the project's database. With a dedicated admin area, BP administrators can effortlessly monitor worker assessments and manage the project's database.",
        technologies: [
            "React",
            "C#",
            "ASP.NET Web API",
            "Repository Pattern Design",
            "N-Layer Architecture",
            "Microsoft SQL Server",
            "SCSS",
            "Axios",
            "Context API",
            "React Bootstrap",
        ],
        link: "https://bprisk.netlify.com",
        smallImage: smallBP,
    },
    {
        id: 2,
        category: "Full Stack",
        projectName: "Vinyoxla",
        smallDescription: "A business venture selling CarFax records.",
        longDescription:
            "Introducing Vinyoxla, a dynamic website developed for my previous employer. This innovative business venture focuses on selling CarFax records, providing users with comprehensive vehicle history reports. With over 50 code outcomes, users can engage in a multitude of actions throughout their journey on the website, all of which are meticulously recorded and managed in database. Vinyoxla offers flexible payment options, allowing users to top up their profile balance and make purchases directly. Alternatively, users can opt to pay via bank card to the local bank if they prefer to keep a zero balance on their profile. The hosting provider securely stores vin codes, CarFax records, and associated data, ensuring reliable access and retrieval. The website's sophisticated event handling logic records user actions as event records, accompanied by multiple event messages. Administrators have access to a comprehensive admin area, empowering them with features like data sorting, relationship management, and full CRUD operations. Users can conveniently access their purchased CarFax records in their personal cabinet and sort them as desired. Login is quick and straightforward, with users entering their phone number and receiving an SMS verification code.",
        technologies: [
            "HTML",
            "SCSS/CSS",
            "JavaScript",
            "Jquery",
            "C#",
            "ASP.NET MVC",
            "Repository Pattern Design",
            "N-Layer Architecture",
            "Microsoft SQL Server",
        ],
        link: "https://vinyoxla.az",
        smallImage: smallVinyoxla,
    },
    {
        id: 3,
        category: "Full Stack",
        projectName: "Pull & Bear",
        smallDescription:
            "E-Commerce store selling clothes, made for portfolio.",
        longDescription:
            "A fully functional and completed E-Commerce store offering a wide range of fashionable clothing and related products. Developed as the final project of my software programming course two years ago, Pull & Bear received a perfect score of 100 points. With its comprehensive pages and responsive design, this project showcases my expertise in software programming. While the backend is currently not deployed on a hosting provider, the code can be found on my GitHub repository. Pull & Bear incorporates a robust cart management system, intricate product color and size relation logics, various algorithms, and plugins. The extensive admin area enables seamless management of all aspects of the website, including image sections, product details, and more.",
        technologies: [
            "HTML",
            "SCSS/CSS",
            "JavaScript",
            "Jquery",
            "C#",
            "ASP.NET MVC",
            "Repository Pattern Design",
            "N-Layer Architecture",
            "Microsoft SQL Server",
        ],
        link: "https://vasifecom.netlify.com",
        smallImage: smallPullBear,
    },
    {
        id: 4,
        category: "Front End",
        projectName: "To ... List",
        smallDescription:
            "App with multiple task categories and user-friendly management.",
        longDescription:
            "Introducing \"To ... List\", an intuitive to-do list application built with React. This app goes beyond a simple to-do list, offering users the ability to manage various task categories like 'to go,' 'to buy,' 'to create,' 'to achieve,' and more. Leveraging the power of React and CSS, \"To ... List\" provides a seamless user experience with smooth task updates and deletions. By utilizing the 'useReducer' hook, the app efficiently manages state changes and ensures optimal performance. Additionally, all user data is stored securely within the browser's local storage, allowing users to seamlessly access and organize their tasks while managing their time effectively. Experience hassle-free task management with \"To ... List\"!",
        technologies: ["React"],
        link: "https://donotes.netlify.com",
        smallImage: smallToDO,
    },
    {
        id: 5,
        category: "Front End",
        projectName: "Customs Taxes Calculator",
        smallDescription:
            "Customs calculator for imported vehicles based on Azerbaijan's laws.",
        longDescription:
            "Introducing Rusum.Az, a powerful customs calculator designed for my previous employer. This algorithmic solution is meticulously crafted based on the customs code and laws of Azerbaijan Republic. Specifically tailored for imported vehicles, Rusum.Az accurately computes all taxes applicable at the border and post-import. By utilizing various factors and values, it efficiently manages the final cost of taxes, including intermediate taxes that contribute to the overall result. The convenience and reliability of Rusum.Az ensures precise tax calculations, facilitating a streamlined and transparent process for the importation of automobiles.",
        technologies: ["HTML", "SCSS/CSS", "JavaScript", "Jquery"],
        link: "https://rusum.az",
        smallImage: smallRusum,
    },
    {
        id: 6,
        category: "Full Stack",
        projectName: "Suefa",
        smallDescription:
            "A rock-paper-scissors game with earning opportunities for users who win.",
        longDescription:
            "Introducing Suefa, an engaging rock-paper-scissors game designed exclusively for my previous employer. This interactive application features a login page for personalized user experiences. Each time the user plays the game and clicks 'reload,' Suefa displays relevant advertisements for locals and creates a dynamic and immersive gaming environment. Users have the opportunity to earn money by achieving a remarkable 10:0 win record. With a dedicated admin area, the website owner gains complete control over the game. All game sessions are recorded and securely stored in the database, allowing the admin to review and analyze gameplay statistics. Furthermore, the admin has the ability to contact and reward those victorious players directly from the admin area. Immerse yourself in the world of Suefa and experience the thrill of rock-paper-scissors like never before!",
        technologies: [
            "HTML",
            "SCSS/CSS",
            "ASP.NET MVC",
            "Microsoft SQL Server",
            "JavaScript",
            "Jquery",
        ],
        link: "https://suefa.app",
        smallImage: smallSuefa,
    },
    {
        id: 7,
        category: "Front End",
        projectName: "Comfy Sloth",
        smallDescription: "A React-based E-Commerce App, made for portfolio.",
        longDescription:
            "Introducing Comfy Cloth, an immersive e-commerce application built using React, Context API, React Router, and useReducer. This dynamic web application specializes in selling furniture, offering a wide range of products to customers. Comfy Cloth can  integrate with Stripe, allowing secure and convenient payment processing. The application leverages local storage to store cart items, ensuring a seamless shopping experience across sessions. With its own filtering system powered by useReducer and Context API, users can easily explore and discover the furniture they desire. Experience the comfort and convenience of Comfy Cloth as you shop for high-quality furniture from the comfort of your home.",
        technologies: ["React", "Context API", "React Router", "Auth0"],
        link: "https://vasifcomfy.netlify.com",
        smallImage: smallComfy,
    },
    {
        id: 8,
        category: "Front End",
        projectName: "Bacola",
        smallDescription:
            "A responsive grocery selling app created for my portfolio.",
        longDescription:
            "Introducing Bacola, an innovative grocery selling app crafted specifically for my portfolio during a course. With its responsive design, Bacola aims to provide users with a seamless and user-friendly shopping experience. While currently focusing on the front-end development, the app showcases my ability to create visually appealing and intuitive interfaces for e-commerce platforms. Bacola enables users to browse through a variety of grocery products, add them to their cart, and proceed with a hassle-free checkout process. Although the app is currently limited to the front-end functionality, its purpose is to demonstrate my skills in crafting compelling user experiences for online grocery shopping. Step into the world of Bacola and explore a glimpse of my capabilities in web development and design.",
        technologies: ["HTML", "SCSS/CSS", "JavaScript", "Jquery"],
        link: "https://bacola.netlify.app",
        smallImage: smallBacola,
    },
    {
        id: 9,
        category: "Front End",
        projectName: "Cocktails",
        smallDescription:
            "Explore cocktails and recipe features with Cocktails.",
        longDescription:
            "Discover a world of delightful cocktails with our interactive Cocktails website. Whether you're looking for a classic favorite or seeking new concoctions, our platform allows you to explore and select cocktails based on your preferences. Experience personalized search capabilities and uncover the perfect recipe to satisfy your taste buds. Cheers to a delightful journey of mixology!",
        technologies: ["React", "Context API", "React Router"],
        link: "https://vasifcocktails.netlify.com",
        smallImage: smallCocktails,
    },
    {
        id: 10,
        category: "Front End",
        projectName: "Unsplash Images",
        smallDescription:
            "Search different images related to your desired content.",
        longDescription:
            "Embark on a visual journey with Unsplash Images project. Simply type in a word or phrase, and instantly find a vast collection of stunning images relevant to your provided content. Whether you're seeking inspiration, looking for the perfect visual for your project, or simply enjoying the beauty of photography, Unsplash Images has you covered. Additionally, enhance your viewing experience by switching to the dark mode theme for a sleek and immersive interface. Start exploring and let your imagination roam through captivating visuals!",
        technologies: ["React", "Context API", "React Router"],
        link: "https://vasifunsplash.netlify.app/",
        smallImage: smallUnsplash,
    },
    // {
    //     id: nanoid(),
    //     category: "Front End",
    //     projectName: "Take Color",
    //     smallDescription: "Generate color shades and gradients with ease.",
    //     longDescription:
    //         "Discover the power of color with TakeColor, a versatile web application that simplifies the process of generating color shades and gradients. By simply entering your desired color, TakeColor provides a range of shades and variants, allowing you to explore different color combinations and gradients effortlessly. Whether you're a designer, developer, or simply seeking inspiration, TakeColor empowers you to create visually stunning projects by harnessing the magic of color.",
    //     technologies: ["HTML", "SCSS/CSS", "JavaScript", "Jquery"],
    //     link: "https://takecolor.netlify.app/",
    //     image: "",
    // },
    {
        id: 11,
        category: "Front End",
        projectName: "Grand Tour",
        smallDescription: "Hotel booking application developer for portfolio.",
        longDescription:
            "Welcome to captivating hotel booking website designed to showcase my portfolio. Discover a world of exceptional stays at your fingertips. With its user-friendly interface, Vasif Hotel allows you to effortlessly browse and book your desired accommodations. Whether you're planning a business trip or a leisurely getaway, Vasif Hotel offers a range of options to suit your needs. Experience convenience, comfort, and unparalleled hospitality as you embark on your next adventure with Vasif Hotel.",
        technologies: ["HTML", "SCSS/CSS", "JavaScript"],
        link: "https://vasifhotel.netlify.app/",
        smallImage: smallGrandTour,
    },
];

export const certificates = [
    {
        id: 1,
        certName: "Software Development",
        date: "October, 2022",
        description:
            "Honour degree from Code Academy, a private educational complex accredited by Azerbaijani Ministry of Education and partnered with Microsoft. The 7-month course offered classes of HTML, CSS, JavaScript, C#, MSSQL, React and other technologies. This diverse skill set empowers me to develop web applications, learn new languages, explore technologies, and utilize frameworks and libraries to enhance my skills.",
        link: "https://ibb.co/2dkJTm2",
        image: diplom,
    },
    {
        id: 2,
        certName: "React",
        date: "November, 2022",
        description:
            "Through coding challenges and assessments on HackerRank, I have honed my skills in React, mastering the fundamentals and advanced concepts of the library. This certification validates my ability to build interactive user interfaces, utilizing React's component-based architecture and state management. With this, I am equipped to develop scalable web applications, leveraging React's extensive ecosystem and its ability to seamlessly integrate with other technologies.",
        link: "https://www.hackerrank.com/certificates/iframe/051a10db1bc9",
        image: react,
    },
    {
        id: 3,
        certName: "Problem Solving",
        date: "November, 2022",
        description:
            "Given for dealing with diverse data structures and algorithms. This certification serves as validation for my expertise in effectively addressing complex programming problems and optimizing code for superior performance. Having established a solid groundwork in problem solving, I possess the necessary skills to tackle a wide array of coding challenges spanning various domains.",
        link: "https://www.hackerrank.com/certificates/iframe/051a10db1bc9",
        image: problem,
    },
    {
        id: 4,
        certName: "HTML and CSS",
        date: "November, 2022",
        description:
            "Through focused dedication on HackerRank, I have enhanced my mastery of HTML and CSS. This certification serves as concrete evidence of my aptitude in constructing well-organized web pages using these essential web technologies. This certification serves as a testament to my knowledge in creating responsive layouts, skillfully employing CSS selectors, and implementing contemporary design principles.",
        link: "https://www.hackerrank.com/certificates/iframe/f8e6e5356a66",
        image: css,
    },
];
