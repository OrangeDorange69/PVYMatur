SELECT film_id, title FROM film;

-- DISTINCT

SELECT DISTINCT(film_id) FROM film;
SELECT DISTINCT(last_name) FROM customer;

--COUNT (pocet)
SELECT COUNT(title) FROM film;
SELECT COUNT(rating) FROM film;

-- WHERE
SELECT * FROM payment
WHERE amount >= 10;

SELECT * FROM film
WHERE title = 'Chamber Italian';

SELECT * FROM customer
WHERE first_name = 'Jared' AND activebool = true;

--ORDER BY 'ASC/DESC' AND LIMIT 
SELECT * FROM payment
ORDER BY amount DESC
LIMIT 5;


-- BETWEEN
SELECT * FROM film
WHERE length BETWEEN 100 AND 130;

-- LIKE (citlivost na velikost pismen)
-- ILIKE (necitlivost na velikost pismen
-- _ = jeden znak, % = sekvence znaku

-- krestni jmena ktera zacinaji na velke A
SELECT * FROM customer
WHERE first_name LIKE 'A%';

-- krestni jmena ktera zacinaji na A a maji 3 pismena
SELECT * FROM customer
WHERE first_name LIKE 'A__';

SELECT * FROM customer
WHERE first_name ILIKE '%a%';

-- agregační funkce
--COUNT, AVG,MAX,MIN,SUM

select MAX(amount) FROM payment;
select MIN(amount) FROM payment;
select AVG(amount) FROM payment;
select SUM(amount) FROM payment;
select COUNT(amount) FROM payment;
