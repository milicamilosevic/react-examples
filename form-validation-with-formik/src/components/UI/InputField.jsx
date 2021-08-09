import { Field, ErrorMessage } from "formik";

const InputField = (props) => {
	const { name, label, type, className, ...rest } = props;

	const inputType = type ?? "text";

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			<Field as="input" type={inputType} name={name} {...rest} />
			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default InputField;
