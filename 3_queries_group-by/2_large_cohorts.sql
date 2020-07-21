SELECT cohorts.name AS cohort_name, COUNT(students.name) AS student_count
FROM students
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.NAME
HAVING COUNT(students.name) >= 18
ORDER BY COUNT(students.name);