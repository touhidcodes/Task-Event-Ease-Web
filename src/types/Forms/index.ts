import { FieldValues, Resolver, SubmitHandler } from "react-hook-form";

export type TFormConfig = {
  resolver?: Resolver<FieldValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
};

export type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;
