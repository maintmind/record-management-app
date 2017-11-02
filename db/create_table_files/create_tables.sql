CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(180),
email VARCHAR(180),
img VARCHAR(200),
auth_id VARCHAR(200)
);

CREATE TABLE assets (
asset_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
title VARCHAR(180),
description VARCHAR(500)
);

CREATE TABLE categories (
cat_id SERIAL PRIMARY KEY,
asset_id INTEGER REFERENCES assets,
user_id INTEGER REFERENCES users,
title VARCHAR(180),
description VARCHAR(500)
);

CREATE TABLE logs (
log_id SERIAL PRIMARY KEY,
asset_id INTEGER REFERENCES assets,
cat_id INTEGER REFERENCES categories,
user_id INTEGER REFERENCES users,
date_submit DATE,
date_complete DATE,
title VARCHAR(180),
description VARCHAR(500),
img TEXT,
cost MONEY
);

CREATE TABLE reminders (
remind_id SERIAL PRIMARY KEY,
asset_id INTEGER REFERENCES assets,
cat_id INTEGER REFERENCES categories,
user_id INTEGER REFERENCES users,
status VARCHAR(50),
date_created DATE,
date_due DATE,
title VARCHAR(180),
description VARCHAR(500)
);

CREATE TABLE images (
img_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users,
asset_id INTEGER REFERENCES assets,
cat_id INTEGER REFERENCES categories,
log_id INTEGER REFERENCES logs,
img_url VARCHAR(500)
);