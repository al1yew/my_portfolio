import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);
    return <div>ProjectDetails</div>;
};
export default ProjectDetails;
