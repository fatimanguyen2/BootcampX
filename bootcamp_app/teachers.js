const {Pool} = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
console.log('Connected');
const cohort_name = '%${process.argv[2].toUpperCase()}%';
const values = [cohort_name];
pool
  .query(`SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  ORDER BY teachers.name;`, values)
  .then(res => {
    res.rows.forEach(teacher => console.log(`${teacher.cohort}: ${teacher.teacher}`));
  })
  .catch(err => console.error('query error', err.stack));