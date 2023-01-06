import { AggregateRoot } from '../Aggregate/AggregateRoot';
import { Uuid } from '../ValueObject/Uuid';

export interface IFind {
  find(id: Uuid): Promise<AggregateRoot>;
}
