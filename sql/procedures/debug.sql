DELIMITER $$
CREATE PROCEDURE debug(msg VARCHAR(255))
BEGIN
 SELECT CONCAT("*** ", msg) AS '*** DEBUG:'; 
END $$
DELIMITER