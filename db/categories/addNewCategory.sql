INSERT INTO categories
(asset_id, user_id, title, description)
VALUES
($1, $2, $3, $4);

SELECT *
FROM categories;
