 SELECT * 
 FROM reminders
 WHERE date_due < CURRENT_DATE AND status = 'open' AND user_id = $1;
