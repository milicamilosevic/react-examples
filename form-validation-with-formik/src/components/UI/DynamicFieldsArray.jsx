import { Field, FieldArray, ErrorMessage } from "formik";
import classes from "./DynamicFieldsArray.module.css";

const DynamicField = ({ name, index, removeCallback }) => {
	return (
		<>
			<div className={classes["input-with-control"]}>
				<Field type="text" name={`${name}[${index}]`} />
				{index > 0 && (
					<button
						type="button"
						onClick={removeCallback}
						className={classes["minus-button"]}
					>
						-
					</button>
				)}
			</div>
			<small className={classes["error"]}>
				<ErrorMessage name={`${name}[${index}]`} />
			</small>
		</>
	);
};

const DynamicFieldsArray = (props) => {
	const { name, label, className, ...rest } = props;

	return (
		<div className={className} style={{ position: "relative" }}>
			<label htmlFor={name}>{label}</label>
			<FieldArray name={name} {...rest}>
				{(fieldArrayProps) => {
					const { push, remove, form } = fieldArrayProps;
					const valuesArray = form.values[name];

					return (
						<>
							{valuesArray.map((_, index) => (
								<DynamicField
									key={`field-${index}`}
									index={index}
									removeCallback={remove.bind(null, index)}
									name={name}
								/>
							))}
							<button
								type="button"
								onClick={push.bind(null, "")}
								disabled={valuesArray[valuesArray.length - 1].trim() === ""}
								className={classes["plus-button"]}
							>
								+
							</button>
						</>
					);
				}}
			</FieldArray>
		</div>
	);
};

export default DynamicFieldsArray;
