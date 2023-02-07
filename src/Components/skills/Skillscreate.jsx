import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Skillscreate = () => {
  const [skillValue, setValue] = useState({
    name: "",
    slug: "",
  });

  const [errors, setErrors] = useState({});

  // return the compenent /skillsindex
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...skillValue, [name]: value });
  };

  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/skills", skillValue);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <div className="container py-5" onSubmit={storeSkill}>
      <div className="d-flex align-items-center justify-content-center">
        <form className="w-50 bg-light rounded p-4">
          <div className="form-group">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={skillValue["name"]}
              onChange={onChange}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
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
            {errors.slug && <span className="text-danger">{errors.slug}</span>}
          </div>
          <button
            className="btn btn-warning w-100 mt-3 text-white"
            type="submit"
          >
            Creeate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Skillscreate;
