CREATE TABLE IF NOT EXISTS day(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  day_name VARCHAR(6) NOT NULL
);

CREATE TABLE IF NOT EXISTS course(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(20) NOT NULL,
  course_time TIME
);

CREATE TABLE IF NOT EXISTS schedule(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE IF NOT EXISTS student(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  sex VARCHAR(2) DEFAULT '男',
  class_id INT,
  schedule_id INT
);

CREATE TABLE IF NOT EXISTS class(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  class_name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS student_course(
  student_id INT,
  course_id INT
);

CREATE TABLE IF NOT EXISTS day_course(
  schedule_id INT,
  day_id INT,
  course_id INT
);


ALTER TABLE student_course ADD CONSTRAINT FK_Reference_student_course_student FOREIGN KEY (student_id)
  REFERENCES student (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE student_course ADD CONSTRAINT FK_Reference_student_course_course FOREIGN KEY (course_id)
  REFERENCES course (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE student ADD CONSTRAINT FK_Reference_student_class FOREIGN KEY (class_id)
  REFERENCES class (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE student ADD CONSTRAINT FK_Reference_student_schedule FOREIGN KEY (schedule_id)
  REFERENCES schedule (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE day_course ADD CONSTRAINT FK_Reference_day_course_schedule FOREIGN KEY (schedule_id)
  REFERENCES schedule (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE day_course ADD CONSTRAINT FK_Reference_day_course_day FOREIGN KEY (day_id)
  REFERENCES day (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE day_course ADD CONSTRAINT FK_Reference_day_course_course FOREIGN KEY (course_id)
  REFERENCES course (id) ON DELETE CASCADE ON UPDATE CASCADE;


  CREATE VIEW show_schedule AS
   SELECT name, sex, day_name,course_name, course_time from
   (SELECT id, name, sex, day_id, course_id from (SELECT * from
    student LIMIT 20, 10) s, day_course where day_course.schedule_id = s.schedule_id) tem,
     day, course where tem.day_id = day.id AND tem.course_id = course.id;

     CREATE VIEW student_schedule AS
      SELECT name, sex, day_name, course_time,GROUP_CONCAT(course.course_name SEPARATOR ' | ')
      As schedule from student
      (SELECT id, name, sex, day_id, course_id from (SELECT * from
       student LIMIT 20, 10) s, day_course where day_course.schedule_id = s.schedule_id) tem,
        day, course where tem.day_id = day.id AND tem.course_id = course.id;
