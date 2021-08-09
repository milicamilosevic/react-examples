import { Field, ErrorMessage } from "formik";

const RadioGroup = (props) => {
	const { name, label, options, className, ...rest } = props;

	return (
		<div className={className}>
			{label && <label htmlFor={name}>{label}</label>}
			<div>
				<Field name={name} {...rest}>
					{({ field }) =>
						options.map((option) => (
							<div key={option.value}>
								<input
									type="radio"
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value}>{option.key}</label>
							</div>
						))
					}
				</Field>
			</div>
			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default RadioGroup;
