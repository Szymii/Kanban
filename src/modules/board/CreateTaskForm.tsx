import { TextField } from "src/components/FormFields";

export const CreateTaskForm = () => {
  return (
    <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
      <TextField
        type="email"
        label="E-mail address of the user you want to invite"
        name="userEmail"
        required
      />
    </form>
  );
};
