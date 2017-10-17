CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(180),
email VARCHAR(180),
img TEXT,
auth_id TEXT
);

CREATE TABLE assets (
asset_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
title VARCHAR(180),
description TEXT
);

CREATE TABLE categories (
cat_id SERIAL PRIMARY KEY,
asset_id INTEGER REFERENCES assets,
user_id INTEGER REFERENCES users,
title VARCHAR(180),
description TEXT
);

CREATE TABLE logs (
log_id SERIAL PRIMARY KEY,
cat_id INTEGER REFERENCES categories,
user_id INTEGER REFERENCES users,
date_submit DATE,
date_complete DATE,
title VARCHAR(180),
description TEXT,
img TEXT,
cost MONEY
);

CREATE TABLE reminders (
remind_id SERIAL PRIMARY KEY,
cat_id INTEGER REFERENCES categories,
user_id INTEGER REFERENCES users,
status VARCHAR(50),
date_created DATE,
date_due DATE,
title VARCHAR(180),
description TEXT
);