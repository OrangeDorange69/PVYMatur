-- CREATE TABLE studenti (
-- 	id SERIAL PRIMARY KEY,
-- 	jmeno VARCHAR(50) NOT NULL,
-- 	prijmeni VARCHAR(50) NOT NULL,
-- 	email VARCHAR(100) UNIQUE,
-- 	vek INTEGER,
-- 	trida VARCHAR(10)
-- );

-- CREATE TABLE knihy (
-- 	id SERIAL PRIMARY KEY,
-- 	nazev VARCHAR(50) NOT NULL,
-- 	autor VARCHAR(100) NOT NULL,
-- 	rok_vydani INTEGER,
-- 	cena DECIMAL(6,2),
-- 	dostupne BOOLEAN DEFAULT true
-- );


-- INSERT INTO studenti(jmeno,prijmeni,email, vek, trida)
-- VALUES('Kokot', 'Tupej', 'officialkokotpica@officialkokotpica.com', 69, 3);

-- INSERT INTO knihy(id,nazev,autor,rok_vydani,cena,dostupne)
-- VALUES(1, 'Dva kokoti', 'YZO', 2049, '699.67', true),
-- (2, 'Official Kokot Pica', 'GOLDKIID', 2069, '420.69', true)

-- SELECT * from knihy;
-- SELECT * from studenti;
-- SELECT jmeno,prijmeni FROM studenti;

-- -- WHERE [DESC,ASC]
-- select * from studenti WHERE jmeno = 'Kokot' ORDER BY prijmeni DESC;

-- SELECT * FROM studenti WHERE trida IN('3', '4');

-- SELECT * FROM knihy WHERE dostupne = true AND cena > 300 ORDER BY cena DESC;

-- SELECT * FROM knihy WHERE autor = 'GOLDKIID';

-- -- UPDATE;
-- UPDATE studenti SET email = 'kokot@pica.cz' WHERE ID = 1;
-- UPDATE studenti SET jmeno = 'KOKOTNEW' WHERE ID = 1;
-- update studenti SET vek = 69 WHERE ID = 1;
-- SELECT * FROM studenti;

--DELETE FROM
-- DELETE FROM studenti WHERE jmeno = 'KOKOTNEW';

--DROP
-- DROP TABLE studenti;


