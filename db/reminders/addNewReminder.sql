INSERT INTO reminders
(user_id, asset_id, cat_id, status, date_created, date_due, title, description)
VALUES
($1, $2, $3, 'open', CURRENT_DATE, $4, $5, $6);

SELECT *
FROM reminders
WHERE user_id = $1;