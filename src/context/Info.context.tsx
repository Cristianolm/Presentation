import { createContext } from "react";

interface InfoContextData {
  info: {
    firstName: string;
    lastName: string;
    age: number;
  };
}

const calculate_age = (dob: string): number => {
  try {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  } catch (error) {
    console.error(error);
    return 0;
  }
};

const initialInfo = {
  firstName: "",
  lastName: "",
  age: 0,
};

export const InfoContext = createContext<InfoContextData>({
  info: initialInfo,
});

interface InfoProviderProps {
  children: React.ReactNode;
}

const InfoProvider: React.FC<InfoProviderProps> = ({ children }) => {
  const info = {
    firstName: "Cristiano",
    lastName: "Martins",
    age: calculate_age("1996-01-21"),
  };

  return (
    <InfoContext.Provider value={{ info }}>{children}</InfoContext.Provider>
  );
};

export default InfoProvider;
