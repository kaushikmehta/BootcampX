SELECT day, COUNT(name)
FROM assignments
GROUP BY day
HAVING COUNT('name') >= 10
ORDER BY day;