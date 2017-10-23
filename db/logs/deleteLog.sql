DELETE FROM logs
WHERE log_id = $1 AND user_id = $2;

SELECT *
FROM logs
WHERE user_id = $2;