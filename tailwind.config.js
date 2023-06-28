import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
	darkMode: "class",
	content: [
		"./node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs",
	],
	theme: {
		extend: {
			zIndex: {
				1: "1",
				2: "2",
			},
			spacing: {
				4.5: "1.125rem",
				7.5: "1.875rem",
				15: "3.75rem",
				25: "6.25rem",
				30: "7.5rem",
			},
		},
	},
	plugins: [FormKitVariants],
};
