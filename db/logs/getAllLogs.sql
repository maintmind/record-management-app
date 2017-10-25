SELECT *
FROM logs
WHERE user_id = $1
ORDER BY date_complete DESC;