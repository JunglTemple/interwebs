import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
	theme: {
		fontFamily: {
			title: ["SpaceGrotesk", "Inter", "sans-serif"],
			sans: ["Inter", "sans-serif"],
			mono: ["SpaceMono", "monospace"],
		},
	},
};
