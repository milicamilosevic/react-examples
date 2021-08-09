import { Field, ErrorMessage } from "formik";

const SelectField = (props) => {
	const { name, label, options, className, ...rest } = props;

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			<Field as="select" name={name} {...rest}>
				<option key="default-option" value="" disabled style={{ display: "none" }}></option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.key}
					</option>
				))}
			</Field>

			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default SelectField;
