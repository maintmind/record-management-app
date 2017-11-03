UPDATE logs
SET date_complete = $1, title = $2, description = $3, img = $6
WHERE log_id = $4 AND user_id = $5;

SELECT *
FROM logs
WHERE user_id = $5
ORDER BY date_complete DESC;