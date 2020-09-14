SELECT students.name AS student, AVG(assignment_submissions.duration)as average_assignment_duration
FROM students
JOIN assignment_submissions ON student_id = students.id
WHERE students.end_date IS null
GROUP BY student
ORDER BY average_assignment_duration DESC;