import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
	theme: {
		fontFamily: {
			title: ["'Space Grotesk'", "Inter", "sans-serif"],
			sans: ["Inter", "sans-serif"],
			mono: ["'Space Mono'", "monospace"],
		},
		extend: {
			content: {
				link: "_↗",
			},
		},
	},
};
