DELETE FROM logs
WHERE asset_id = $1 AND user_id = $2;

DELETE FROM reminders
WHERE asset_id = $1 AND user_id = $2;

DELETE FROM categories
WHERE asset_id = $1 AND user_id = $2;

DELETE FROM assets
WHERE asset_id = $1 AND user_id = $2;

SELECT *
FROM assets
WHERE user_id = $2
ORDER BY asset_id;