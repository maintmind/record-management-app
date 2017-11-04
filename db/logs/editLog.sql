UPDATE logs
SET date_complete = $1, title = $2, description = $3, img = $4
WHERE log_id = $5 AND user_id = $6;

SELECT *
FROM logs
WHERE user_id = $6
ORDER BY date_complete DESC;