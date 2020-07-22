const { Pool } = require('pg');

const cohort = process.argv[2];
const limit = process.argv[3]

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT students.id, students.name AS student, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));