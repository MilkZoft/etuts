/*DELIMITER $$
CREATE PROCEDURE debug_msg(msg VARCHAR(255))
BEGIN
 select concat("** ", msg) AS '** DEBUG:'; 
  
END $$
DELIMITER ;*/

DELIMITER $$

CREATE PROCEDURE getPosts(
  IN _language VARCHAR(2),
  IN _page INT, 
  IN _max INT)
BEGIN
  DECLARE _start INT DEFAULT 0;
  DECLARE _limit1 INT DEFAULT 0;
  DECLARE _limit2 INT DEFAULT 0;

  IF _page > 0 THEN
    SET _limit1 = _page * _max - _max;
    SET _limit2 = _max;
  ELSE
    SET _limit1 = 0;
    SET _limit2 = _max;
  END IF;

  SELECT COUNT(1) AS total FROM blog_posts
  WHERE language = _language
      AND situation = 'published';
     
  SELECT title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language FROM blog_posts 
  WHERE language = _language  
    AND situation = 'published'
    ORDER BY blog_posts.id DESC
    LIMIT _limit1, _limit2;
END $$
DELIMITER ;

/* DROP PROCEDURE IF EXISTS getPosts; */
/* CALL getPosts('en', 'title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language', 0, 12);*/