import axios from "axios";
import * as Yup from "yup";

export const checkEmailAvailable = (value, resolve) => {
	return axios
		.post("https://localhost:44344/api/mobile/emailavailable", { email: value })
		.then((response) => {
			// Očekuje se da API vrati true ili false
			resolve(response.data);
		})
		.catch(() => {
			// Ne prijavljuj grešku ukoliko zahtjev nije uspješan
			resolve(true);
		});
};

export const registerFormSchema = Yup.object({
	email: Yup.string().email("E-mail adresa nije validna").required("Obavezno polje"),
	password: Yup.string()
		.min(8, "Lozinka mora sadržati najmanje 8 karaktera")
		.required("Obavezno polje"),
	repeatPassword: Yup.string()
		.required("Obavezno polje")
		.oneOf([Yup.ref("password"), null], "Lozinke se ne podudaraju"),
	country: Yup.string().required("Izaberite državu"),
	address: Yup.string().max(100, "Maksimalna dužina je 100 karaktera"),
	phoneNumbers: Yup.array().of(
		Yup.string()
			.test("starts-with-plus", 'Broj telefona mora početi sa "+"', (value) => {
				if (value && value.trim() === "") {
					return true;
				} else if (value && !value.trim().startsWith("+")) {
					return false;
				}
				return true;
			})
			.test("valid-phone", "Minimalna dužina je 8 karaktera", (value) => {
				if (value && value.trim() === "") {
					return true;
				} else if (value && value.length <= 8) {
					return false;
				}
				return true;
			})
			.test("phone-required", "Obavezno polje", (...args) => {
				const value = args[0];
				const name = args[1].path;
				if (name === "phoneNumbers[0]") {
					if (value && value.length > 1) {
						return true;
					}
					return false;
				}
				return true;
			})
	),
	gender: Yup.string().required("Potrebno je da izaberete pol"),
	options: Yup.array().test(
		"accepted-terms",
		"Potrebno je da prihvatite uslove korištenja",
		(value) => {
			if (value.includes("accept-terms")) {
				return true;
			}
			return false;
		}
	),
});

export const dateTimeFormSchema = Yup.object({
	date: Yup.date()
		.required("Obavezno polje")
		.nullable()
		.min(new Date(1900, 0, 1), "Unesite noviji datum")
		.max(new Date(), "Ne možete unijeti taj datum"),

	dateTime: Yup.date().required("Obavezno polje").nullable(),

	birthday: Yup.date().required("Obavezno polje").nullable(),
});
