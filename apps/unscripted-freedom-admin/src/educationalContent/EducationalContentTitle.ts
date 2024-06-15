import { EducationalContent as TEducationalContent } from "../api/educationalContent/EducationalContent";

export const EDUCATIONALCONTENT_TITLE_FIELD = "title";

export const EducationalContentTitle = (
  record: TEducationalContent
): string => {
  return record.title?.toString() || String(record.id);
};
