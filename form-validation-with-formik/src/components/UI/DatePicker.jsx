import { Field, ErrorMessage } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sr from "date-fns/locale/sr-Latn";

const DatePicker = (props) => {
	const { name, label, className, ...rest } = props;

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{(fieldProps) => {
					const setFieldValue = fieldProps.form.setFieldValue;
					const value = fieldProps.field.value;

					return (
						<ReactDatePicker
							{...fieldProps.field}
							{...rest}
							selected={value}
							onChange={(val) => setFieldValue(name, val)}
							locale={sr}
							showYearDropdown
							dropdownMode="select"
							dateFormat="dd/MM/yyyy"
							autoComplete="off"
						/>
					);
				}}
			</Field>
			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default DatePicker;
