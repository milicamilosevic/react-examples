import FormikWrapper from "./UI/FormikWrapper";
import classes from "./Form.module.css";
import { dateTimeFormSchema as validationSchema } from "../helpers/form-validation-helpers";
import DatePicker from "./UI/DatePicker";
import DateTimePicker from "./UI/DateTimePicker";
import MaterialDateTimePicker from "./UI/MaterialDateTimePicker";

const initialValues = {
	date: null,
	dateTime: null,
	birthday: null,
};

const submitHandler = (values, onSubmitProps) => {
	window.alert(JSON.stringify(values, null, 4));
	onSubmitProps.setSubmitting(false);
};

const DateTimeForm = () => {
	return (
		<div className={classes["form-container"]}>
			<h3>Datum i vrijeme</h3>
			<FormikWrapper
				initialValues={initialValues}
				onSubmit={submitHandler}
				validationSchema={validationSchema}
			>
				<DatePicker name="date" label="Datum:" className={classes["pickers"]} />

				<DateTimePicker
					name="dateTime"
					label="Datum i vrijeme:"
					className={classes["pickers"]}
					timeLabel="Vrijeme"
				/>

				<MaterialDateTimePicker
					name="birthday"
					label="Datum rođenja:"
					className={classes["pickers"]}
				/>
			</FormikWrapper>
		</div>
	);
};

export default DateTimeForm;
