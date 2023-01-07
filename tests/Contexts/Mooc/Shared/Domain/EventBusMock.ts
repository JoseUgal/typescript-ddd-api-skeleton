import { DomainEvent } from '../../../../../src/Contexts/Shared/Domain/DomainEvent';
import { DomainEventSubscriber } from '../../../../../src/Contexts/Shared/Domain/DomainEventSubscriber';
import { EventBus } from '../../../../../src/Contexts/Shared/Domain/EventBus';

export class EventBusMock implements EventBus {
  private publishSpy = jest.fn();

  async publish(events: DomainEvent[]): Promise<void> {
    this.publishSpy(events);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {}

  assertLastPublishedEventIs(expectedEvent: DomainEvent) {
    const publishSpyCalls = this.publishSpy.mock.calls;

    expect(publishSpyCalls.length).toBeGreaterThan(0);

    const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1];
    const lastPublishEvent = lastPublishSpyCall[0][0];

    const expected = this.getDataFromDomainEvent(expectedEvent);
    const published = this.getDataFromDomainEvent(lastPublishEvent);

    expect(expected).toMatchObject(published);
  }

  getDataFromDomainEvent(event: DomainEvent) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eventId, occurredOn, ...attributes } = event;

    return attributes;
  }
}
