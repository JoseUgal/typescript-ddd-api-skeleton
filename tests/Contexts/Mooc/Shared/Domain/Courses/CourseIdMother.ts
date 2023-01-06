import { CourseId } from '../../../../../../src/Contexts/Mooc/Shared/Domain/Courses/CourseId';
import { UuidMother } from '../../../../Shared/Domain/UuidMother';

export class CourseIdMother {
  static create(value: string): CourseId {
    return new CourseId(value);
  }

  static random() {
    return this.create(UuidMother.random());
  }
}
