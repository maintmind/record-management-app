INSERT INTO reminders
(user_id, cat_id, status, date_created, date_due, title, description)
VALUES
($1, $2, 'open', CURRENT_DATE, $3, $4, $5);

SELECT *
FROM reminders
WHERE user_id = $1;