/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./src/app/styles/variables.scss";`,
  },
};

export default nextConfig;
