 SELECT * 
 FROM reminders
 WHERE date_due > (CURRENT_DATE) AND date_due < (CURRENT_DATE + 7) AND status = 'OPEN' AND user_id = $1


