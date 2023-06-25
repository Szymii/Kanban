import { RelationType } from "@prisma/client";

export const getOptionFromRelationType = () => {
  return [
    {
      value: RelationType.RELATED_TO,
      label: "Related to",
    },
    {
      value: RelationType.BLOCKED_BY,
      label: "Blocked by",
    },
    {
      value: RelationType.BLOCKING,
      label: "Blocking",
    },
    {
      value: RelationType.DEPENDS_ON,
      label: "Depends on",
    },
    {
      value: RelationType.DEPENDING,
      label: "Depending",
    },
  ] as const;
};
