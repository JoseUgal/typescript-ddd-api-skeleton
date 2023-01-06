import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseDuration';
import { WordMother } from '../../../Shared/Domain/WordMother';

export class CourseDurationMother {
  static create(value: string): CourseDuration {
    return new CourseDuration(value);
  }

  static random() {
    return this.create(WordMother.random({ maxLength: 30 }));
  }
}
