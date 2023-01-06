import { AggregateRoot } from '../Aggregate/AggregateRoot';

export interface IDelete {
  delete(aggregate: AggregateRoot): Promise<void>;
}
