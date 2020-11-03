require('dotenv').config()

const {
  MONGO_HOST,
  MONGO_USER,
  MONGO_PASSWORD,
} = process.env

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', MONGO_HOST),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'cms'),
        username: env('DATABASE_USERNAME', MONGO_USER),
        password: env('DATABASE_PASSWORD', MONGO_PASSWORD),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
