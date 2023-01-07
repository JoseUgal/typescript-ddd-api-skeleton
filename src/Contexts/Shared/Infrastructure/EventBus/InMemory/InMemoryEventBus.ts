import { EventEmitter } from 'stream';
import { DomainEvent } from '../../../Domain/DomainEvent';
import { DomainEventSubscriber } from '../../../Domain/DomainEventSubscriber';
import { EventBus } from '../../../Domain/EventBus';

export class InMemoryEventBus extends EventEmitter implements EventBus {
  public async publish(events: DomainEvent[]): Promise<void> {
    events.map(event => this.emit(event.eventName, event));
  }

  public addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]) {
    subscribers.forEach(subscriber => {
      subscriber.subscribedTo().forEach(event => {
        this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
      });
    });
  }
}
