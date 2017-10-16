INSERT INTO categories
(asset_id, title, description)
VALUES
($1, $2, $3)
RETURNING *;