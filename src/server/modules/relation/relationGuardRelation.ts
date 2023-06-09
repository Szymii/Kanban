import { type Relation, RelationType } from "@prisma/client";

interface IReturn {
  isRelationValid: boolean;
  relationMessage: string | undefined;
}

export const relationGuardRelation = (
  relations: Relation[],
  relationType: RelationType,
): IReturn => {
  if (relations.length === 0) {
    return { isRelationValid: true, relationMessage: undefined };
  }

  const isValid = relations.every((relation) => {
    const available: RelationType[] = availableRelations[relation.type];

    return available.includes(relationType);
  });

  return {
    isRelationValid: isValid,
    relationMessage: "Relation unavailable",
  };
};

const availableRelations = {
  [RelationType.RELATED_TO]: [
    RelationType.BLOCKED_BY,
    RelationType.BLOCKS,
    RelationType.DEPENDENT_ON,
    RelationType.DEPENDS_ON,
  ],
  [RelationType.BLOCKED_BY]: [RelationType.RELATED_TO],
  [RelationType.BLOCKS]: [RelationType.RELATED_TO],
  [RelationType.DEPENDENT_ON]: [RelationType.RELATED_TO],
  [RelationType.DEPENDS_ON]: [RelationType.RELATED_TO],
};
