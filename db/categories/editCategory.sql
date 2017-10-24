UPDATE categories
SET title = $1, description = $2
WHERE cat_id = $3 AND user_id = $4;

SELECT *
FROM categories
WHERE user_id = $4
ORDER BY cat_id;