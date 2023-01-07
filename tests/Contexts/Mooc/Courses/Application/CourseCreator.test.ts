import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/Application/CourseCreator';
import { CourseMother } from '../Domain/CourseMother';
import { CreateCourseRequestMother } from './CreateCourseRequestMotther';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/Domain/Errors/CourseNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { InvalidArgumentError } from '../../../../../src/Contexts/Shared/Domain/Errors/InvalidArgumentError';
import { EventBusMock } from '../../Shared/Domain/EventBusMock';
import { CourseCreatedDomainEventMother } from '../Domain/CourseCreatedDomainEventMother';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const repository = new CourseRepositoryMock();
    const eventBus = new EventBusMock();
    const creator = new CourseCreator(repository, eventBus);

    const request = CreateCourseRequestMother.random();
    const course = CourseMother.fromRequest(request);
    const domainEvent = CourseCreatedDomainEventMother.fromCourse(course);

    await creator.run(request);

    repository.assertSaveHaveBeenCalledWith(course);
    eventBus.assertLastPublishedEventIs(domainEvent);
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
