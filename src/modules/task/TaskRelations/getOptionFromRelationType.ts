import { RelationType } from "@prisma/client";

export const getOptionFromRelationType = (final?: boolean) => {
  if (final) {
    return [
      {
        value: RelationType.RELATED_TO,
        label: "Related to",
      },
    ] as const;
  }

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
