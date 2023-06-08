import { useState } from "react";
import { skills } from "../constants";

const SkillsSection = () => {
    const [category, setCategory] = useState("all");
    const categories = ["All", ...new Set(skills.map((x) => x.category))];

    const filteredSkills =
        category.toLowerCase() === "all"
            ? skills
            : skills.filter((skill) => skill.category === category);

    return (
        <section className="skills">
            <div className="container">
                <div className="row all">
                    <h1>Skills</h1>
                    <ul>
                        {categories.map((c, i) => {
                            return (
                                <li
                                    key={i}
                                    className={
                                        c.toLowerCase() ===
                                        category.toLowerCase()
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="iteratedskills">
                        {filteredSkills.map((skill) => (
                            <div className="skill" key={skill.id}>
                                <span className="icon">{skill.icon}</span>
                                <p>{skill.skillName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SkillsSection;
