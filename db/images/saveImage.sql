INSERT INTO images
(user_id, asset_id, cat_id, log_id, img_url)
VALUES
($1, $2, $3, $4, $5)

RETURNING *



