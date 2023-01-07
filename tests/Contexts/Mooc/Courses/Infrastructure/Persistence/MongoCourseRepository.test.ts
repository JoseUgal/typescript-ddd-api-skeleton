import container from '../../../../../../src/apps/Mooc/Backend/config/dependency-injection';
import { CourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/Domain/CourseRepository';
import { CourseMother } from '../../Domain/CourseMother';
import { EnvironmentArranger } from '../../../../Shared/Infrastructure/Arranger/EnvironmentArranger';

const repository: CourseRepository = container.get('Mooc.Courses.Domain.CourseRepository');
const arranger: Promise<EnvironmentArranger> = container.get('Mooc.MongoEnvironmentArranger');

beforeEach(async () => {
  await (await arranger).arrange();
});

afterAll(async () => {
  await (await arranger).arrange();
  await (await arranger).close();
});

describe('CourseRepository', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const course = CourseMother.random();

      await repository.save(course);
    });
  });
});
