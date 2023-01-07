import { DomainEvent } from '../../../../Shared/Domain/DomainEvent';

type CreateCourseDomainEventAttributes = {
  readonly duration: string;
  readonly name: string;
};

export class CourseCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'course.created';

  readonly duration: string;
  readonly name: string;

  constructor(aggregateId: string, name: string, duration: string, eventId?: string, occurredOn?: Date) {
    super(CourseCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn);

    this.name = name;
    this.duration = duration;
  }

  toPrimitives(): CreateCourseDomainEventAttributes {
    return {
      name: this.name,
      duration: this.duration,
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: CreateCourseDomainEventAttributes;
  }): DomainEvent {
    return new CourseCreatedDomainEvent(
      params.aggregateId,
      params.attributes.name,
      params.attributes.duration,
      params.eventId,
      params.occurredOn,
    );
  }
}
