DROP PROCEDURE IF EXISTS getPosts;

DELIMITER $$

CREATE PROCEDURE getPosts(
  IN _language VARCHAR(2),
  IN _page INT, 
  IN _max INT)
BEGIN
  DECLARE _start INT DEFAULT 0;
  DECLARE _limit1 INT DEFAULT 0;
  DECLARE _limit2 INT DEFAULT 0;

  SET _limit1 = 0;
  SET _limit2 = _max;

  IF _page > 0 THEN
    SET _limit1 = _page * _max - _max;
  END IF;

  SELECT COUNT(1) AS total FROM blog_posts
    WHERE language = _language
      AND situation = 'Published';
     
  SELECT title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language FROM blog_posts 
    WHERE language = _language  
      AND situation = 'Published'
    ORDER BY blog_posts.id DESC
    LIMIT _limit1, _limit2;
END $$
DELIMITER ;