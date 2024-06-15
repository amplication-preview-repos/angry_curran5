import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EducationalContentUpdateInput = {
  content?: string | null;
  contentType?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
