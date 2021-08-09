import { registerFormSchema as validationSchema } from "../helpers/form-validation-helpers";
import PhoneNumbersInputList from "./UI/DynamicFieldsArray";
import FormikWrapper from "./UI/FormikWrapper";
import InputField from "./UI/InputField";
import RadioGroup from "./UI/RadioGroup";
import CheckboxGroup from "./UI/CheckboxGroup";
import SelectField from "./UI/SelectField";
import TextArea from "./UI/TextArea";
import classes from "./Form.module.css";

const initialValues = {
	email: "",
	password: "",
	repeatPassword: "",
	address: "",
	country: "",
	phoneNumbers: [""],
	gender: "",
	options: ["accept-newsletter"],
};

const genderOptions = [
	{ key: "Muški", value: "male" },
	{ key: "Ženski", value: "female" },
];

const registerOptions = [
	{ key: "Prihvatam uslove korištenja", value: "accept-terms" },
	{ key: "Obavještavajte me o novostima", value: "accept-newsletter" },
];

const countries = [
	{ key: "Bosnia i Hercegovina", value: "BA" },
	{ key: "Srbija", value: "SR" },
	{ key: "Crna Gora", value: "MNE" },
	{ key: "Hrvatska", value: "CRO" },
];

const submitHandler = (values, onSubmitProps) => {
	window.alert(JSON.stringify(values, null, 4));
	onSubmitProps.setSubmitting(false);
};

const RegisterForm = () => {
	return (
		<div className={classes["form-container"]}>
			<h3>Registracija</h3>
			<FormikWrapper
				initialValues={initialValues}
				onSubmit={submitHandler}
				validationSchema={validationSchema}
				submitLabel={"Registruj se"}
			>
				<InputField
					className={classes["form-control"]}
					name="email"
					label="Mejl:"
					type="email"
				/>

				<InputField
					className={classes["form-control"]}
					name="password"
					label="Lozinka:"
					type="password"
				/>

				<InputField
					className={classes["form-control"]}
					name="repeatPassword"
					label="Ponovite lozinku:"
					type="password"
				/>

				<RadioGroup
					className={classes["radio-group"]}
					name="gender"
					label="Pol:"
					options={genderOptions}
				/>

				<TextArea
					name="address"
					label="Adresa:"
					rows={3}
					className={classes["form-control"]}
				/>

				<SelectField
					name="country"
					label="Država:"
					options={countries}
					className={classes["form-control"]}
				/>

				<PhoneNumbersInputList
					name="phoneNumbers"
					label="Brojevi telefona:"
					className={classes["form-control"]}
				/>

				<CheckboxGroup
					className={classes["checkbox-group"]}
					name="options"
					options={registerOptions}
				/>
			</FormikWrapper>
		</div>
	);
};

export default RegisterForm;
