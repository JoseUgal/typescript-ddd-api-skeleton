import MongoConfig from '../../../../Shared/Infrastructure/Persistence/Mongo/MongoConfig';
import config from '../Config';

const mongoConfig = {
  url: config.get('mongo.url'),
};

export class MongoConfigFactory {
  static createConfig(): MongoConfig {
    return mongoConfig;
  }
}
