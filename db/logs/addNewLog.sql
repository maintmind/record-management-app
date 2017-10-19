INSERT INTO logs
(cat_id, user_id, date_submit, date_complete, title, description, img, cost)
VALUES
($1, $2, CURRENT_DATE, $3, $4, $5, $6, $7);

SELECT *
FROM logs
WHERE user_id = $2;
