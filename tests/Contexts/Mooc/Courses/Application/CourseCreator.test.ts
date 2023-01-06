import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/Application/CourseCreator';
import { CourseMother } from '../Domain/CourseMother';
import { CreateCourseRequestMother } from './CreateCourseRequestMotther';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/Domain/Errors/CourseNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { InvalidArgumentError } from '../../../../../src/Contexts/Shared/Domain/Errors/InvalidArgumentError';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const repository = new CourseRepositoryMock();
    const creator = new CourseCreator(repository);

    const request = CreateCourseRequestMother.random();

    const course = CourseMother.fromRequest(request);

    await creator.run(request);

    repository.assertSaveHaveBeenCalledWith(course);
  });

  it('should throw error if course name is exceed ', () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequestByNameLengthExceed();

      CourseMother.fromRequest(request);
    }).toThrow(CourseNameLengthExceeded);
  });

  it('should throw error if course id is not valid uuid', () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequestByUuidInvalid();

      CourseMother.fromRequest(request);
    }).toThrow(InvalidArgumentError);
  });
});
