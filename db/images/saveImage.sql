INSERT INTO images
(user_id, asset_id, cat_id, log_id, img_url)
VALUES
($1, $2, $3, null, $4);

SELECT img_id
FROM images
WHERE img_url = $4;



