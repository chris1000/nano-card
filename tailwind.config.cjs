/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,astro}", // Specify only the file types you use
    "./src/**/*.css", // Include if you have CSS files with Tailwind classes
    // "./public/**/*.html", // Include if you have HTML files in your public directory
    "./components/**/*.{js,ts,jsx,tsx,astro}", // Include if you have a separate component directory
    // Add any other paths that may contain Tailwind classes
  ],
  theme: {
  },
};
