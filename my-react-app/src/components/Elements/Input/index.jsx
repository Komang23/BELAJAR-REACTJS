import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const {title} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{title}</Label>
            <Input name={name} type={type} placeholder={placeholder}></Input>
           
          </div>
    )
}

export default InputForm;