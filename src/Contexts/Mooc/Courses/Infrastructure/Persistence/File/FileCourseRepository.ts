import { CourseId } from '../../../../Shared/Domain/Courses/CourseId';
import { Course } from '../../../Domain/Course';
import { CourseRepository } from '../../../Domain/CourseRepository';
import { Nullable } from '../../../../../Shared/Domain/Nullable';
import { deserialize, serialize } from 'bson';
import path from 'path';
import fs from 'fs/promises';

export class FileCourseRepository extends CourseRepository {
  private FILE_PATH = path.join(__dirname, 'courses');

  async search(courseId: CourseId): Promise<Nullable<Course>> {
    const searchedData = await fs.readFile(this.filePath(courseId.value));

    if (!searchedData) return null;

    const { id, name, duration } = deserialize(searchedData);

    return new Course(id, name, duration);
  }
  async save(course: Course): Promise<void> {
    await fs.writeFile(this.filePath(course.id.value), serialize(course));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
