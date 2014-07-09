DELIMITER $$
CREATE PROCEDURE debug(msg VARCHAR(255))
BEGIN
 select concat("** ", msg) AS '** DEBUG:'; 
  
END $$
DELIMITER