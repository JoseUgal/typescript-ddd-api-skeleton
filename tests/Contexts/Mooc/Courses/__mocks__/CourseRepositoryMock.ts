import { Course } from '../../../../../src/Contexts/Mooc/Courses/Domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/Domain/CourseRepository';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/Domain/Courses/CourseId';
import { Nullable } from '../../../../../src/Contexts/Shared/Domain/Nullable';

export class CourseRepositoryMock extends CourseRepository {
  private readonly saveMock: jest.Mock;

  constructor() {
    super();
    this.saveMock = jest.fn();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async search(courseId: CourseId): Promise<Nullable<Course>> {
    return null;
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalledWith(expectedCourse: Course): void {
    expect(this.saveMock).toHaveBeenCalledWith(expectedCourse);
  }
}
