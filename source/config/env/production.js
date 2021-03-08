module.exports = {
  serverIP: '127.0.0.1',
  serverID: 2,
  port: process.env.SERVICE_PORT,
  debug: true,
  emulator: true,
  datastores: {
    default: {
      adapter: process.env.DB_ADAPTER,
      url: `${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    }
  },

  models: {
    migrate: 'safe'
  },
  blueprints: {
    shortcuts: false
  },

  security: {
    cors: { 
      
        allRoutes: true,
        allowOrigins: '*',
        allowCredentials: false,
        allowRequestHeaders: 'content-type,Authorization,accept-language,warning',
        allowRequestMethods: 'GET, POST, PUT,PATCH,DELETE'
    
    }
  },

  session: {
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  },
  sockets: {
    onlyAllowOrigins: ['http://localhost']
  },

  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000 // One year
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB
  },
  custom: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
    debug: true,
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com'
  }
};
