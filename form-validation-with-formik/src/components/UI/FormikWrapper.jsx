import { Formik, Form } from "formik";

const FormikWrapper = (props) => {
	const { children, validationSchema, onSubmit, initialValues, submitLabel, ...rest } = props;

	const submitButtonText = submitLabel ?? "Submit";

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			{...rest}
		>
			{(formik) => (
				<Form>
					{children}
					<button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
						{submitButtonText}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikWrapper;
