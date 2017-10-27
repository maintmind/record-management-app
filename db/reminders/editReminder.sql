UPDATE reminders
SET date_due = $1, title = $2, description = $3
WHERE remind_id = $4 AND user_id = $5;