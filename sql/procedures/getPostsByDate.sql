DROP PROCEDURE IF EXISTS getPostsByDate;

DELIMITER $$

CREATE PROCEDURE getPostsByDate(
  IN _year VARCHAR(4),
  IN _month VARCHAR(2),
  IN _day VARCHAR(2),
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

  IF  _year <> 0 AND _month <> 0 AND _day <> 0 THEN
    SELECT COUNT(1) AS total FROM blog_posts
      WHERE language = _language
        AND year = _year
        AND month = _month
        AND day = _day
        AND situation = 'Published';

    SELECT title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language
      FROM blog_posts 
      WHERE year = _year
        AND month = _month
        AND day = _day
        AND language = _language 
        AND situation = 'Published'
      ORDER BY blog_posts.id DESC
      LIMIT _limit1, _limit2;
  ELSE
    IF _year <> 0 AND _month <> 0 THEN
      SELECT COUNT(1) AS total FROM blog_posts
        WHERE language = _language
          AND year = _year
          AND month = _month
          AND situation = 'Published';

      SELECT title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language
        FROM blog_posts 
        WHERE year = _year
          AND month = _month
          AND language = _language 
          AND situation = 'Published'
        ORDER BY blog_posts.id DESC
        LIMIT _limit1, _limit2;
    ELSE
      SELECT COUNT(1) AS total FROM blog_posts
        WHERE language = _language
          AND year = _year
          AND situation = 'Published';

      SELECT title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language
        FROM blog_posts 
        WHERE year = _year
          AND language = _language 
          AND situation = 'Published'
        ORDER BY blog_posts.id DESC
        LIMIT _limit1, _limit2;
    END IF;
  END IF;
END $$
DELIMITER ;