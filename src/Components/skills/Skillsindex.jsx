import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Skillsindex = () => {
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    const apiSkills = await axios.get("http://127.0.0.1:8000/api/v1/skills");

    setSkills(apiSkills.data.data);
  };

  const deleteSkill = async (id) => {
    await axios.delete("http://127.0.0.1:8000/api/v1/skills/" + id);
    getSkills();
  };

  useEffect(() => {
    // axios.get("http://127.0.0.1:8000/api/v1/skills").then((res) => {
    //   setSkills(res.data);
    // });

    getSkills();
  }, []);

  return (
    <div className="container py-5">
      <Link className="btn btn-primary px-5 my-4" to="/skills/create">
        Create Skills
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Slug</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => {
            return (
              <tr key={skill.id}>
                <th scope="row"> {skill.id}</th>
                <td>{skill.name}</td>
                <td>{skill.slug}</td>
                <td>
                  <button className="btn btn-success">
                    <Link
                      to={`/skills/${skill.id}/edit`}
                      className="text-decoration-none text-white"
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSkill(skill.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Skillsindex;
