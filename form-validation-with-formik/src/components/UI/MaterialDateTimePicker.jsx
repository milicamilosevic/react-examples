import { Field, ErrorMessage } from "formik";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import sr from "date-fns/locale/sr-Latn";

const MaterialDateTimePicker = (props) => {
	const { name, label, className, ...rest } = props;

	return (
		<div className={className}>
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{(fieldProps) => {
					const { form } = fieldProps;
					return (
						<MuiPickersUtilsProvider locale={sr} utils={DateFnsUtils}>
							<DateTimePicker
								clearable
								ampm={false}
								size="small"
								label="Od"
								inputVariant="outlined"
								value={form.values[name]}
								cancelLabel="Odustani"
								clearLabel="Obriši"
								okLabel="Potvrdi"
								onChange={(value) => form.setFieldValue(name, value)}
								TextFieldComponent={(inputProps) => (
									<input
										type="text"
										readOnly
										value={inputProps.value}
										onClick={inputProps.onClick}
									/>
								)}
							/>
						</MuiPickersUtilsProvider>
					);
				}}
			</Field>
			<small>
				<ErrorMessage name={name} />
			</small>
		</div>
	);
};

export default MaterialDateTimePicker;
