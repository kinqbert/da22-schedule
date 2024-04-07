export class Lecture {
  static TYPE_LECTURE = 'Lecture';
  static TYPE_PRACTICE = 'Practice';
  static TYPE_LAB = 'Lab';

  constructor(name, lecturer, type, link) {
    this.name = name;
    this.lecturer = lecturer;
    this.type = type;
    this.link = link;
  }
}