SELECT *
FROM assets
WHERE user_id = $1
ORDER BY asset_id;