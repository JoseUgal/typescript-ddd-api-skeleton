import { Course } from '../../../../../src/Contexts/Mooc/Courses/Domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/Domain/Courses/CourseId';
import { CourseIdMother } from '../../Shared/Domain/Courses/CourseIdMother';
import { CourseDurationMother } from './CourseDurationMother';
import { CourseNameMother } from './CourseNameMother';
import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/Application/CourseCreatorRequest';

export class CourseMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): Course {
    return new Course(id, name, duration);
  }

  static random(): Course {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }

  static fromRequest(request: CourseCreatorRequest): Course {
    return this.create(
      CourseIdMother.create(request.id),
      CourseNameMother.create(request.name),
      CourseDurationMother.create(request.duration),
    );
  }
}
