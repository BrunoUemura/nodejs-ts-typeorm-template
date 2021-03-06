module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: false,
  entities: ["./src/models/**.ts"],
  migrations: ["./src/database/migrations/**.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
