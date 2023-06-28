import { type Relation, RelationType, type Task } from "@prisma/client";

const invert = (relation: RelationType) => {
  switch (relation) {
    case RelationType.RELATED_TO:
      return RelationType.RELATED_TO;
    case RelationType.BLOCKED_BY:
      return RelationType.BLOCKS;
    case RelationType.BLOCKS:
      return RelationType.BLOCKED_BY;
    case RelationType.DEPENDENT_ON:
      return RelationType.DEPENDS_ON;
    case RelationType.DEPENDS_ON:
      return RelationType.DEPENDENT_ON;
  }
};

interface IRelation extends Relation {
  task: Task;
}

export const invertRelationsType = (relations: IRelation[]) => {
  return relations.map((relation) => ({
    ...relation,
    type: invert(relation.type),
    relatedTask: relation.task,
  }));
};
