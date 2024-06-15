import { EducationalContentWhereInput } from "./EducationalContentWhereInput";
import { EducationalContentOrderByInput } from "./EducationalContentOrderByInput";

export type EducationalContentFindManyArgs = {
  where?: EducationalContentWhereInput;
  orderBy?: Array<EducationalContentOrderByInput>;
  skip?: number;
  take?: number;
};
