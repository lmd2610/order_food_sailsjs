module.exports = {
  serverIP: "127.0.0.1",
  serverID: 2,
  port: process.env.SERVICE_PORT,
  debug: true,
  emulator: true,
  datastores: {
    default: {
      adapter: process.env.DB_ADAPTER||'sails-mysql',
      url: `${process.env.DB_DIALECT||'mysql'}://${process.env.DB_USER||'root'}:${process.env.DB_PASS||'1234'}@${process.env.DB_HOST||'127.0.0.1'}:${process.env.DB_PORT||'3306'}/${process.env.DB_NAME||'orderfood'}`,
    },
  },
  mode: "staging",

  models: {
    migrate: process.env.DB_MIGRATE || "safe",
  },
  blueprints: {
    shortcuts: false,
  },

  security: {
    cors: {
      allRoutes: true,
      allowOrigins: '*',
      allowCredentials: false,
      allowRequestHeaders: 'content-type,Authorization,accept-language,warning',
      allowRequestMethods: 'GET, POST, PUT,PATCH,DELETE'
    },
  },

  session: {
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  },
  sockets: {
  },

  log: {
    level: "debug",
  },

  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  },

  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB,
  },
  custom: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    },
    debug: true,
    baseUrl: "https://example.com",
    internalEmailAddress: "support@example.com",
  },
};
