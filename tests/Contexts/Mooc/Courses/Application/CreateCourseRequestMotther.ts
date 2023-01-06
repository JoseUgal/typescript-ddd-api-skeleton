import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/Application/CourseCreatorRequest';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/Domain/Courses/CourseId';
import { CourseIdMother } from '../../Shared/Domain/Courses/CourseIdMother';
import { CourseDurationMother } from '../Domain/CourseDurationMother';
import { CourseNameMother } from '../Domain/CourseNameMother';

export class CreateCourseRequestMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): CourseCreatorRequest {
    return { id: id.value, name: name.value, duration: duration.value };
  }

  static random(): CourseCreatorRequest {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static invalidRequestByNameLengthExceed(): CourseCreatorRequest {
    return {
      id: CourseIdMother.random().value,
      name: CourseNameMother.invalidLengthExceeded(),
      duration: CourseDurationMother.random().value,
    };
  }

  static invalidRequestByUuidInvalid(): CourseCreatorRequest {
    return {
      id: 'some-id',
      name: CourseNameMother.random().value,
      duration: CourseDurationMother.random().value,
    };
  }
}
