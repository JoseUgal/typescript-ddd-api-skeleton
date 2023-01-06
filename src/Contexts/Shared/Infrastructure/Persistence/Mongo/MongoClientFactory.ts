import { MongoClient } from 'mongodb';
import { Nullable } from '../../../Domain/Nullable';
import MongoConfig from './MongoConfig';

export class MongoClientFactory {
  private static clients: { [key: string]: MongoClient } = {};

  public static async createClient(context: string, config: MongoConfig): Promise<MongoClient> {
    let client = MongoClientFactory.getClient(context);

    if (!client) {
      client = await MongoClientFactory.createAndConnectClient(config);

      MongoClientFactory.registerClient(context, client);
    }

    return client;
  }

  private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url, { ignoreUndefined: true });

    await client.connect();

    return client;
  }

  private static getClient(context: string): Nullable<MongoClient> {
    return MongoClientFactory.clients[context];
  }

  private static registerClient(context: string, client: MongoClient) {
    MongoClientFactory.clients[context] = client;
  }
}
