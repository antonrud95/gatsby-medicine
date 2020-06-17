const url = require('url');

module.exports = ({ env }) => {
  let settings = {};

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    const parsed = url.parse(env('DATABASE_URL', ''));
    const [username, password] = parsed.auth.split(':');
    const database = parsed.pathname.substr(1);

    console.log(process.env.DATABASE_URL)

    settings = {
      host: parsed.hostname,
      port: Number(parsed.port),
      database,
      username,
      password,
      ssl: (parsed.query.ssl === 'true'),
    }
  } else {
    settings = {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      username: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: env.bool('DATABASE_SSL', false),
    }
  }

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          ...settings
        },
        options: {}
      },
    },
  };
};
