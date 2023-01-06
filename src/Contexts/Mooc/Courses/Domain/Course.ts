import { AggregateRoot } from '../../../Shared/Domain/Aggregate/AggregateRoot';
import { CourseId } from '../../Shared/Domain/Courses/CourseId';
import { CourseDuration } from './CourseDuration';
import { CourseName } from './CourseName';

export class Course extends AggregateRoot {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: CourseDuration;

  constructor(id: CourseId, name: CourseName, duration: CourseDuration) {
    super();
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives(plainData: { id: string; name: string; duration: string }): Course {
    const id = new CourseId(plainData.id);
    const name = new CourseName(plainData.name);
    const duration = new CourseDuration(plainData.duration);

    return new Course(id, name, duration);
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value,
    };
  }
}
