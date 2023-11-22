module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: true,
    acquireConnectionTimeout: 1000000,
    options: {
      pool: {
          min: 1,
          max: 5,
          acquireTimeoutMillis: 900000,
          createTimeoutMillis: 900000,
          destroyTimeoutMillis: 900000,
      }
    },

  },
});
