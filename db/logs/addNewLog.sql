INSERT INTO logs
(cat_id, user_id, date_submit, date_complete, title, description, img, cost)
VALUES
($1, $2, current_date, $4, $5, $6, $7, $8);

SELECT *
FROM logs;
