DELETE FROM logs
WHERE cat_id = $1 AND user_id = $2;

DELETE FROM reminders
WHERE cat_id = $1 AND user_id = $2;

DELETE FROM categories
WHERE cat_id = $1 AND user_id = $2;

SELECT *
FROM categories
WHERE user_id = $2
ORDER BY cat_id;