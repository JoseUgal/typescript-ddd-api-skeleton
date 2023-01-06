import { CourseRepository } from '../../../../../../../src/Contexts/Mooc/Courses/Domain/CourseRepository';
import container from '../../../../../../../src/apps/Mooc/Backend/config/dependency-injection/index';
import { CourseMother } from '../../../Domain/CourseMother';

const repository: CourseRepository = container.get('Mooc.Courses.Domain.CourseRepository');

describe('FileCourseRepositoy', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const course = CourseMother.random();

      await repository.save(course);

      const savedCourse = await repository.search(course.id);

      expect(savedCourse?.id.value).toEqual(course.id.value);
    });
  });
});
