import { Field, ErrorMessage } from "formik";

const TextArea = (props) => {
	const { label, name, className, ...rest } = props;

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			<Field as="textarea" name={name} {...rest} />
			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default TextArea;
