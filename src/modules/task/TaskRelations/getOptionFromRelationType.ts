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
      value: RelationType.BLOCKS,
      label: "Blocks",
    },
    {
      value: RelationType.DEPENDS_ON,
      label: "Depends on",
    },
    {
      value: RelationType.DEPENDENT_ON,
      label: "Dependent to",
    },
  ] as const;
};
