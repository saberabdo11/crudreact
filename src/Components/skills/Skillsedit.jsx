import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Skillsedit = () => {
  const [skillValue, setValue] = useState({
    name: "",
    slug: "",
  });

  const [skill, setSkill] = useState([]);

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...skillValue, [name]: value });
  };

  let { id } = useParams();
  const navigate = useNavigate();

  const getSkill = async (id) => {
    const respons = await axios.get(
      "http://127.0.0.1:8000/api/v1/skills/" + id
    );

    
    const apiSkill = respons.data.data;
    setSkill(apiSkill);

    setValue({
      name: apiSkill.name,
      slug: apiSkill.slug,
    });
  };

  const updateSkill = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://127.0.0.1:8000/api/v1/skills/" + id, skillValue);
      navigate("/skills");
    } catch (e) {
      if (e.respons.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  useEffect(() => {
    getSkill(id);
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-center">
          <form className="w-50 bg-light rounded p-4" onSubmit={updateSkill}>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={skillValue["name"]}
                onChange={onChange}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="slug"> Slug</label>
              <input
                type="text"
                className="form-control"
                name="slug"
                value={skillValue["slug"]}
                onChange={onChange}
              />
              {errors.slug && (
                <span className="text-danger">{errors.slug}</span>
              )}
            </div>
            <button
              className="btn btn-warning w-100 mt-3 text-white"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Skillsedit;
