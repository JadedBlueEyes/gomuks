import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
	base: "./",
	build: {
		target: ["esnext", "firefox128"],
		rollupOptions: {
			output: {
				manualChunks: id => {
					if (id.includes("node_modules") && !id.includes("katex")) {
						return "vendor"
					} else if (id.endsWith("/emoji/data.json")) {
						return "emoji"
					}
				},
			},
		},
	},
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				replaceAttrValues: {
					"#5f6368": "currentColor",
				},
			},
		}),
	],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	server: {
		proxy: {
			"/_gomuks/websocket": {
				target: "http://localhost:29325",
				ws: true,
			},
			"/_gomuks": {
				target: "http://localhost:29325",
			},
		},
	},
})
