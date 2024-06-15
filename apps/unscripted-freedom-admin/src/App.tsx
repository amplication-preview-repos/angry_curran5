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
import { TradeList } from "./trade/TradeList";
import { TradeCreate } from "./trade/TradeCreate";
import { TradeEdit } from "./trade/TradeEdit";
import { TradeShow } from "./trade/TradeShow";
import { EducationalContentList } from "./educationalContent/EducationalContentList";
import { EducationalContentCreate } from "./educationalContent/EducationalContentCreate";
import { EducationalContentEdit } from "./educationalContent/EducationalContentEdit";
import { EducationalContentShow } from "./educationalContent/EducationalContentShow";
import { StrategyList } from "./strategy/StrategyList";
import { StrategyCreate } from "./strategy/StrategyCreate";
import { StrategyEdit } from "./strategy/StrategyEdit";
import { StrategyShow } from "./strategy/StrategyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"Unscripted Freedom"}
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
        <Resource
          name="Trade"
          list={TradeList}
          edit={TradeEdit}
          create={TradeCreate}
          show={TradeShow}
        />
        <Resource
          name="EducationalContent"
          list={EducationalContentList}
          edit={EducationalContentEdit}
          create={EducationalContentCreate}
          show={EducationalContentShow}
        />
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
