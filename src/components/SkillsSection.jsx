import { useState } from "react";
import { skills } from "../constants";

const SkillsSection = () => {
    const [category, setCategory] = useState("all");
    const categories = ["All", ...new Set(skills.map((x) => x.category))];

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
                </div>
            </div>
        </section>
    );
};
export default SkillsSection;
