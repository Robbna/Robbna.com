import React, { ReactElement, createContext, useContext, useState, useEffect } from "react";
import { IData } from "@/app/common/types/Data";
import { getData } from "@/app/api/services/dataService";

interface IDataContext {
  data: IData | null;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a ThemeContextProvider");
  }
  return context;
};

export const DataContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [data, setData] = useState<IDataContext>({ data: null });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData({ data });
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
