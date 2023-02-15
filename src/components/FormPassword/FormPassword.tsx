import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import "./FormPassword.css";

type FormPasswordProps = {
  handleSubmit: (e: React.FormEvent) => void;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormPassword = ({
  handleSubmit,
  password,
  handleChange,
}: FormPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form className="form-pass" onSubmit={handleSubmit}>
          <label className="pass-label">Please type password</label>
          <input
            value={password}
            type={isVisible ? "text" : "password"}
            className="pass-input"
            onChange={handleChange}
          />
          <AiOutlineEyeInvisible
            onClick={toggleVisibility}
            className="pass-visibilty"
          />
        </form>
      </div>
    </div>
  );
};

export default FormPassword;
