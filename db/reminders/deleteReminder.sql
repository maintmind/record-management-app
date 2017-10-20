DELETE FROM reminders
WHERE remind_id = $1 AND user_id = $2;

SELECT *
FROM reminders
WHERE user_id = $2;