export default function InputBox(props: {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  return (
    <input
      type={props.type}
      className="form-input
      mx-auto
      rounded-md
      border-4
      border-wonder-purple
      p-2
      shadow-sm
      "
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
