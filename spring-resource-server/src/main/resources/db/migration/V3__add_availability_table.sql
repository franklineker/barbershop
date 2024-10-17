CREATE TABLE availability (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    start_time TIME WITHOUT TIME ZONE NOT NULL,
    end_time TIME WITHOUT TIME ZONE NOT NULL
);

INSERT INTO availability (start_time, end_time) VALUES ('00:00', '23:30');