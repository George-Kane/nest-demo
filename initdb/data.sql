
CREATE TYPE application_status AS ENUM ('Applied', 'Rejected', 'Accepted');
CREATE TYPE user_roles AS ENUM ('admin', 'user');

CREATE TABLE grants (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    foundation VARCHAR(255),
    avg_amount INT,
    status application_status,
    deadline DATE,
    match_date DATE,
    location VARCHAR(255),
    areas_of_funding TEXT[]
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    feedback TEXT
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    like_grant_ids number[]
    dislike_grant_ids number[]
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    refresh_token VARCHAR(255),
    role user_roles NOT NULL
);

INSERT INTO users (username, password, nickname, role) VALUES
('admin', 'admin', 'admin', 'admin');


INSERT INTO grants (title, foundation, avg_amount, status, deadline, match_date, location, areas_of_funding) VALUES
('The Future of Humanity', 'The Rockefeller Foundation', 200000, 'Accepted', '2025-01-31', '2024-12-20', 'USA', ARRAY['Climate Change', 'Health']),
('Robinson Foundation Grant', 'Robinson Foundation', 25000, 'Applied', '2025-02-28', '2024-12-20', 'USA', ARRAY['Climate Change', 'Health']),
('Dribble Foundation Grant', 'Dribble Foundation', 75000, 'Applied', '2025-02-28', '2024-12-20', 'USA', ARRAY['Climate Change', 'Health']),
('Looking Out', 'Looking Out Foundation', 100000, 'Accepted', '2025-02-28', '2025-01-31', 'USA', ARRAY['Climate Change', 'Health']),
('The Future of Humanity', 'The Rockefeller Foundation', 1000000, 'Accepted', '2025-01-31', '2025-1-31', 'USA', ARRAY['Climate Change', 'Health']);