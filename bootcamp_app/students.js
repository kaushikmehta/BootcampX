const { Pool } = require('pg');

const cohort = process.argv[2];
const limit = process.argv[3]

const values = [`%${cohort}%`, limit];

const queryString = `
SELECT students.id, students.name AS student, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(queryString, values)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

pool.end()