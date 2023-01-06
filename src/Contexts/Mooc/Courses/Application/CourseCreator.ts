import { CourseId } from '../../Shared/Domain/Courses/CourseId';
import { Course } from '../Domain/Course';
import { CourseDuration } from '../Domain/CourseDuration';
import { CourseName } from '../Domain/CourseName';
import { CourseRepository } from '../Domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {
  constructor(private readonly repository: CourseRepository) {}

  async run(request: CourseCreatorRequest): Promise<void> {
    const id = new CourseId(request.id);
    const name = new CourseName(request.name);
    const duration = new CourseDuration(request.duration);

    const course = new Course(id, name, duration);

    return this.repository.save(course);
  }
}
