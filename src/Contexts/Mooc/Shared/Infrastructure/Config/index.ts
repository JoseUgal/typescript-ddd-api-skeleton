import convict from 'convict';
import path from 'path';

const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV',
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/mooc-backend-dev',
    },
  },
});

moocConfig.loadFile([path.join(__dirname, 'default.json'), path.join(__dirname, `${moocConfig.get('env')}.json`)]);

export default moocConfig;
