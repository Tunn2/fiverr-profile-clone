interface ButtonProp {
  content: string;
  icon?: React.ReactNode | null;
}
const ButtonComponent: React.FC<ButtonProp> = (props) => {
  return (
    <div className="inline-flex items-center px-8 py-2 border-2 gap-1 border-gray-500 rounded-xl hover:bg-gray-100">
      <p>{props.icon && props.icon}</p>
      <p className="font-semibold">{props.content}</p>
    </div>
  );
};

export default ButtonComponent;
