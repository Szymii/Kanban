import Select, { type ActionMeta } from "react-select";
import { type IUser } from "src/modules/profile";

import { Avatar, EmptyAvatar } from "../Avatar";

export interface UserSelectOption {
  value: string;
  label: string;
  firstName: string;
  lastName: string;
  image?: string | null;
}

interface IProps {
  users: IUser[];
  selectedUserId?: string;
  disabled?: boolean;
  action?: (
    option: UserSelectOption | null,
    actionMeta: ActionMeta<UserSelectOption>,
  ) => void;
}

export const UserSelect = ({
  users,
  selectedUserId,
  action,
  disabled,
}: IProps) => {
  const options = [
    {
      value: "EMPTY",
      label: "Not assigned",
    } as UserSelectOption,
    ...users.map((user) => ({
      value: user.id,
      label: `${user.firstName} ${user.lastName}`,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user?.image,
    })),
  ];

  const defaultOption = options.findIndex(
    (option) => option.value === selectedUserId,
  );

  return (
    <Select
      options={options}
      defaultValue={selectedUserId ? options[defaultOption] : options[0]}
      formatOptionLabel={CustomOptionLabel}
      onChange={action}
      isDisabled={disabled}
    />
  );
};

interface ICustomOptionLabel {
  label: string;
  firstName?: string;
  lastName?: string;
  image?: string | null;
}

const CustomOptionLabel = ({
  label,
  firstName,
  lastName,
  image,
}: ICustomOptionLabel) => {
  if (!firstName || !lastName) {
    return (
      <div className="flex items-center gap-4">
        <EmptyAvatar size="xs" />
        <div className="text-lg font-semibold">{label}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar name={firstName} surname={lastName} avatarUrl={image} size="xs" />
      <div className="text-lg font-semibold">{label}</div>
    </div>
  );
};
