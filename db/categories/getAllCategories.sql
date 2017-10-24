SELECT *
FROM categories
WHERE user_id = $1
ORDER BY cat_id;