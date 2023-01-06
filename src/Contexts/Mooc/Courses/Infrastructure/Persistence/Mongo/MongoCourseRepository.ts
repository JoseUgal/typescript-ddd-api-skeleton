import { Nullable } from '../../../../../Shared/Domain/Nullable';
import { MongoRepository } from '../../../../../Shared/Infrastructure/Persistence/Mongo/MongoRepository';
import { CourseId } from '../../../../Shared/Domain/Courses/CourseId';
import { Course } from '../../../Domain/Course';
import { CourseRepository } from '../../../Domain/CourseRepository';

export interface CourseDocument {
  _id: string;
  name: string;
  duration: string;
}

export class MongoCourseRepository extends MongoRepository<Course> implements CourseRepository {
  public async search(courseId: CourseId): Promise<Nullable<Course>> {
    const collection = await this.collection();
    const document = await collection.findOne<CourseDocument>({ _id: courseId.value });

    return document
      ? Course.fromPrimitives({ name: document.name, duration: document.duration, id: courseId.value })
      : null;
  }

  public async save(course: Course): Promise<void> {
    return this.persist(course.id.value, course);
  }

  protected collectionName(): string {
    return 'courses';
  }
}
