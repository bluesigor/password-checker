import { useState } from "react";

import "./App.css";

import StrengthBar from "./components/StrengthBar";
import FormPassword from "./components/FormPassword";

export type Level = {
  empty: boolean;
  short: boolean;
  easy: boolean;
  medium: boolean;
  strong: boolean;
};

function App() {
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState<Level>({
    empty: true,
    short: false,
    easy: false,
    medium: false,
    strong: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);

    let length = e.target.value.length;
    let letters = e.target.value.match(/[A-Za-z]/g);
    let digits = e.target.value.match(/[0-9]/g);
    let symbols = e.target.value.match(/[^A-Za-z 0-9]/g);

    if (length === 0) {
      setLevel(() => {
        return {
          empty: true,
          short: false,
          easy: false,
          medium: false,
          strong: false,
        };
      });
    } else {
      if (length < 8) {
        setLevel(() => {
          return {
            empty: false,
            short: true,
            easy: false,
            medium: false,
            strong: false,
          };
        });
      } else {
        if (letters !== null || digits !== null || symbols !== null) {
          setLevel(() => {
            return {
              empty: false,
              short: false,
              easy: true,
              medium: false,
              strong: false,
            };
          });
        }
        if (
          (letters !== null && digits !== null) ||
          (digits !== null && symbols !== null) ||
          (symbols !== null && letters !== null)
        ) {
          setLevel(() => {
            return {
              empty: false,
              short: false,
              easy: false,
              medium: true,
              strong: false,
            };
          });
        }
        if (letters !== null && digits !== null && symbols !== null) {
          setLevel(() => {
            return {
              empty: false,
              short: false,
              easy: false,
              medium: false,
              strong: true,
            };
          });
        }
      }
    }
  };

  return (
    <>
      <div className="App">
        <h3>Password Strength</h3>
        <FormPassword
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          password={password}
        />
      </div>
      <StrengthBar level={level} />
    </>
  );
}

export default App;
