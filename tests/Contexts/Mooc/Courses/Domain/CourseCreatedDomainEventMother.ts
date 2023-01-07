import { Course } from '../../../../../src/Contexts/Mooc/Courses/Domain/Course';
import { CourseCreatedDomainEvent } from '../../../../../src/Contexts/Mooc/Courses/Domain/Events/CourseCreatedDomainEvents';

export class CourseCreatedDomainEventMother {
  static create(aggregateId: string, name: string, duration: string, eventId?: string, occurredOn?: Date) {
    return new CourseCreatedDomainEvent(aggregateId, name, duration, eventId, occurredOn);
  }

  static fromCourse(course: Course): CourseCreatedDomainEvent {
    return new CourseCreatedDomainEvent(course.id.value, course.name.value, course.duration.value);
  }
}
