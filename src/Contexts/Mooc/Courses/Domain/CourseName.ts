import { StringValueObject } from '../../../Shared/Domain/ValueObject/StringValueObject';
import { CourseNameLengthExceeded } from './Errors/CourseNameLengthExceeded';

export class CourseName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new CourseNameLengthExceeded(`The CourseName has more than 30 characters`);
    }
  }
}
