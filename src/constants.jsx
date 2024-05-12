import { nanoid } from "nanoid";
import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";
import { PiNotionLogoLight } from "react-icons/pi";
import { IoIosGitPullRequest } from "react-icons/io";

import {
  SiStyledcomponents,
  SiAxios,
  SiRedux,
  SiLodash,
  SiReactrouter,
  SiNextdotjs,
  SiPostman,
  SiNetlify,
  SiReactquery,
  SiJquery,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiAuth0,
  SiVuedotjs,
  SiContentful,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiKdenlive,
  SiMysql,
  SiPostgresql,
  SiDaisyui,
  SiMicrosoftazure,
  SiMongodb,
  SiStorybook,
  SiChromatic,
  SiSwagger,
} from "react-icons/si";
import { MdLanguage } from "react-icons/md";

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
import smallCeramicCity from "./assets/images/smallCeramicCity.png";
import smallvincodeaz from "./assets/images/smallvincodeaz.png";
import smallcomfynew from "./assets/images/smallcomfynew.png";

import problem from "./assets/images/problem.png";
import react from "./assets/images/react.png";
import css from "./assets/images/css.png";
import diplom from "./assets/images/code.png";
import toefl from "./assets/images/toefl.png";
import csharp from "./assets/images/csharp.png";
import restapi from "./assets/images/restapi.png";
import sql from "./assets/images/sql.png";

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
    category: "React",
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
  {
    id: nanoid(),
    category: "React",
    skillName: "Typescript",
    icon: <SiTypescript />,
  },
  {
    id: nanoid(),
    category: "JavaScript",
    skillName: "Next.js",
    icon: <SiNextdotjs />,
  },

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
    skillName: "Storybook",
    icon: <SiStorybook />,
  },
  {
    id: nanoid(),
    category: "React",
    skillName: "Chromatic",
    icon: <SiChromatic />,
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
    skillName: "Postman",
    icon: <SiPostman />,
  },
  {
    id: nanoid(),
    category: "C#",
    skillName: "NLog",
    icon: <PiNotionLogoLight />,
  },
  {
    id: nanoid(),
    category: "C#",
    skillName: "Localization",
    icon: <MdLanguage />,
  },
  {
    id: nanoid(),
    category: "C#",
    skillName: "Middlewares",
    icon: <IoIosGitPullRequest />,
  },
  {
    id: nanoid(),
    category: "C#",
    skillName: "SignalR",
    icon: <SiKdenlive />,
  },
  { id: nanoid(), category: "C#", skillName: "Dapper", icon: <SiDotnet /> },
  { id: nanoid(), category: "C#", skillName: "Swagger", icon: <SiSwagger /> },
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
    category: "React",
    skillName: "DaisyUI",
    icon: <SiDaisyui />,
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
  {
    id: nanoid(),
    category: "Database",
    skillName: "Azure",
    icon: <SiMicrosoftazure />,
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
      "N-Tier Architecture",
      "Microsoft SQL Server",
      "SCSS",
      "Axios",
      "Context API",
      "React Bootstrap",
    ],
    link: "https://bp-front-v2.vercel.app/",
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
      "N-Tier Architecture",
      "Microsoft SQL Server",
    ],
    link: "https://vinyoxla.az",
    smallImage: smallVinyoxla,
  },
  {
    id: 3,
    category: "Full Stack",
    projectName: "E-commerce website",
    smallDescription: "E-Commerce store selling clothes, made for portfolio.",
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
      "N-Tier Architecture",
      "Microsoft SQL Server",
    ],
    link: "https://final-project-five-inky.vercel.app/",
    smallImage: smallPullBear,
  },
  {
    id: 4,
    category: "Full Stack",
    projectName: "Ceramic City",
    smallDescription: "E-Commerce catalogue for a popular brand in Azerbaijan",
    longDescription:
      "I developed an ASP.NET MVC ecommerce catalogue for a brand selling bathroom furniture and accessories in Baku, Azerbaijan. The website showcases the brand's products and services, as well as its unique value proposition. The application was built using HTML, CSS, JavaScript, ASP.NET, MSSQL, C#, and Entity Framework. It was completed in one month and features a fully responsive design and good SEO optimization. The backend was built using a variety of algorithms, and the UI was built using JavaScript DOM manipulation. The website includes an admin area where users can manage products, orders, and other content. The admin area is also fully responsive, making it easy to use on any device. I am proud of the work I did on this project, and I believe it is a valuable addition to my portfolio. The website is well-designed, functional, and easy to use. It is also SEO-optimized, which will help the brand attract new customers. I am confident that this website will be a valuable asset to the brand, and I am excited to see how it helps them grow their business.",
    technologies: [
      "HTML",
      "SCSS/CSS",
      "JavaScript",
      "Jquery",
      "C#",
      "ASP.NET MVC",
      "Repository Pattern Design",
      "N-Tier Architecture",
      "Microsoft SQL Server",
      "Entity Framework",
    ],
    link: "https://ceramiccity.az",
    smallImage: smallCeramicCity,
  },
  {
    id: 5,
    category: "Front End",
    projectName: "To ... List",
    smallDescription:
      "App with multiple task categories and user-friendly management.",
    longDescription:
      "Introducing \"To ... List\", an intuitive to-do list application built with React. This app goes beyond a simple to-do list, offering users the ability to manage various task categories like 'to go,' 'to buy,' 'to create,' 'to achieve,' and more. Leveraging the power of React and CSS, \"To ... List\" provides a seamless user experience with smooth task updates and deletions. By utilizing the 'useReducer' hook, the app efficiently manages state changes and ensures optimal performance. Additionally, all user data is stored securely within the browser's local storage, allowing users to seamlessly access and organize their tasks while managing their time effectively. Experience hassle-free task management with \"To ... List\"!",
    technologies: ["React"],
    link: "https://donotes-sooty.vercel.app/",
    smallImage: smallToDO,
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
    category: "Front End",
    projectName: "Comfy Sloth",
    smallDescription: "A React-based E-Commerce App, made for portfolio.",
    longDescription:
      "Introducing Comfy Cloth, an immersive e-commerce application built using React, Context API, React Router, and useReducer. This dynamic web application specializes in selling furniture, offering a wide range of products to customers. Comfy Cloth can  integrate with Stripe, allowing secure and convenient payment processing. The application leverages local storage to store cart items, ensuring a seamless shopping experience across sessions. With its own filtering system powered by useReducer and Context API, users can easily explore and discover the furniture they desire. Experience the comfort and convenience of Comfy Cloth as you shop for high-quality furniture from the comfort of your home.",
    technologies: ["React", "Context API", "React Router", "Auth0"],
    link: "https://comfy-store-three.vercel.app/",
    smallImage: smallComfy,
  },
  {
    id: 9,
    category: "Front End",
    projectName: "Bacola",
    smallDescription:
      "A responsive grocery selling app created for my portfolio.",
    longDescription:
      "Introducing Bacola, an innovative grocery selling app crafted specifically for my portfolio during a course. With its responsive design, Bacola aims to provide users with a seamless and user-friendly shopping experience. While currently focusing on the front-end development, the app showcases my ability to create visually appealing and intuitive interfaces for e-commerce platforms. Bacola enables users to browse through a variety of grocery products, add them to their cart, and proceed with a hassle-free checkout process. Although the app is currently limited to the front-end functionality, its purpose is to demonstrate my skills in crafting compelling user experiences for online grocery shopping. Step into the world of Bacola and explore a glimpse of my capabilities in web development and design.",
    technologies: ["HTML", "SCSS/CSS", "JavaScript", "Jquery"],
    link: "https://bacola-app.vercel.app/",
    smallImage: smallBacola,
  },
  {
    id: 10,
    category: "Front End",
    projectName: "Cocktails",
    smallDescription: "Explore cocktails and recipe features with Cocktails.",
    longDescription:
      "Discover a world of delightful cocktails with our interactive Cocktails website. Whether you're looking for a classic favorite or seeking new concoctions, our platform allows you to explore and select cocktails based on your preferences. Experience personalized search capabilities and uncover the perfect recipe to satisfy your taste buds. Cheers to a delightful journey of mixology!",
    technologies: ["React", "Context API", "React Router"],
    link: "https://cocktails-practice.vercel.app/",
    smallImage: smallCocktails,
  },
  {
    id: 11,
    category: "Front End",
    projectName: "Unsplash Images",
    smallDescription:
      "Search different images related to your desired content.",
    longDescription:
      "Embark on a visual journey with Unsplash Images project. Simply type in a word or phrase, and instantly find a vast collection of stunning images relevant to your provided content. Whether you're seeking inspiration, looking for the perfect visual for your project, or simply enjoying the beauty of photography, Unsplash Images has you covered. Additionally, enhance your viewing experience by switching to the dark mode theme for a sleek and immersive interface. Start exploring and let your imagination roam through captivating visuals!",
    technologies: ["React", "Context API", "React Router"],
    link: "https://unsplash-project-indol.vercel.app/",
    smallImage: smallUnsplash,
  },
  {
    id: 11,
    category: "Front End",
    projectName: "Comfy Store",
    smallDescription: "A React-based E-Commerce App, made for portfolio.",
    longDescription:
      "Introducing Comfy Store, an easy-to-use online shop built with React Router, RTK, React Query, Axios, Daisy UI, Tailwind CSS, and Context API. It's a place where you can find and buy all your household essentials. Comfy Store lets you pay securely with Stripe and offers both dark and light modes for a personalized browsing experience. With features like local storage and advanced state management, your shopping cart stays saved even if you leave the site. Explore Comfy Store today and enjoy shopping for your home comforts with ease",
    technologies: [
      "React",
      "Context API",
      "React Router 6.4",
      "React Query",
      "Axios",
      "DaisyUI",
      "Tailwind CSS",
    ],
    link: "https://ecom-react-lyart.vercel.app/",
    smallImage: smallcomfynew,
  },
  {
    id: 12,
    category: "Full Stack",
    projectName: "Vincode.az",
    smallDescription:
      "A business venture selling Carfax, Autocheck, Auction data, and vin decoder to users.",
    longDescription:
      "Introducing Vincode.az, a reliable online platform designed to safeguard users from car-related fraud. Built with React and .NET Web API, Vincode.az offers valuable insights from trusted sources like Carfax, AutoCheck, auction data, and VIN decoder reports. With a SQL database powering its backend, this project not only ensures security but also generates profit. Utilizing React Router, Axios, React Query, and Context API on the frontend, Vincode.az delivers a seamless user experience. On the backend, it employs Entity Framework, the repository pattern, localization, custom exceptions, NLog, AutoMapper, and Fluent Validation to maintain robust functionality and data integrity. Explore Vincode.az today and make informed decisions when buying or dealing with cars, ensuring peace of mind in every transaction.",
    technologies: [
      "React",
      "Tailwind css",
      "CSS/SCSS",
      "Microsoft SQL Server",
      "Asp.Net Web Api",
      "Fluent Validation",
      "AutoMapper",
      "NLog",
      "Localization",
      "Middlewares",
    ],
    link: "https://vincode.az",
    smallImage: smallvincodeaz,
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
    date: "October, 2023",
    description:
      "Through coding challenges and assessments on HackerRank, I have honed my skills in React, mastering the fundamentals and advanced concepts of the library. This certification validates my ability to build interactive user interfaces, utilizing React's component-based architecture and state management. With this, I am equipped to develop scalable web applications, leveraging React's extensive ecosystem ",
    link: "https://www.hackerrank.com/certificates/6c6f6d7a9786",
    image: react,
  },
  {
    id: 3,
    certName: "Problem Solving",
    date: "October, 2023",
    description:
      "Given for dealing with diverse data structures and algorithms. This certification serves as validation for my expertise in effectively addressing complex programming problems and optimizing code for superior performance. Having established a solid groundwork in problem solving, I possess the necessary skills to tackle a wide array of coding challenges spanning various domains.",
    link: "https://www.hackerrank.com/certificates/95fe92762329",
    image: problem,
  },
  {
    id: 4,
    certName: "HTML and CSS",
    date: "October, 2023",
    description:
      "Through focused dedication on HackerRank, I have enhanced my mastery of HTML and CSS. This certification serves as concrete evidence of my aptitude in constructing well-organized web pages using these essential web technologies. This certification serves as a testament to my knowledge in creating responsive layouts, skillfully employing CSS selectors, and implementing contemporary design principles.",
    link: "https://www.hackerrank.com/certificates/5b88d840c277",
    image: css,
  },
  {
    id: 5,
    certName: "Rest API",
    date: "October, 2023",
    description:
      "Through dedicated commitment and rigorous training, I have honed my skills in developing REST APIs. This certification stands as a tangible testament to my proficiency in building robust and efficient web services using RESTful architecture. It showcases my expertise in designing RESTful endpoints, handling HTTP requests and responses, and implementing industry-standard practices for creating high-performance APIs.",
    link: "https://www.hackerrank.com/certificates/bdfb129dc4fb",
    image: restapi,
  },
  {
    id: 6,
    certName: "C#",
    date: "October, 2023",
    description:
      "With dedication and continuous learning, I have  expanded my expertise in C# programming. This certification stands as a solid testament to my proficiency in developing robust and efficient applications using the C# language. It underlines my capabilities in building user-friendly interfaces, working with data, creating efficient, maintainable code, and my commitment to staying at the forefront of C# development. It enables me to deliver high-quality software solutions.",
    link: "https://www.hackerrank.com/certificates/550d47ab63b9",
    image: csharp,
  },
  {
    id: 7,
    certName: "SQL",
    date: "October, 2023",
    description:
      "With relentless commitment and a relentless pursuit of knowledge, I have greatly enriched my skills in SQL database management. This certification serves as a strong affirmation of my proficiency in designing, optimizing, and maintaining efficient databases using SQL. It highlights my abilities in crafting data-driven solutions and working with complex queries. This certificate shows my unwavering dedication to remaining at the cutting edge of SQL development.",
    link: "https://www.hackerrank.com/certificates/7d1e0b2c0058",
    image: sql,
  },
  {
    id: 8,
    certName: "TOEFL IBT",
    date: "April, 2023",
    description:
      "With unwavering dedication and a tireless pursuit of excellence, I have achieved a commendable score of 103 out of 120 on the TOEFL iBT, placing me at a proficient C1 level. This certification stands as a testament to my language proficiency in English. It signifies my competence in engaging in academic discussions and expressing ideas fluently. My TOEFL iBT score reflects my commitment to continuous improvement and my readiness to excel in global professional environments.",
    link: "https://ibb.co/QvQRffz",
    image: toefl,
  },
];
