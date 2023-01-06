import { ISave } from '../../../Shared/Domain/Actions/ISave';
import { ISearch } from '../../../Shared/Domain/Actions/ISearch';
import { Nullable } from '../../../Shared/Domain/Nullable';
import { CourseId } from '../../Shared/Domain/Courses/CourseId';
import { Course } from './Course';

export abstract class CourseRepository implements ISave, ISearch {
  abstract search(courseId: CourseId): Promise<Nullable<Course>>;
  abstract save(course: Course): Promise<void>;
}
