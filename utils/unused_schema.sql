-- Drop Tables
DROP TABLE if EXISTS critic, review, comment, collection, game,
collection_to_game, collection_to_viewer, collection_to_editor,
genre, genre_to_game, igdb_uuid_lookup
/*
-- Create Tables
CREATE TABLE if NOT EXISTS igdb_uuid_lookup(
    uuid UUID NOT NULL,
    igdb_id INT NOT NULL,
    table_name VARCHAR(255) NOT NULL,

    --Keys
    PRIMARY KEY (igdb_id, table_name)
);

CREATE TABLE if NOT EXISTS critic(
    id UUID NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    --Key Setup
    PRIMARY KEY (id)
);

CREATE TABLE if NOT EXISTS review(
    id UUID NOT NULL,
    title VARCHAR(50) NOT NULL,
    rating INT NOT NULL,
    details TEXT NOT NULL,
    likes INT,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    --Key Setup
    PRIMARY KEY (id)
);

CREATE TABLE if NOT EXISTS comment(
    critic_id UUID NOT NULL,
    review_id UUID NOT NULL,
    details TEXT NOT NULL,
    likes INT,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    --Key Setup
    FOREIGN KEY (critic_id) REFERENCES critic(id),
    FOREIGN KEY (review_id) REFERENCES review(id),
    PRIMARY KEY (critic_id, review_id)
);

CREATE TABLE if NOT EXISTS game(
    id UUID NOT NULL,
    --Likely foreign keys
    category_id INT NOT NULL,
    cover_id INT NOT NULL,

    slug TEXT NOT NULL,
    storyline TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL,
    checksum TEXT NOT NULL,
    first_release_date DATE NOT NULL,
    updated_at DATE NOT NULL,
    url TEXT NOT NULL,
    aggregated_rating REAL NOT NULL,
    
    --Key Setup
    PRIMARY KEY (id)
);

CREATE TABLE if NOT EXISTS genre(
    id UUID NOT NULL,
    name VARCHAR(50) NOT NULL,
    slug TEXT NOT NULL,
    updated_at DATE NOT NULL,

    --Key Setup
    PRIMARY KEY (id)
);

CREATE TABLE if NOT EXISTS genre_to_game(
    genre_id UUID NOT NULL,
    game_id UUID NOT NULL,

    --Key Setup
    FOREIGN KEY (genre_id) REFERENCES genre(id),
    FOREIGN KEY (game_id) REFERENCES game(id),
    PRIMARY KEY (genre_id, game_id)
);

CREATE TABLE if NOT EXISTS collection(
    id UUID NOT NULL,
    critic_id UUID NOT NULL,
    title VARCHAR(50) NOT NULL,
    subtitle VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    --Key Setup
    PRIMARY KEY (id),
    FOREIGN KEY (critic_id) REFERENCES critic(id)
);

CREATE TABLE if NOT EXISTS collection_to_game(
    collection_id UUID NOT NULL,
    game_id UUID NOT NULL,

    --Key Setup
    FOREIGN KEY (collection_id) REFERENCES collection(id),
    FOREIGN KEY (game_id) REFERENCES game(id),
    PRIMARY KEY (collection_id, game_id)
);

CREATE TABLE if NOT EXISTS collection_to_viewer(
    collection_id UUID NOT NULL,
    viewer_id UUID NOT NULL,

    --Key Setup
    FOREIGN KEY (collection_id) REFERENCES collection(id),
    FOREIGN KEY (viewer_id) REFERENCES critic(id),
    PRIMARY KEY (collection_id, viewer_id)
);

CREATE TABLE if NOT EXISTS collection_to_editor(
    collection_id UUID NOT NULL,
    editor_id UUID NOT NULL,

    --Key Setup
    FOREIGN KEY (collection_id) REFERENCES collection(id),
    FOREIGN KEY (editor_id) REFERENCES critic(id),
    PRIMARY KEY (collection_id, editor_id)
);
*/