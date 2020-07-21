SELECT COUNT(assistance_requests.*) AS total_assistance, teachers.name AS name
FROM assistance_requests
JOIN teachers
ON teachers.id = teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY name;