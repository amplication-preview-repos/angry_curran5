import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MarketAnalysisList } from "./marketAnalysis/MarketAnalysisList";
import { MarketAnalysisCreate } from "./marketAnalysis/MarketAnalysisCreate";
import { MarketAnalysisEdit } from "./marketAnalysis/MarketAnalysisEdit";
import { MarketAnalysisShow } from "./marketAnalysis/MarketAnalysisShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MarketAnalysis"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MarketAnalysis"
          list={MarketAnalysisList}
          edit={MarketAnalysisEdit}
          create={MarketAnalysisCreate}
          show={MarketAnalysisShow}
        />
      </Admin>
    </div>
  );
};

export default App;
