INSERT INTO reminders
(user_id, cat_id, status, date_created, date_due, title, description)
VALUES
($1, $2, $3, $4, $5, $6, $7);

SELECT *
FROM reminders;
