import { AggregateRoot } from '../Aggregate/AggregateRoot';
import { Nullable } from '../Nullable';
import { Uuid } from '../ValueObject/Uuid';

export interface ISearch {
  search(id: Uuid): Promise<Nullable<AggregateRoot>>;
}
