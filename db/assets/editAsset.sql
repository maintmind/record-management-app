UPDATE assets
SET title = $1, description = $2
WHERE asset_id = $3 AND user_id = $4;

SELECT *
FROM assets
WHERE user_id = $4;