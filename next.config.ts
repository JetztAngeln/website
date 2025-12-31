import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "gravatar.com",
			},
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
			},
			{
				protocol: "https",
				hostname: "carto.com",
			},
			{
				protocol: "https",
				hostname: "www.gravatar.com",
			},
			{
				protocol: "https",
				hostname: "10-0-2-2.storage.local.nhost.run",
			},
			{
				protocol: "https",
				hostname: "local.storage.local.nhost.run",
			},
			{
				protocol: "https",
				hostname: "storage-test-nhost.jetztangeln.de",
			},
			{
				protocol: "https",
				hostname: "storage-staging-nhost.jetztangeln.de",
			},
			{
				protocol: "https",
				hostname: "storage-prod-nhost.jetztangeln.de",
			},
		],
		dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
	},
	reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
