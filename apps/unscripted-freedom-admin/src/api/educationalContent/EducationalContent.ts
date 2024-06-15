import { User } from "../user/User";

export type EducationalContent = {
  content: string | null;
  contentType?: "Option1" | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
