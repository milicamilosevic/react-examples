import { Field, ErrorMessage } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sr from "date-fns/locale/sr-Latn";

const DateTimePicker = (props) => {
	const { name, label, timeLabel, className, ...rest } = props;

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
							autoComplete="off"
							onChange={(val) => setFieldValue(name, val)}
							locale={sr}
							showYearDropdown
							dropdownMode="select"
							dateFormat="dd/MM/yyyy HH:mm"
							showTimeSelect
							timeIntervals={15}
							timeFormat="HH:mm"
							timeInputFormat="HH:mm"
							timeCaption={timeLabel}
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

export default DateTimePicker;
