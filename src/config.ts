export default function () {
    if (process.env.NEXT_PUBLIC_ENV === "development") {
        return {
            // backendHost: "http://localhost:5000"
        };
    }
    if (process.env.NEXT_PUBLIC_ENV === "staging") {
        return {
            // backendHost: typeof window === "undefined" ? "http://backend" : "http://localhost:5000"
        };
    }
    if (process.env.NEXT_PUBLIC_ENV === "production") {
        return {
            // backendHost: "https://api.ftw.tf"
        };
    }

    throw new Error("NEXT_PUBLIC_ENV is not valid: " + process.env.NEXT_PUBLIC_ENV);
}
