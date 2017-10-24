INSERT INTO assets
(user_id, title, description)
VALUES
($1, $2, $3);

SELECT *
FROM assets
WHERE user_id = $1
ORDER BY asset_id;

