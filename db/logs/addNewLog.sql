INSERT INTO logs
(asset_id, cat_id, user_id, date_submit, date_complete, title, description, img, cost)
VALUES
($1, $2, $3, CURRENT_DATE, $4, $5, $6, $7, $8);


SELECT *
FROM logs
WHERE user_id = $3;


