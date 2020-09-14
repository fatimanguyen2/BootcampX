SELECT day, COUNT(*) as total_assignment
FROM assignments
GROUP BY day
HAVING COUNT(*) > 9
ORDER BY day;