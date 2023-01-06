import { AggregateRoot } from './Aggregate/AggregateRoot';

export interface ISave {
  save(aggregate: AggregateRoot): Promise<void>;
}
