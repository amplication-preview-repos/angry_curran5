import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EducationalContentList } from "./educationalContent/EducationalContentList";
import { EducationalContentCreate } from "./educationalContent/EducationalContentCreate";
import { EducationalContentEdit } from "./educationalContent/EducationalContentEdit";
import { EducationalContentShow } from "./educationalContent/EducationalContentShow";
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
        title={"EducationalContent"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EducationalContent"
          list={EducationalContentList}
          edit={EducationalContentEdit}
          create={EducationalContentCreate}
          show={EducationalContentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
